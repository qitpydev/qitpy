import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import TodoApp from '../TodoApp/TodoApp';

export default function AppCenter() {
  return (
    <div>
        Tool-Bar
        <nav>
            <Link to="/app/todoApp">todoApp</Link>
            <Link to="/app/noteApp">noteApp</Link>
        </nav>
        <Outlet />
    </div>
  )
}
