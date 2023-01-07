import React from 'react'
import './Experience.scss'
import { getWorkingTimes } from '../../../common/function/functions'
import ExperienceTimeline from '../../components/ExperienceTimeline/ExperienceTimeline'

function Experience(props) {
  return (
    <div className='portfolio-experience'>
      <div className="label-rotate">Experiences</div>
      <div className="work-experience-years">
            {getWorkingTimes()}
      </div>
      <div className="work-experience-container">
        <ExperienceTimeline />
      </div>
    </div>
  )
}

Experience.propTypes = {}

export default Experience
