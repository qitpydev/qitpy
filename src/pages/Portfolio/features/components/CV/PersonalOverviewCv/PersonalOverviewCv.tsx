import React from 'react'
import LabelLineDecor from '../components/LabelLineDecor/LabelLineDecor'
import { CvIntro,
  CvSkill,
  CvEdu,
  CvCert } from '../../../../../../data';
import "./PersonalOverviewCv.scss"


function PersonalOverviewCv() {
  return (
    <div className='personal-overview-cv'>
      <div className="personal-overview-cv__intro">
        <LabelLineDecor name="Introduction" />
        {CvIntro.map((x, i) =>
          <p key={i}>{x}</p>
        )}
      </div>
      {/* <div className="personal-overview-cv__proscons">
        <LabelLineDecor name="Pros & Cons" />
        <p>{CvProsCons.pros}</p>
        <p>{CvProsCons.cons.map(x => (<>
          {x} <br/>
        </>))}</p>
      </div> */}
      <div className="personal-overview-cv__skill">
        <LabelLineDecor name="Skills" />
        <p><b>Main: </b>{CvSkill.main.join(", ")}</p>
        <p><b>Others: </b>{CvSkill.others.join(", ")}</p>
      </div>
      <div className="personal-overview-cv__edu">
        <LabelLineDecor name="Educations" />
        {CvEdu.map(x =>
          <p>{x}</p>
        )}
      </div>
      <div className="personal-overview-cv__cert">
        <LabelLineDecor name="Certifications" />
        <p>{CvCert}</p>
      </div>
    </div>
  )
}

export default PersonalOverviewCv