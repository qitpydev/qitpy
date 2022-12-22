import React from 'react'
import LabelLineDecor from '../components/LabelLineDecor/LabelLineDecor'
import { CvIntro,
  CvProsCons,
  CvSkill,
  CvEdu,
  CvCert } from '../../../../data';


function PersonalOverviewCv() {
  return (
    <div id='personal-overview-cv'>
      <div className="personal-overview-cv__label">
        <LabelLineDecor name="Personal information" />
      </div>
      <div className="personal-overview-cv__intro">

      </div>
      <div className="personal-overview-cv__proscons">

      </div>
      <div className="personal-overview-cv__skill">

      </div>
      <div className="personal-overview-cv__edu">

      </div>
      <div className="personal-overview-cv__cert">

      </div>
    </div>
  )
}

export default PersonalOverviewCv