/**
 * Static-Data using for showing basic data needed for Portfolio
 */

import { WorkExperienceItem } from "./common/Interfaces";
import { getWorkingTimes } from './common/function/functions';

/**
 * @interface
 */
interface ProjectWorking {
    name: string,
    description: string,
    link: string
}

export interface SkillDetail {
    name: string,
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
        items: [
            {
                name: "Fedora",
                link: "https://getfedora.org/"
            },
            {
                name: "Ubuntu",
                link: "https://ubuntu.com/"
            }
        ]
    },
    web_skill: {
        name: "Web_skills",
        items: [{
            name: "Python",
            link: "https://www.python.org/"
        }, {
            name: "Django",
            link: "https://www.djangoproject.com/"
        }, {
            name: "Redux",
            link: "https://redux.js.org/"
        }, {
            name: "ReactJs",
            link: "https://reactjs.org/"
        }, {
            name: "Microservices",
            link: "https://microservices.io/"
        },],
    },
    database_skill: {
        name: "Database_skills",
        items: [{
            name: "Mysql",
            link: "https://www.mysql.com/"
        }, {
            name: "Postgres",
            link: "https://www.postgresql.org/"
        }, {
            name: "MongoDB",
            link: "https://www.mongodb.com/"
        }],
    },
    devops_skill: {
        name: "Devops_skills",
        items: [{
            name: "AWS",
            link: "https://aws.amazon.com/"
        }, {
            name: "Docker",
            link: "https://www.docker.com/"
        }, {
            name: "Kubernetes",
            link: "https://kubernetes.io"
        }, {
            name: "Helm",
            link: "https://helm.sh/"
        }, {
            name: "CICD",
            link: "https://en.wikipedia.org/wiki/CI/CD"
        }, {
            name: "EC2",
            link: "https://aws.amazon.com/ec2/"
        }, {
            name: "Linux",
            link: "https://vi.wikipedia.org/wiki/Linux"
        }],
    },
    tools: {
        name: "Tools",
        items: [{
            name: "VisualCode",
            link: "https://code.visualstudio.com/"
        }, {
            name: "Postman",
            link: "https://www.postman.com/"
        }, {
            name: "Lens",
            link: "https://k8slens.dev/"
        }, {
            name: "Figma",
            link: "https://www.figma.com/"
        }, {
            name: "Bitbucket",
            link: "https://bitbucket.org"
        }, {
            name: "FileZilla",
            link: "https://filezilla-project.org/"
        }, {
            name: "SSH",
            link: "https://en.wikipedia.org/wiki/Secure_Shell"
        }, {
            name: "GitHub",
            link: "https://github.com/"
        },],
    },
    others: {
        name: "Others",
        items: [{
            name: "Heroku",
            link: "https://www.heroku.com/"
        }, {
            name: "SpringBoot",
            link: "https://spring.io/projects/spring-boot"
        }, {
            name: "AzureFunction",
            link: "https://azure.microsoft.com/en-us/products/functions/"
        }, {
            name: "NestJs",
            link: "https://nestjs.com/"
        }, {
            name: "ECR",
            link: "https://aws.amazon.com/ecr/"
        }, {
            name: "OperatingSystem",
            link: "https://en.wikipedia.org/wiki/Operating_system"
        }, {
            name: "ShellScript",
            link: "https://www.shellscript.sh/"
        }, {
            name: "GitActions",
            link: "https://github.com/features/actions"
        }, {
            name: "PlayFab",
            link: "https://playfab.com/"
        }],
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

const ProjectWorkings: Array<ProjectWorking> = [
    {
        name: "Personal manager",
        description: "Let manage yourself with tool, as a partner",
        link: "https://maitocode.com/todo"
    },
    {
        name: "Password manager",
        description: "Store, generate & protect all of the password",
        link: ""
    },
    {
        name: "my secret",
        description: "",
        link: ""
    },
    {
        name: "my secret",
        description: "",
        link: ""
    },
    {
        name: "my secret",
        description: "",
        link: ""
    },
    {
        name: "my secret",
        description: "",
        link: ""
    },
    {
        name: "Trading bot",
        description: "",
        link: ""
    }
]

export { ContactData, InfoData, SkillsData, ExperienceData, ProjectWorkings }