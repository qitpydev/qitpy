import React from 'react'
import { ExperienceData } from '../../../../../../data';
import ExpSection from '../components/ExpSection/ExpSection';
import LabelLineDecor from '../components/LabelLineDecor/LabelLineDecor';
import "./ExperienceCv.scss"


function ExperienceCv() {

  return (
    <div id='experience-cv'>
      <div className="experience-cv-label">
        <LabelLineDecor name="Work Experiences"/>
      </div>
      <div className="section-exp-cv">
        {
          ExperienceData.map(company =>
          <ExpSection data={company} />)
        }
      </div>
    </div>
  )
}

export default ExperienceCv