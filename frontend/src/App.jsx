import { useState, useEffect } from 'react';
import api from './api';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Open');

  // fetch tasks when the component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await api.get('/tasks/');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/tasks/', {
        title,
        description,
        status,
      });
      // clear form and refresh list
      setTitle('');
      setDescription('');
      setStatus('Open');
      fetchTasks();
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <div className="container">
      <h1>Internal Task Tracker</h1>

      <div className="form-section">
        <h2>Create a New Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title *</label>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label>Description</label>
            <textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
            />
          </div>

          <div className="form-group">
            <label>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <button type="submit">Add Task</button>
        </form>
      </div>

      <div className="list-section">
        <h2>Task List</h2>
        {tasks.length === 0 ? (
          <p>No tasks found.</p>
        ) : (
          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task.id} className="task-item">
                <div className="task-header">
                  <h3>{task.title}</h3>
                  <span className={`status badge-${task.status.replace(/\s+/g, '-').toLowerCase()}`}>
                    {task.status}
                  </span>
                </div>
                {task.description && <p className="task-desc">{task.description}</p>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;