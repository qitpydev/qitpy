
import React from 'react'
import './AppWorkingProjectCard.scss'
import PropTypes from 'prop-types'

function AppWorkingProjectCard(props) {

  const { name, desrciption } = props

  return (
    <div className="app_working-project_card">
      <div className="app_working-project_card-project_name">
        {name}
      </div>
      <div className="app_working-project_card-project_description">
        {desrciption}
      </div>
      <button>access</button>
    </div>
  )
}

AppWorkingProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default AppWorkingProjectCard

