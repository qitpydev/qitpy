import React from 'react'
import "./ExpSection.scss"

function ExpSection({data}) {

    const {projects} = data

    const renderProject = (project) => {
        return (
            <div className="exp-section-cv-item__project">
                <div className="exp-section-cv-item__project__title">
                    <p className="exp-section-cv-item__project__title__name">
                        <b>Project/ {project.prjName}</b>
                    </p>
                    <p className="exp-section-cv-item__project__title__teamsize">
                        {project.prjTeamSize} members
                    </p>
                </div>
                <p className="exp-section-cv-item__project__tech">
                    <b>Technologies: </b><br />
                    {project.prjTechnologies.join(', ')}
                </p>
                <p className="exp-section-cv-item__project__description">
                    <b>Descriptions: </b><br />
                    {project.prjDescription.map(x => <>{x}<br/></>)}
                </p>
            </div>
        )
    }

    const renderSection = (data) => {
        return (
            <div className="exp-section-cv-item">
                <div className="exp-section-cv-item__working-name">
                    ** {data.company} **
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