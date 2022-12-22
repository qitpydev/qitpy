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
        email: "qitpydev@gmail.com",
        phoneNumber: "+84868260254",
    },
    socialLinks: {
        facebook: "https://www.facebook.com/qitpy/",
        linkedin: "https://www.linkedin.com/in/qitpy/",
        github: "https://github.com/qitpy",
        website: "https://qitpy.com"
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
        }, {
            name: "Terraform",
            link: "https://www.terraform.io/"
        }, {
            name: "Velero",
            link: "https://velero.io/"
        }, {
            name: "Scrapy",
            link: "https://scrapy.org/"
        }],
    }
}

const ExperienceData: Array<WorkExperienceItem> = [
    {
        company: "SmartDev LLC",
        time: {
            period: "1 yr 6 mos",
            from: "01/06/2021",
            to: "now"
        },
        locate: "Da Nang",
        projects: [
            {
                prjName: "IResource",
                prjTeamSize: 7,
                prjResponsibilities: ["Back-end", "Devops"],
                prjTechnologies: ["Java", "SpringBoot", "VPS", "Microservice", "MySQL"],
                prjDescription: [
                    "An internal SmartDev's project. The purpose of project is make a help tool to assist between Project Manager and Developer to prefer matching projects that they love to work. This is my first project of my fresher term.",
                    "I was working as Back-End-DevOps-TeamLeader roles for the duration of the project, so i was concurrent keep try to work and learn so much in this project."
                ]
            },
            {
                prjName: "NFT Football Game",
                prjTeamSize: 6,
                prjResponsibilities: ["Back-end", "Devops"],
                prjTechnologies: ["PlayFab", "Azure-Function"],
                prjDescription: [
                    "This is a Product-Project by making a game that is applied NFT token, base on Football Manager type of online game.",
                    "The server (i mean the APIs) is created by using PlayFab-Platform and Cloud Function (Azure-Function in this case) to write."
                ],
            },
            {
                prjName: "SmartDev Platform",
                prjTeamSize: 40,
                prjResponsibilities: ["Back-end", "Devops"],
                prjTechnologies: ["NestJs", "Kubernetes", "Bitbucket-Pipeline", "CI/CD", "GitOps", "PostgreSQL"],
                prjDescription: [
                    "Another SmartDev's internal project, The purpose is making a tool that support Project Manager to manage comprehensive projects working in the company, so that they can analyze and strategy created in every situation in point of times.",
                    "So many member in this project, so it was done & ready to use in just 4 months building, until now it's during maintenance time & upgrade in the future.",
                    "I was working as Main-Devops of this project, keep the app high-availability and operation setting configuration to automatic to deploy & testing in every deployment (i mean development-staging-production/release).",
                ],
            },
            {
                prjName: "KOLEDA",
                prjTeamSize: 6,
                prjResponsibilities: ["Back-end", "Devops"],
                prjTechnologies: ["Java SpringBoot", "Kubernetes", "EMQX", "REDIS", "MongoDB"],
                prjDescription: [
                    "A maintenance IoT project, that is using smartphone to manage and control the devices in user's home.",
                ],
            },
            {
                prjName: "Kubernetes Cluster migration",
                prjTeamSize: 2,
                prjResponsibilities: ["DevOps"],
                prjTechnologies: ["Velero", "EC2", "EBS", "GP2", "Terraform", "Blueprint"],
                prjDescription: [
                    "By working with my leader, i was support him to migrate from the old cluster to new cluster in Kubernetes of AWS (EKS - Elastic Kubernetes Service).",
                    "It's was finish after we make some plan before doing it.",
                    "In the end, some issue about Database appear. GP2 volumes (Amazon EBS volumes) can't be mount to the EC2 instance. But it's in our control."
                ],
            },
            {
                prjName: "Qitpy",
                prjTeamSize: 1,
                prjResponsibilities: ["Web fullstack"],
                prjTechnologies: ["Django", "ReactJs", "ReduxJs", "EC2", "GitAction", "Docker", "Nginx", "SSL", "GoogleAuth", "PostgreSQL", "Figma"],
                prjDescription: [
                    "This is my personal project. It's because i don't see any tool to handle my working & learning stuffs, and for applying technologies that i want to learn purpose.",
                    "What i am doing & going to do in this project is making a Portfolio, that will link all of my Ecosystem's projects, this will be follow by my design. And to using Python, which will be my main programming language skill."
                ],
            },
        ],
    },
]
ExperienceData.forEach(ex => ex.projects.reverse())

const ProjectWorkings: Array<ProjectWorking> = [
    {
        name: "Personal manager",
        description: "to manage working to-do, let the tool handle and optimize your life",
        link: "https://qitpy.com/todo"
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

const CvIntro = [
    "As a Pythonista, With two of years working in Web-development - a quick learner - with the mind opening - always working with all of heart.",
    "Currently, i am trying to become an expert in my field (Back-end/DevOps/AWS Clouds).",
    "And, I am always keep learning everyday, and willing to deep dive into any project using Python - because i love Python and programming.",
    "In the futures, i will use my skills to make some great projects, to follow the new technologies, to follow the world developing and earn money.",
]
const CvProsCons = {
    pros: "i have knowledge in comprehensive of web-development, i can understand all about of the operation of project, easy to approach the issues",
    cons: [
        "I was working with Java/SpringBoot in Back-end role in a time before, so I am a new with Python. But I learned Django and deploy it by myself with EC2 (Amazon Elastic Compute Cloud), you can see it at:",
        "https://api.qitpy.com/api/docs",
        "I am confidently to working with Django for now."
    ]
}
const CvSkill = {
    main: ["Python", "Django", "DevOps", "AWS"],
    others: ["ReactJs", "ReduxJs", "Kubernetes", "CI-CD", "Scrapy", "GitActions", "EKS", "ECR", "AzureFunction", "Microservices", "Shellscript", "Linux"]
}
const CvEdu = [
    "Danang University of Science and Technology",
]
const CvCert = {}

export {
    ContactData,
    InfoData,
    SkillsData,
    ExperienceData,
    ProjectWorkings,
    CvIntro,
    CvProsCons,
    CvSkill,
    CvEdu,
    CvCert
}