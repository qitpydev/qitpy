import React from 'react'
import "./DailyTask.scss"

function DailyTask(props) {

  const taskName = "task name";
  return (
    <div className='daily-task'>
      <input type="checkbox"className="daily-task-checkbox" />
      <label className='daily-task-name'>{taskName}</label>
    </div>
  )
}

export default DailyTask