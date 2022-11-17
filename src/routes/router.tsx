import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Portfolio from '../pages/Portfolio/Portfolio';
import CV from '../features/components/CV/CV';

function RouterManagement() {
  return (
      <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/CV" element={<CV />} />
      </Routes>
  )
}

export default RouterManagement