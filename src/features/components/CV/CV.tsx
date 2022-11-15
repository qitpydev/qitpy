import React from 'react'
import { useEffect } from 'react';

import {CgProfile} from 'react-icons/cg'
import {RiProjectorFill} from 'react-icons/ri'
import './CV.scss'
import ProjectCV from '../ProjectCV/ProjectCV';
import { 
  recursiveToAddClassNameWith, ElementId, ClassNames 
} from '../../../common/function/functions';

function CV(props) {
  let classNames = "";
  if (props.classNames) {
    classNames = props.classNames
  }

  useEffect(() => {
    recursiveToAddClassNameWith(ElementId.CV, ClassNames.noClose)
  }, [])
  
  const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum culpa dolore laboriosam illo est! Est natus, provident, quisquam molestiae blanditiis aliquam tenetur error, ipsam maxime iste tempora asperiores? Vel, amet?"
  
  return (
    <div id={ElementId.CV} className={classNames}>
        <div className="cv__body">
          <div className="cv__body--profile">
            <div className="cv_body--profile--title">
              <CgProfile size={"50px"}/>
                <span>PROFILE</span>
            </div>
            <div className="cv__body--profile--content">
              <p>{lorem}</p>
            </div>
          </div>
          <div className="cv__body--project">
            <div className="cv__body--project--title">
              <h1><RiProjectorFill />PROJECT</h1>
            </div>
            <div className="cv__body--project--content">
              <ProjectCV />
              <ProjectCV />
              <ProjectCV />
              <ProjectCV />
              <ProjectCV />
            </div>
          </div>
        </div>
        <div className="cv__side">
          <div className="cv__side--name"></div>
          <div className="cv__side--contact"></div>
          <div className="cv__side--certificate"></div>
          <div className="cv__side--skill"></div>
          <div className="cv__side--interests"></div>
        </div>
    </div>
  )
}

export default CV