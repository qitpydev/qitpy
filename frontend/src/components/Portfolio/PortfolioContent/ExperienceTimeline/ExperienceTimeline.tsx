import React from 'react'
import './ExperienceTimeline.scss'
import {GiFeather} from "react-icons/gi"
import { WorkExperienceItem, ProjectItem } from '../../../../constance/interfaces'
import { experienceData } from '../../../../data'

function ExperienceTimeline() {
  return (
    <div className='work-experience no-wrap'>
        {experienceData.map((item: WorkExperienceItem, index: number) => (
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
                    <div key={index} className="project-experience no-wrap">
                        <div className="project-experience-marker no-wrap"></div>
                        <div className="project-experience-content no-wrap">
                            <div className="project-name no-wrap">{project.prjName}</div>
                            <div className="project-info no-wrap">
                                <p className='no-wrap'><span className='no-wrap'>Team size: </span> {project.prjTeamSize}</p>
                                <p className='no-wrap'><span className='no-wrap'>Responsibilities: </span> {project.prjResponsibilities}</p>
                                <p className='no-wrap'><span className='no-wrap'>Technologies: </span>{project.prjTechnologies}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        )
    }

    return (
        <div className="work-experience-item no-wrap">
            <div className="work-experience-item-company no-wrap">
                <GiFeather size="50px" color="green" className='no-wrap'/>
                <div className="company-info no-wrap">
                    <div className="company-name no-wrap">
                        {company}
                    </div>
                    <div className="company-work-title no-wrap">Fullstack Developer</div>
                    <div className="company-timeline no-wrap">
                        {`${period} | ${from} - ${to}`}
                        <br />
                        {locate}
                    </div>
                </div>
            </div>
            <div className="work-experience-item-projects no-wrap">
                {renderProjects(projects)}
            </div>
        </div>
    )
}

export default ExperienceTimeline