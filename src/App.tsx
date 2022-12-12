import React, { useEffect } from 'react';
import './App.css';
import RouterManagement from './routes/router';
import ScreenWrapper from './common/components/ScreenWrapper/ScreenWrapper';

import { LeetCode } from "leetcode-query";

/**
 * @element RouterManagement: to control router and screen of the app to show to user
 * @element ScreenWrapper: using for wrap some special component on the screen
 */
function App() {


  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      const leetcode = new LeetCode();
      const user = leetcode.user("username");
      return user
    };
    const result = fetchData()
    // make sure to catch any error
    .catch(console.error);;

  // what will be logged to the console?
  console.log(result);
}, [])
  return (
    <>
      <ScreenWrapper />
      <RouterManagement />
    </>
  );
}

export default App;
