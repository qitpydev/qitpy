import React from 'react'
import PropTypes from 'prop-types'
import './AppCenter.scss'

function AppCenter(props) {
  return (
    <div className="app-center">
        <div className="app-center-access">access</div>
        <div className="app-center-commit">commit</div>
        <div className="app-center-apps">apps</div>
        <div className="app-center-bottom">bottom</div>
        <div className="app-center-bottom">bottom</div>
    </div>
  )
}

AppCenter.propTypes = {}

export default AppCenter
