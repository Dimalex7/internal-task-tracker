import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// mount the main app component to the dom
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)