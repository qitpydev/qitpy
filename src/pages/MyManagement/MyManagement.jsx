import React, {useState} from 'react'
import { Link, Outlet } from 'react-router-dom';
import "./MyManagement.scss";


// add transision bw todo and note: display none -> dissapear 1s

export default function MyManagement() {

  const [toolBar, setToolbar] = useState(false)

  const handleToolBar = () => {
    setToolbar(!toolBar)
  }

  return (
    <div className='my-management'>
        <div className='tool-bar' onClick={handleToolBar}>
          <label className='tool-bar-label' style={toolBar ? {display: 'none'} : {display: 'block'}}>
            Tool-Bar
            </label>
          <nav className='my-management-links' style={toolBar ? {display: 'flex'} : {display: 'none'}}>
            <Link to="/my-management/todo" className='todo-link' onClick={handleToolBar}>Todo</Link>
            <Link to="/my-management/note" className='note-link' onClick={handleToolBar}>Note</Link>
          </nav>
        </div>
        <Outlet />
    </div>
  )
}
