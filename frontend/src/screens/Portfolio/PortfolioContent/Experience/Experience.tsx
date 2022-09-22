import React from 'react'
import PropTypes from 'prop-types'
import './Experience.scss'
import ExperienceTimeline from '../ExperienceTimeline/ExperienceTimeline'

function Experience(props) {
  return (
    <div className='portfolio-experience no-wrap'>
      <div className="label-rotate no-wrap">Experiences</div>
      <div className="work-experience-years no-wrap">
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
