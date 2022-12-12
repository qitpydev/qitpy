import React, { useEffect } from 'react'
import './AppCenter.scss'
import { recursiveToAddClassNameWith, ClassNames } from '../../../common/function/functions'
import ActivityFrequency from '../../components/ActivityFrequency/ActivityFrequency'
import AppWorking from '../../components/AppWorking/AppWorking'
import ExploreMore from '../../components/ExploreMore/ExploreMore'


function AppCenter(props) {

  const appWorkingId = "app-center-app_working"

  useEffect(() => {
    recursiveToAddClassNameWith(appWorkingId, ClassNames.noWrap)
    recursiveToAddClassNameWith(appWorkingId, ClassNames.scrollHorizontal)
  }, [])

  return (
    <div className="app_center">
        <div className="app_center-activity_frequency"><ActivityFrequency /></div>
        <div className="app_center-app_working" id={appWorkingId}><AppWorking /></div>
        <div className="app_center-explore_more"><ExploreMore /></div>
    </div>
  )
}

AppCenter.propTypes = {}

export default AppCenter
