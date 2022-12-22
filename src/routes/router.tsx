import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Portfolio from '../pages/Portfolio/Portfolio';
import CV from '../features/components/CV/CV';
import LabelLineDecor from '../features/components/CV/components/LabelLineDecor/LabelLineDecor';

function RouterManagement() {
  return (
      <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/CV" element={<CV />} />
          <Route path="cv-line" element={<LabelLineDecor name="Some title"/>} />
      </Routes>
  )
}

export default RouterManagement