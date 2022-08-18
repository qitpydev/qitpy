import React, { useState } from 'react'
import './TodoApp.scss';
import 'react-calendar/dist/Calendar.css';
import CalendarTodo from './CalendarTodo/CalendarTodo';

function TodoApp() {
  return (
    <CalendarTodo />
  );
}

export default TodoApp