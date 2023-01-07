import React from 'react'
import './ActivityFrequency.scss'
import GitHubCalendar from 'react-github-calendar';
import { Theme } from 'react-github-calendar';


function ActivityFrequency() {

  const My_THEME: Theme = {
    level4: '#006400',
    level3: '#228B22',
    level2: '#32CD32',
    level1: '#7CFC00',
    level0: '#171717',
  };
  return (
    <div id='activity-frequency' style={{color: "green"}}>
      <GitHubCalendar
        username="qitpy"
        hideColorLegend={false}
        showWeekdayLabels={true}
        theme={My_THEME}
        />
    </div>
  )
}

export default ActivityFrequency