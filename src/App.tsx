import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom'
import RouterManagement from './routes/router';

function App() {
  return (
    <div>
      <RouterManagement />
    </div>
  );
}

export default App;
