import React from 'react'
import PropTypes from 'prop-types'
import './AppCenter.scss'
import AccessFrequency from '../../components/AccessFrequency/AccessFrequency'
import ActivityFrequency from '../../components/ActivityFrequency/ActivityFrequency'
import AppWorking from '../../components/AppWorking/AppWorking'
import ExploreMore from '../../components/ExploreMore/ExploreMore'


function AppCenter(props) {
  return (
    <div className="app-center">
        <div className="app-center-access_frequency"><AccessFrequency /></div>
        <div className="app-center-activity_frequency"><ActivityFrequency /></div>
        <div className="app-center-app_working"><AppWorking /></div>
        <div className="app-center-explore_more"><ExploreMore /></div>
    </div>
  )
}

AppCenter.propTypes = {}

export default AppCenter
