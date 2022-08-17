import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link, Outlet } from 'react-router-dom'
import ManageRouter from './routes/router';

function App() {
  return (
    <div>
      <ManageRouter />
    </div>
  );
}



export default App;
