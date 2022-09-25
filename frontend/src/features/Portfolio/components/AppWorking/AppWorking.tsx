import React from 'react'
import './AppWorking.scss'
import { Link } from 'react-router-dom'
import { ProjectWorkings } from '../../../../data'

function AppWorking() {
  return (
    <div className='app_working'>
      <div className="app_working-left_side"></div>
      <div className="app_working-right_side"></div>
      <div className="app_working-card-container">
        <div className="app_working-strip_of_cards">
          {
            ProjectWorkings.map((item) => renderCard(
                item.name,
                item.description,
                item.link
              )
            )
          }
        </div>
      </div>
    </div>
  )
}

const renderCard = (name, description, link) => {
  return (
    <div className='app_working-project_card'>
      <div className="app_working-project_card-project_name">
        {name}
      </div>
      <div className="app_working-project_card-project_description">
        {description}
      </div>
      <button className='app_working-project_card-access_btn'>
        <Link to={link}>Access</Link>
      </button>
    </div>
  )
}


export default AppWorking