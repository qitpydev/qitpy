import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './Experience.scss'
import ExperienceTimeline from '../../components/ExperienceTimeline/ExperienceTimeline'
import { getWorkingTimes } from '../../../../common/function/functions';

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
