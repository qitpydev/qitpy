import React from 'react';
import './App.css';
import RouterManagement from './routes/router';
import ScreenWrapper from './components/ScreenWrapper/ScreenWrapper';


function App() {
  return (
    <div>
      <ScreenWrapper />
      <RouterManagement />
    </div>
  );
}

export default App;
