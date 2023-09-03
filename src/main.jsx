import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToDoListApp } from './ToDoListApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToDoListApp />
  </React.StrictMode>,
)
