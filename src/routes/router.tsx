import React from 'react'
import { Routes, Route } from 'react-router-dom';
import TodoApp from '../features/TodoApp/TodoApp';
import AppCenter from '../features/AppCenter/AppCenter';
import NoteApp from '../features/NoteApp/NoteApp';

function RouterManagement() {
  return (
      <Routes>
          <Route path='/app' element={<AppCenter />} >
            <Route path='todoApp' element={<TodoApp />} />
            <Route path='noteApp' element={<NoteApp />} />
          </Route>
      </Routes>
  )
}

export default RouterManagement 