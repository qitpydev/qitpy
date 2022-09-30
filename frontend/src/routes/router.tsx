import React from 'react'
import { Routes, Route } from 'react-router-dom';
import TodoApp from '../features/TodoApp/TodoApp';
import NoteApp from '../features/NoteApp/NoteApp';
import MyManagement from '../pages/MyManagement/MyManagement';
import Portfolio from '../pages/Portfolio/Portfolio';
import CV from '../features/Portfolio/components/CV/CV';


function RouterManagement() {
  return (
      <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/CV" element={<CV />} />
          <Route path='/my-management/' element={<MyManagement />} >
            <Route path='todo' element={<TodoApp />} />
            <Route path='note' element={<NoteApp />} />
          </Route>
      </Routes>
  )
}

export default RouterManagement 