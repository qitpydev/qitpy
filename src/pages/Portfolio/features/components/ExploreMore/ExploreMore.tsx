import React from 'react'
import { getWeekNumber, getDayNumber, getDaysOfYear } from '../../../common/function/functions'
import './ExploreMore.scss'

import ProgressBar from "@ramonak/react-progress-bar";

function ExploreMore() {
  const week_str =  `Current week: ${getWeekNumber()} / 52`
  const day_str =   `Current day: ${getDayNumber()} / ${getDaysOfYear()}`
  const percent = Math.floor(getDayNumber() / getDaysOfYear() * 100)
  return (<>
    <div className='weekly-progress'>
      <span>{week_str}</span>
      <span>{day_str}</span>
      <ProgressBar
        completed={percent}
        labelSize={"10px"}
        labelColor={"red"}
        labelAlignment={"outside"}
        baseBgColor={"green"}
        bgColor={"red"}
        height={"7px"}
      />
    </div>
    <div className='explore-more'> 😌 Keep calm & carry on 🐤 Just do it | Don't worry! -<span style={{color: "red"}}> ♥️</span>-</div>
  </>
  )
}

export default ExploreMore