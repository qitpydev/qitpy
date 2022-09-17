interface ProjectItem {
    prjName: string,
    prjTeamSize: 7,
    prjResponsibilities: Array<String>,
    prjTechnologies: Array<String>,
}
interface WorkExperienceItem {
    company: string,
    time: {
        period: string,
        from: string,
        to: string,
    },
    locate: string,
    projects: Array<ProjectItem>
}

export type {ProjectItem, WorkExperienceItem}