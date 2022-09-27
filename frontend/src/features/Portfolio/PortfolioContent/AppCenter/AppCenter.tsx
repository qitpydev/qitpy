import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './AppCenter.scss'
import AccessFrequency from '../../components/AccessFrequency/AccessFrequency'
import ActivityFrequency from '../../components/ActivityFrequency/ActivityFrequency'
import AppWorking from '../../components/AppWorking/AppWorking'
import ExploreMore from '../../components/ExploreMore/ExploreMore'
import * as FUNC from "../../../../common/hook/functions"


function AppCenter(props) {

  const appWorkingId = "app-center-app_working"

  useEffect(() => {
    FUNC.recursiveToAddClassNameWith(appWorkingId, FUNC.classNames.noWrap)
    FUNC.recursiveToAddClassNameWith(appWorkingId, FUNC.classNames.scrollHorizontal)
  }, [])

  return (
    <div className="app_center">
        <div className="app_center-access_frequency"><AccessFrequency /></div>
        <div className="app_center-activity_frequency"><ActivityFrequency /></div>
        <div className="app_center-app_working" id={appWorkingId}><AppWorking /></div>
        <div className="app_center-explore_more"><ExploreMore /></div>
    </div>
  )
}

AppCenter.propTypes = {}

export default AppCenter
