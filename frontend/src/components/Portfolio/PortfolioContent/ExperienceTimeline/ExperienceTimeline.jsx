import React from 'react'
import './ExperienceTimeline.scss'

const experienceData = [
    {
        company: "Smartdev",
        time: {
            from: "17/09/2022",
            to: "17/09/2023"
        },
        projects: [
            {
                name: "IResource",
                time: {
                    from: "jun 2021",
                    to: "Oct 2021" 
                },
                teamSize: 7,
                responsibilities: ["Back-end", "Devops"],
                technologies: ["playfab", "azure-function"]
            },
            {
                name: "IResource",
                time: {
                    from: "jun 2021",
                    to: "Oct 2021" 
                },
                teamSize: 7,
                responsibilities: ["Back-end", "Devops"],
                technologies: ["playfab", "azure-function"]
            }
        ],
    },
    {
        company: "Smartdev",
        time: {
            from: "17/09/2022",
            to: "17/09/2023"
        },
        projects: [
            {
                name: "IResource",
                time: {
                    from: "jun 2021",
                    to: "Oct 2021" 
                },
                teamSize: 7,
                responsibilities: ["Back-end", "Devops"],
                technologies: ["playfab", "azure-function"]
            },
            {
                name: "IResource",
                time: {
                    from: "jun 2021",
                    to: "Oct 2021" 
                },
                teamSize: 7,
                responsibilities: ["Back-end", "Devops"],
                technologies: ["playfab", "azure-function"]
            }
        ],
    },
    {
        company: "Smartdev",
        time: {
            from: "17/09/2022",
            to: "17/09/2023"
        },
        projects: [
            {
                name: "IResource",
                time: {
                    from: "jun 2021",
                    to: "Oct 2021" 
                },
                teamSize: 7,
                responsibilities: ["Back-end", "Devops"],
                technologies: ["playfab", "azure-function"]
            },
            {
                name: "IResource",
                time: {
                    from: "jun 2021",
                    to: "Oct 2021" 
                },
                teamSize: 7,
                responsibilities: ["Back-end", "Devops"],
                technologies: ["playfab", "azure-function"]
            }
        ],
    },
]

function ExperienceTimeline() {
  return (
    <div>
        {ProjectExperience()}
    </div>
  )
}

const WorkExperience = () => {

}

const ProjectExperience = (timeline, projectName, teamSize, responsibilities, technologies) => {
    return (
        <div className="project-experience">
            <div className="project-experience-marker">   
            </div>
            <div className="project-experience-content">
                <div className="project-name">
                    {projectName}
                </div>
                <div className="project-info">
                    <p><span>Team size</span> {teamSize}</p>
                    <p><span>Responsibilities</span> {responsibilities}</p>
                    <p><span>Technologies</span>{technologies}</p>
                </div>
            </div>
        </div>
    )
}

export default ExperienceTimeline