import React from 'react'
import { Routes, Route } from 'react-router-dom';
import TodoApp from '../features/TodoApp/TodoApp';
import MyManagement from '../pages/MyManagement/MyManagement';
import Portfolio from '../pages/Portfolio/Portfolio';
import CV from '../features/components/CV/CV';

function RouterManagement() {
  return (
      <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/CV" element={<CV />} />
          <Route path='/my-management/' element={<MyManagement />} >
            <Route path='todo' element={<TodoApp />} />
          </Route>
      </Routes>
  )
}

export default RouterManagement