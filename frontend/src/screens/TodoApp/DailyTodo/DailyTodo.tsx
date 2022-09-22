import React from 'react'
import { connect } from 'react-redux'
import "./DailyTodo.scss"
import DailyTask from './DailyTask/DailyTask';

const dailyTodoLabel_Name = "Everyday";
const weekNoteBtn_Name = "Week Note";

export const DailyTodo = (props) => {

    const getDailyTask = () => {
        return (
            <>
            <DailyTask />
            <DailyTask />
            <DailyTask />
            <DailyTask />
            </>
        )
    }
  return (
    <div className='daily-todo'>
        <div className="daily-todo-everyday">
            <label className='daily-todo-everyday-label'>{dailyTodoLabel_Name}</label>
            <div className="daily-todo-everyday-tasks">
                {getDailyTask()}
            </div>
        </div>
        <button className="daily-todo-week-note-btn">
            {weekNoteBtn_Name}
        </button>
    </div>
  )
}

const mapStateToProps = (state) => ({})