import React from 'react'
import { Routes, Route } from 'react-router-dom';
import TodoApp from '../components/TodoApp/TodoApp';
import NoteApp from '../components/NoteApp/NoteApp';
import MyManagement from '../pages/MyManagement/MyManagement';
import Portfolio from '../pages/Portfolio/Portfolio';
import ExperienceTimeline from '../components/Portfolio/PortfolioContent/ExperienceTimeline/ExperienceTimeline';


function RouterManagement() {
  return (
      <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path='/my-management/' element={<MyManagement />} >
            <Route path='todo' element={<TodoApp />} />
            <Route path='note' element={<NoteApp />} />
          </Route>
      </Routes>
  )
}

export default RouterManagement 