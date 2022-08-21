import React, { useState } from 'react'
import './TodoApp.scss';
import 'react-calendar/dist/Calendar.css';
import CalendarTodo from './CalendarTodo/CalendarTodo';
import ChartTodo from './ChartTodo/ChartTodo';

function TodoApp() {
  return (<>
  <CalendarTodo />
  <ChartTodo />
  </>
  );
}

export default TodoApp