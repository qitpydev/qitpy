import React from 'react';
import './App.css';
import RouterManagement from './routes/router';
import ScreenWrapper from './common/components/ScreenWrapper/ScreenWrapper';

/**
 * @element RouterManagement: to control router and screen of the app to show to user
 * @element ScreenWrapper: using for wrap some special component on the screen
 */
function App() {
  return (
    <>
      <ScreenWrapper />
      <RouterManagement />
    </>
  );
}

export default App;
