import React from 'react'
import './AppWorking.scss'
import { Link } from 'react-router-dom'
import { ProjectWorkings } from '../../../data'
import { ElementId } from '../../../common/function/functions'

function AppWorking() {
  return (
    <div className='app_working'>
      <div className="app_working-left_side"></div>
      <div className="app_working-right_side"></div>
      <div className="app_working-card-container" id={ElementId.AppWorkingCardContainer}>
        <div className="app_working-strip_of_cards">
          {
            ProjectWorkings.map((item, index) => renderCard(
                item.name,
                item.description,
                item.link,
                index,
              )
            )
          }
        </div>
      </div>
    </div>
  )
}

const renderCard = (name, description, link, index) => {
  return (
    <div className='app_working-project_card' key={index}>
      <div className="app_working-project_card-project_name">
        {name}
      </div>
      <div className="app_working-project_card-project_description">
        {description}
      </div>
      <div className='app_working-project_card-access_btn'>
        <Link to={link}>Access</Link>
      </div>
    </div>
  )
}

export default AppWorking