import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import DayTodo from '../components/DayTodo/DayTodo';
import './CalendarTodo.scss'

function CalendarTodo(props) {

  const [value, onChange] = useState(new Date());
  return (
    <div className='calendar-todo'>
    <Calendar 
      // onChange={onChange} 
      value={value} 
      // formatMonthYear = {(locale, date) => dayjs(date).format('DD-MM-YYYY')}
      maxDetail="month"
      // onChange={(value, event) => alert('New date is: ' + value)}
      // onViewChange={({ action, activeStartDate, value, view }) => alert('New view is: '+ view)}
      // showDoubleView={true}
      showFixedNumberOfWeeks={true}
      showNeighboringMonth={false}
      // showWeekNumbers={true}
    />
    <DayTodo />
  </div>
  )
}

CalendarTodo.propTypes = {}

export default CalendarTodo
