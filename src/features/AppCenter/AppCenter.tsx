import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import TodoApp from '../TodoApp/TodoApp';
import "./AppCenter.scss";

export default function AppCenter() {


  const handleToolBar = (a) => {
    console.log("click", a);
  }

  return (
    <div className='app-center'>
        <div className='tool-bar' onClick={handleToolBar}>
          <label className='tool-bar-label'>Tool-Bar</label>
          <nav className='app-center-links'>
            <Link to="/app/todoApp" className='todo-link'>Todo</Link>
            <Link to="/app/noteApp" className='note-link'>Note</Link>
          </nav>
        </div>
        <Outlet />
    </div>
  )
}
