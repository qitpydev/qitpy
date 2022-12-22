import React from 'react'
import "./ExpSection.scss"

function ExpSection({data}) {

    const {projects} = data

    const renderProject = (project) => {
        return (
            <div className="exp-section-cv-item__project">
                <div className="exp-section-cv-item__project__title">
                    <div className="exp-section-cv-item__project__title__name">
                        {project.prjName}
                    </div>
                    <div className="exp-section-cv-item__project__title__teamsize">
                        team_size: {project.prjTeamSize}
                    </div>
                </div>
                <div className="exp-section-cv-item__project__tech">
                    technologies: {project.prjTechnologies.join(',')}
                </div>
                <div className="exp-section-cv-item__project__description">
                    description: {project.prjDescription.join('')}
                </div>
            </div>
        )
    }

    const renderSection = (data) => {
        return (
            <div className="exp-section-cv-item">
                <div className="exp-section-cv-item__working-name">
                    {data.company}
                </div>
                {
                    projects.map((project) => renderProject(project))
                }
            </div>
        )
    }

  return (
    <div id="exp-section-cv">
        {renderSection(data)}
    </div>
  )
}

export default ExpSection