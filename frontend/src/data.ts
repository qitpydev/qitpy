import { WorkExperienceItem } from "./constance/interfaces";

const infoData = {
    paragraphHeader: [
        "Hi, my name is Quyet - a young guy that loves Computer, Programming & Technologies."
    ],
    paragraphBody: [
        "I am a Python-Developer, with about 2 years experience",
        "My beginning is Java-Springboot",
        "Besides, i can build CI/CD to deploy to VPS or Cloud-Service (using Kubernetes) by myself.",
        "In previous projects, i was working as DevOps - FrontEnd - BackEnd roles",
    ],
    paragraphFooter:[
        "I love Python because the ability, strongly, shortly, quickly and intelligence.",
        "Currently, i open0868260254 to working with ReactJs & Django.",
    ]
};

const skillsData = {
    os: {
        name: "Operating_system",
        items: ["Fedora", "ubuntu"],
    },
    web_skill: {
        name: "Web_skills",
        items: ["JavaScript", "Reactjs", "Redux", "Python", "Django", "Microservices"],
    },
    database_skill: {
        name: "Database_skills",
        items: ["Mysql", "Postgres", "MongoDB"],
    },
    devops_skill: {
        name: "Devops_skills",
        items: ["Docker", "Kubernetes", "Helm", "ECR", "VPS", "CICD", "Crontab", "Linux"],
    },
    tools: {
        name: "Tools",
        items: ["VisualCode", "Postman", "Lens", "FireFox", "Figma", "Bitbucket", "Jira", "FileZilla", "SSH", "Git"],
    },
    others: {
        name: "Others",
        items: ["Heroku", "SpringBoot", "AzureFunction", "NestJs", "EMQX"],
    }
}

/** Circle Chart */
const skillOverviewChart = {
    front_end: 20,
    back_end: 35,
    devops: 45
}

const experienceData: Array<WorkExperienceItem> = [
    {
        company: "Smartdev",
        time: {
            period: "1 yr 3 mos",
            from: "17/09/2022",
            to: "17/09/2023"
        },
        locate: "Da Nang",
        projects: [
            {
                prjName: "IResource",
                prjTeamSize: 7,
                prjResponsibilities: ["Back-end", "Devops"],
                prjTechnologies: ["playfab", "azure-function"]
            },
            {
                prjName: "IResource",
                prjTeamSize: 7,
                prjResponsibilities: ["Back-end", "Devops"],
                prjTechnologies: ["PlayFab", "azure-function"]
            },
        ],
    },
    {
        company: "Smartdev",
        time: {
            period: "1 yr 3 mos",
            from: "17/09/2022",
            to: "17/09/2023"
        },
        locate: "Da Nang",
        projects: [
            {
                prjName: "IResource",
                prjTeamSize: 7,
                prjResponsibilities: ["Back-end", "Devops"],
                prjTechnologies: ["playfab", "azure-functionnnnnnnnnnnnnnnnnn nnnnnnnnnnnnnn"]
            },
            {
                prjName: "IResource",
                prjTeamSize: 7,
                prjResponsibilities: ["Back-end", "Devops"],
                prjTechnologies: ["PlayFab", "azure-function"]
            },
        ],
    },
    {
        company: "Smartdev",
        time: {
            period: "1 yr 3 mos",
            from: "17/09/2022",
            to: "17/09/2023"
        },
        locate: "Da Nang",
        projects: [
            {
                prjName: "IResource",
                prjTeamSize: 7,
                prjResponsibilities: ["Back-end", "Devops"],
                prjTechnologies: ["playfab", "azure-function"]
            },
            {
                prjName: "IResource",
                prjTeamSize: 7,
                prjResponsibilities: ["Back-end", "Devops"],
                prjTechnologies: ["playfab", "azure-function"]
            },
        ],
    },
]

export {infoData, skillsData, skillOverviewChart, experienceData}