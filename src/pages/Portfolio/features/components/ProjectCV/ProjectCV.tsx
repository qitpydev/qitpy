import React from 'react'
import ProjectCVTechItem from '../ProjectCVTechItem/ProjectCVTechItem';
import ProjectCVContent from '../ProjectCVContent/ProjectCVContent';

const ProjectCV = () => {
    const projectName = "projectName"
    const projectType = "App"

    return (
      <div className="project-cv">
        <h3>{projectName}</h3>
        <div className="project-cv__basic">
          <div className="project-cv__basic--type">{projectType}</div>
          <div className="project-cv__basic--tech">
            <ProjectCVTechItem />
            <ProjectCVTechItem />
            <ProjectCVTechItem />
            <ProjectCVTechItem />
            <ProjectCVTechItem />
          </div>
        </div>
        <div className="project-cv__content">
            <ProjectCVContent />
            <ProjectCVContent />
            <ProjectCVContent />
        </div>
      </div>
    )
  }

ProjectCV.propTypes = {}

export default ProjectCV
