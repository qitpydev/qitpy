import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Portfolio from '../pages/Portfolio/Portfolio';
import Todo from '../pages/Todo/Todo';

function RouterManagement() {
  return (
      <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/todo" element={<Todo />} />
      </Routes>
  )
}

export default RouterManagement