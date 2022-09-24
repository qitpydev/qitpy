import React from 'react'
import "./CustomTooltip.scss";

/**
 * Example
 * -----------------------
 * -----------------------
 * --    22/03/2190     --
 * --  TaskDoneDay: 34  --
 * --  TaskDoneYear: 45 --
 * --  Total: 33        --
 * -----------------------
 * -----------------------
 */

const renderTooltip = (date, doneDayAmount, doneYearAmount, totalAmount) => {
  return (
    <div className='tooltip-custom'>
        <div className="tooltip-custom-date">{date}</div>
        <div className="tooltip-custom-done-day">{doneDayAmount.name} : {doneDayAmount.value}</div>
        <div className="tooltip-custom-done-year">{doneYearAmount.name} : {doneYearAmount.value}</div>
        <div className="tooltip-custom-total">{totalAmount.name} : {totalAmount.value}</div>
    </div>
  )
}

function CustomTooltip(props) {
  const {active, payload} = props;

  if (active && payload && payload.length) {
    const [doneDay, doneYear, total] = payload;

    const date = doneDay.payload.date;
    const doneDayAmount = {
      name: doneDay.name,
      value: doneDay.value
    }
    const doneYearAmount = {
      name: doneYear.name,
      value: doneYear.value
    }
    const totalAmount = {
      name: total.name,
      value: total.value
    }
    
    return renderTooltip(date, doneDayAmount, doneYearAmount, totalAmount);
  } else {
    return null;
  }

}

export default CustomTooltip