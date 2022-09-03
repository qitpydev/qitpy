import React, { useState } from 'react'
import './TodoApp.scss';
import 'react-calendar/dist/Calendar.css';
import CalendarTodo from './CalendarTodo/CalendarTodo';
import ChartTodo from './ChartTodo/ChartTodo';
import { DailyTodo } from './DailyTodo/DailyTodo';

function TodoApp() {
  return (<div className="todo-app">
  <CalendarTodo />
  <ChartTodo />
  <DailyTodo />
  </div>
  );
}

export default TodoApp