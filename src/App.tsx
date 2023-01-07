import React from 'react';
import './App.css';
import ScreenWrapper from './pages/Portfolio/features/ScreenWrapper/ScreenWrapper';
import RouterManagement from './routes/router';

/**
 * @element RouterManagement: to control router and screen of the app to show to user
 * @element ScreenWrapper: using for wrap some special component on the screen
 */
function App() {
  return (
    <>
      <RouterManagement />
    </>
  );
}

export default App;
