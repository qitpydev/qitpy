import React, { useEffect } from 'react'
import './AppWorking.scss'
import { ProjectWorkings } from '../../../data'
import { ElementId } from '../../../common/function/functions'
import * as Util from './Util'

function AppWorking() {
  const minScrollLeftValueInit = 30;
  const maxScrollLeftValueInit = 110;

  useEffect(() => {
    const isMaxWidth = window.matchMedia('(min-width:1200px)').matches;

    if (isMaxWidth) {
      console.log("MAX WIDTH")
      Util.setDefaultValueForScrollPosition(maxScrollLeftValueInit)
    } else {
      Util.setDefaultValueForScrollPosition(minScrollLeftValueInit)
    }
  }, [])

  return (
    <div className='app_working'>
      <div className="app_working-left_side"></div>
      <div className="app_working-right_side"></div>
      <div className="app_working-card-container" id={ElementId.AppWorkingCardContainer}>
        <div className="app_working-strip_of_cards" id={ElementId.AppWorkingStripOfCards}>
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
      {link === "" && <h3>Coming!</h3>}
      {link !== "" &&
        <div className='app_working-project_card-access_btn'>
          <a href={link}>Access</a>
        </div>
      }
    </div>
  )
}

export default AppWorking