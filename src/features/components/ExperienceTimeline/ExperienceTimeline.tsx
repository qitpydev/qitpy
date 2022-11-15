import React from 'react'
import './ExperienceTimeline.scss'
import {GiFeather} from "react-icons/gi"
import { ExperienceData } from '../../../data'
import { WorkExperienceItem, ProjectItem } from '../../../common/Interfaces'

function ExperienceTimeline() {
  return (
    <div className='work-experience'>
        {ExperienceData.map((item: WorkExperienceItem, index: number) => (
            <WorkExperience key={index} items={item} />
        ))}
    </div>
  )
}

const WorkExperience = (props) => {

    const {company, time, locate, projects } = props.items;
    const { period, from, to } = time;
    
    const renderProjects = (projects: Array<ProjectItem> ) => {
        return (
            <>
                {projects.map((project, index) => (
                    <div key={index} className="project-experience">
                        <div className="project-experience-marker"></div>
                        <div className="project-experience-content">
                            <div className="project-name">{project.prjName}</div>
                            <div className="project-info">
                                <p className=''><span className=''>Team size: </span> {project.prjTeamSize}</p>
                                <p className=''><span className=''>Responsibilities: </span> {project.prjResponsibilities}</p>
                                <p className=''><span className=''>Technologies: </span>{project.prjTechnologies}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        )
    }

    return (
        <div className="work-experience-item">
            <div className="work-experience-item-company">
                <GiFeather size="50px" color="green" className=''/>
                <div className="company-info">
                    <div className="company-name">
                        {company}
                    </div>
                    <div className="company-work-title">Fullstack Developer</div>
                    <div className="company-timeline">
                        {`${period} | ${from} - ${to}`}
                        <br />
                        {locate}
                    </div>
                </div>
            </div>
            <div className="work-experience-item-projects">
                {renderProjects(projects)}
            </div>
        </div>
    )
}

export default ExperienceTimeline