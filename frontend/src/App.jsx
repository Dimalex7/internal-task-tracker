import { useState, useEffect } from 'react';
import api from './api';
import './App.css';

function App() {
  // component state
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('open');

  // fetch tasks on initial load
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await api.get('/tasks/');
      setTasks(response.data);
    } catch (error) {
      console.error('error fetching tasks:', error);
    }
  };

  // handle form submission
  const createTask = async (e) => {
    e.preventDefault();
    const newTask = { title, description, status };
    try {
      await api.post('/tasks/', newTask);
      // reset form fields
      setTitle('');
      setDescription('');
      setStatus('open');
      fetchTasks();
    } catch (error) {
      console.error('error creating task:', error);
    }
  };

  // helper for dynamic badge colors
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'open': return 'status-badge open';
      case 'in progress': return 'status-badge progress';
      case 'completed': return 'status-badge completed';
      default: return 'status-badge';
    }
  };

  return (
    <div className="app-container">
      <h1 className="main-header">Task tracker api</h1>

      {/* task creation form */}
      <div className="task-form">
        <h3 className="form-header">Create a new task</h3>
        <form onSubmit={createTask}>
          <div className="form-group">
            <label>title *</label>
            <input 
              type="text" 
              placeholder="e.g. call client"
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>description</label>
            <textarea 
              placeholder="optional description"
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>status</label>
            <select 
              value={status} 
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="open">open</option>
              <option value="in progress">in progress</option>
              <option value="completed">completed</option>
            </select>
          </div>
          <button className="submit-btn" type="submit">add task</button>
        </form>
      </div>

      {/* task list display */}
      <div className="task-list-section">
        <h3>my tasks</h3>
        <div className="task-list">
          {tasks.map(task => (
            <div key={task.id} className="task-item">
              <div className="task-main-info">
                <p className="task-title">{task.title}</p>
                <span className={getStatusBadgeClass(task.status)}>
                  {task.status}
                </span>
              </div>
              <p className="task-description">{task.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;