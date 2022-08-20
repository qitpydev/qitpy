import React from 'react'
import DayTodoCard from './DayTodoCard/DayTodoCard';
import "./DayTodo.scss"

function DayTodo() {

  const day = "November 1, 2022";
  const todoCards = <>
  <DayTodoCard type='todo' createdAt={new Date()} content={"content"} isDone={false} ></DayTodoCard>
  <DayTodoCard type='todo' createdAt={new Date()} content={"content"} isDone={false} ></DayTodoCard>
  <DayTodoCard type='todo' createdAt={new Date()} content={"content"} isDone={false} ></DayTodoCard>
  </>
  const noteCards = <>
  <DayTodoCard type='note' createAt={new Date()} content={"content"} ></DayTodoCard>
  <DayTodoCard type='note' createAt={new Date()} content={"content"} ></DayTodoCard>
  <DayTodoCard type='note' createAt={new Date()} content={"content"} ></DayTodoCard> 
  </>
  return (
    <div className='day-todo'>
      <div className="day-todo_header">
        {day}
      </div>
      <div className="day-todo_body">
        <div className="day-todo_body_todo">
          <span style={{textAlign: "center"}}>TODO</span>
          <div className="day-todo_body_todo_detail">
            {todoCards}
          </div>
        </div>
        <div className="day-todo_body_note">
          <span>NOTE</span>
          <div className="day-todo_body_note_detail">
            {noteCards}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DayTodo