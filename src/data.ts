/**
 * Static-Data using for showing basic data needed for Portfolio
 */

import { getWorkingTimes, getYearMonthDifferenceToNow } from "./pages/Portfolio/common/function/functions";
import { WorkExperienceItem } from "./pages/Portfolio/common/Interfaces";


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
        "Hi, my name is Quyet and here's a little bit about me! ✌️"
    ],
    paragraphBody: [
        `🍀 I have ${getWorkingTimes()} of experience in web development.`,
        "🍀 I love computer, technology and animals.",
        "🍀 Currently, I'm focused on DevOps as my primary field.",
    ],
    paragraphFooter: [
        "I'm always happy to make new friends!",
        "Please feel free to reach out to me. ♥️",
        "Wishing you a wonderful day! ♥️",
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
    web: {
        name: "Webs",
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
    database: {
        name: "Database",
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
    devops: {
        name: "Devops",
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
    // {
    //     company: "Freelance projects",
    //     time: {
    //         period: getYearMonthDifferenceToNow(11, 2022),
    //         from: "12/2022",
    //         to: "now"
    //     },
    //     locate: "Da Nang",
    //     projects: [
    //         {
    //             prjName: "Unchain Talent Lab",
    //             prjTeamSize: 8,
    //             prjResponsibilities: ["Back-end", "Devops", "Data Crawler"],
    //             prjTechnologies: ["Web3", "Scrapy", "Aurora", "Postgres", "NextJs", "AWSCodeBuild", "Terraform"],
    //             prjDescription: [
    //                 "- A start-up project that originated from the idea of applying blockchain technology to change and improve the current HR hiring process in the next several years.",
    //                 "- My role involved developing Python crawlers.",
    //                 "- The project is still on going at this time."
    //             ]
    //         },
    //     ]
    // },
    {
        company: "SmartDev LLC",
        time: {
            period: getYearMonthDifferenceToNow(6, 2021),
            from: "06/2021",
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
                    "- The purpose of the project is to create a tool that assists Project Managers",
                    "and Developers in finding projects that match their preferences and interests. ",
                    "- During the project, I worked as the BackEnd/DevOps/Team Leader,",
                    "and I concurrently tried to work and learn as much as possible. "
                ]
            },
            {
                prjName: "NFT Football Game",
                prjTeamSize: 6,
                prjResponsibilities: ["Back-end", "Devops"],
                prjTechnologies: ["PlayFab", "Azure-Function", "Java"],
                prjDescription: [
                    "- This is a product project aimed at creating an online game based on the",
                    "Football Manager genre and incorporating NFT tokens. ",
                    "- The server APIs are built using the PlayFab platform and cloud functions,",
                    "specifically Azure Functions in this case. "
                ],
            },
            {
                prjName: "SmartDev Platform",
                prjTeamSize: 40,
                prjResponsibilities: ["Back-end", "Devops"],
                prjTechnologies: ["NestJs", "Kubernetes", "Bitbucket-Pipeline", "CI/CD", "GitOps", "PostgreSQL"],
                prjDescription: [
                    "- The purpose is to create a tool that supports Project Managers in managing comprehensive projects within the company,",
                    "- Enabling them to analyze and strategies in every situation at various points in time. ",
                    "- I worked mainly as a DevOps engineer on this project,",
                    "- Ensuring that the application remains highly available",
                    "- And configuring to deploy and test automatically in every deployment stage (development, staging, production/release). ",
                ],
            },
            {
                prjName: "KOLEDA",
                prjTeamSize: 6,
                prjResponsibilities: ["Back-end", "Devops"],
                prjTechnologies: ["Java SpringBoot", "Kubernetes", "EMQX", "REDIS", "MongoDB"],
                prjDescription: [
                    "- A maintenance IoT project that utilizes smartphones to manage and control devices (Heater/Sensor) in user's home. ",
                ],
            },
            {
                prjName: "Kubernetes Cluster migration",
                prjTeamSize: 2,
                prjResponsibilities: ["DevOps"],
                prjTechnologies: ["Velero", "EC2", "EBS", "GP2", "Terraform", "Blueprint"],
                prjDescription: [
                    "- I supported my leader in migrating from the old Kubernetes cluster to a new cluster on AWS (EKS - Elastic Kubernetes Service). ",
                    "- We planned the migration before beginning, and successfully completed the migration. "
                ],
            }
        ],
    },
]
ExperienceData.forEach(ex => ex.projects.reverse())

const ProjectWorkings: Array<ProjectWorking> = [
    {
        name: "Task manager",
        description: "to manage working to-do, let the tool handle and optimize your life",
        link: "https://todoist.com/"
    },
    {
        name: "Password manager",
        description: "Store, generate & protect all of the password",
        link: "https://bitwarden.com/"
    },
    {
        name: "Learning & noting",
        description: "Noting app manager",
        link: "https://www.notion.so/"
    },
    {
        name: "VPN tooling",
        description: "To explore news, articles,.. are blocked, Secure and Free VPN service for protecting privacy",
        link: "https://protonvpn.com/"
    },
    {
        name: "News tech website",
        description: "Product reviews, advice, how-tos and the latest news",
        link: "https://www.cnet.com/"
    },
    {
        name: "Design tools",
        description: "GIMP - GNU Image Manipulation Program",
        link: "https://www.gimp.org/"
    }
]

const CvIntro = [
    "As a Pythonista, and two years of experience in web development. ",
    "I have worked with Java-SpringBoot before, and since then, I have mostly worked in the role of DevOps in several projects. ",
    "Currently, I am striving to become an expert in my field, which includes Python, DevOps, and AWS Clouds. ",
    "Moreover, I am always eager to learn and willing to dive deep into projects that utilizes Python because I love Python's utilities and easily readable syntax. "
]
const CvProsCons = {
    pros: "I have comprehensive knowledge of web development, which enables me to understand all aspects of project operation and to approach issues easily. ",
    cons: [
        "I am a Python newbie. ",
    ]
}
const CvSkill = {
    main: ["Python", "DevOps", "AWS", "Kubernetes", "Terraform"],
    others: ["ReactJs", "ReduxJs", "CI-CD", "Scrapy", "GitActions", "EKS", "ECR", "Microservices", "Shellscript", "Linux"]
}
const CvEdu = [
    "Danang University of Science and Technology",
    "Time period: 2017-2022",
    "(not graduated)",
]
const CvCert = [
]

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