import React from 'react'
import { getWeekNumber } from '../../../common/function/functions'
import './ExploreMore.scss'

import ProgressBar from "@ramonak/react-progress-bar";

function ExploreMore() {
  const week_str = `Current week: ${getWeekNumber()} / 52`
  const percent = Math.floor(getWeekNumber() / 52 * 100)
  return (<>
    <div className='weekly-progress'>
      <span>{week_str}</span>
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
    <div className='explore-more'> From the earth, with -<span style={{color: "red"}}> ♥️</span>-</div>
  </>
  )
}

export default ExploreMore