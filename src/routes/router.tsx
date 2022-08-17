import React from 'react'
import { Routes, Route } from 'react-router-dom';
import TodoApp from '../features/todoApp/TodoApp';

function ManageRouter() {
  return (
    <Routes>
        <Route index path='/todo' element={<TodoApp />} />
    </Routes>
  )
}

export default ManageRouter