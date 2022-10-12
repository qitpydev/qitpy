import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './Experience.scss'
import ExperienceTimeline from '../../components/ExperienceTimeline/ExperienceTimeline'

function Experience(props) {
  return (
    <div className='portfolio-experience'>
      <div className="label-rotate">Experiences</div>
      <div className="work-experience-years">
            ~ 2 years experience
      </div>
      <div className="work-experience-container">
        <ExperienceTimeline />
      </div>
    </div>
  )
}

Experience.propTypes = {}

export default Experience
