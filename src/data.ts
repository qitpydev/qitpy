/**
 * Static-Data using for showing basic data needed for Portfolio
 */

import { WorkExperienceItem } from "./common/Interfaces";
import { getWorkingTimes } from './common/function/functions';

/**
 * @interface
 */
interface ProjectWokring {
    name: string,
    description: string,
    link: string
}


/**
 * Static-Data
 */
const ContactData = {
    contactMe: {
        email: "code.maito@outlook.com",
        phoneNumber: "+84868260254",
    },
    socialLinks: {
        facebook: "https://www.facebook.com/qmait/",
        linkedin: "https://www.linkedin.com/in/maitocode/",
        github: "https://github.com/maitocode",
        website: "https://maitocode.com"
    }
}

const InfoData = {
    paragraphHeader: [
        "Hi, i am Quyet by name - here is something about me ✌️."
    ],
    paragraphBody: [
        `🍀 I am a Python Developer, with ${getWorkingTimes()} in Web Development`,
        "🍀 I love computer, technology ..and animals :)",
        "🍀 I am a quick learner",
        "Always and always welcome new kind friends!",
    ],
    paragraphFooter: [
        "Welcome to come here with me ♥️",
        "Hope you have a nice day ♥️"
    ]
};

const SkillsData = {
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

const ExperienceData: Array<WorkExperienceItem> = [
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
                prjTechnologies: ["playfab", "azure-function"],
                prjDescription: [
                    "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                    "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
                    "lorem ipsumlorem ipsumlorem ipsumlorem ipsum"
                ]
            },
            {
                prjName: "IResource",
                prjTeamSize: 7,
                prjResponsibilities: ["Back-end", "Devops"],
                prjTechnologies: ["PlayFab", "azure-function"],
                prjDescription: [
                    "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                    "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
                    "lorem ipsumlorem ipsumlorem ipsumlorem ipsum"
                ],
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
                prjTechnologies: ["playfab", "azure-functionnnnnnnnnnnnnnnnnn nnnnnnnnnnnnnn"],
                prjDescription: [
                    "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                    "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
                    "lorem ipsumlorem ipsumlorem ipsumlorem ipsum"
                ]
            },
            {
                prjName: "IResource",
                prjTeamSize: 7,
                prjResponsibilities: ["Back-end", "Devops"],
                prjTechnologies: ["PlayFab", "azure-function"],
                prjDescription: [
                    "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                    "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
                    "lorem ipsumlorem ipsumlorem ipsumlorem ipsum"
                ]
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
                prjTechnologies: ["playfab", "azure-function"],
                prjDescription: [
                    "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                    "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
                    "lorem ipsumlorem ipsumlorem ipsumlorem ipsum"
                ]
            },
            {
                prjName: "IResource",
                prjTeamSize: 7,
                prjResponsibilities: ["Back-end", "Devops"],
                prjTechnologies: ["playfab", "azure-function"],
                prjDescription: [
                    "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                    "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
                    "lorem ipsumlorem ipsumlorem ipsumlorem ipsum"
                ]
            },
        ],
    },
]

const ProjectWorkings: Array<ProjectWokring> = [
    {
        name: "My TODO",
        description: "manage your working by tool - don't keep all things in mind",
        link: "https://todo.maitocode.com"
    },
    {
        name: "My TODO",
        description: "manage your working by tool - don't keep all things in mind",
        link: "#"
    },
    {
        name: "My TODO",
        description: "manage your working by tool - don't keep all things in mind",
        link: "#"
    },
    {
        name: "My TODO",
        description: "manage your working by tool - don't keep all things in mind",
        link: "#"
    },
    {
        name: "My TODO",
        description: "manage your working by tool - don't keep all things in mind",
        link: "#"
    },
    {
        name: "My TODO",
        description: "manage your working by tool - don't keep all things in mind",
        link: "#"
    },
    {
        name: "My TODO",
        description: "manage your working by tool - don't keep all things in mind",
        link: "#"
    }
]

export { ContactData, InfoData, SkillsData, ExperienceData, ProjectWorkings }