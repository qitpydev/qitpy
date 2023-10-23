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
                name: "Ubuntu",
                link: "https://ubuntu.com/"
            },
            {
                name: "Fedora",
                link: "https://getfedora.org/"
            },
        ]
    },
    web: {
        name: "Webs",
        items: [{
            name: "Python",
            link: "https://www.python.org/"
        }, {
            name: "DevOps",
            link: "https://aws.amazon.com/devops/what-is-devops/"
        },],
    },
    devops: {
        name: "DevOps",
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
        }, {
            name: "Helm",
            link: "https://helm.sh/"
        }, {
            name: "Terraform",
            link: "https://www.terraform.io/"
        }, {
            name: "Lens",
            link: "https://k8slens.dev/"
        }, {
            name: "GithubActions",
            link: "#"
        }, {
            name: "BitbucketPipeline",
            link: "#"
        }]
    },
    python: {
        name: "PythonEcosystem",
        items: [{
            name: "FastAPI",
            link: "https://fastapi.tiangolo.com/"
        }, {
            name: "Scrapy",
            link: "https://scrapy.org/"
        }, {
            name: "Airflow",
            link: "https://airflow.apache.org/"
        }]
    },
    others: {
        name: "Others",
        items: [{
            name: "ReactJS",
            link: "https://www.heroku.com/"
        }, {
            name: "SpringBoot",
            link: "https://spring.io/projects/spring-boot"
        }, {
            name: "AzureFunction",
            link: "https://azure.microsoft.com/en-us/products/functions/"
        }, {
            name: "PlayFab",
            link: "https://playfab.com/"
        }, {
        }, {
            name: "Velero",
            link: "https://velero.io/"
        }, {
            name: "NextJs",
            link: "https://nextjs.org/"
        }, {
            name: "MicrosoftBotFramework",
            link: "https://dev.botframework.com/"
        }, {
            name: "Android",
            link: "https://www.android.com/"
        }, {
            name: "IOS",
            link: ""
        }],
    }
}

const ExperienceData: Array<WorkExperienceItem> = [
    {
        company: "Start-Up Projects",
        time: {
            period: getYearMonthDifferenceToNow(11, 2022),
            from: "12/2022",
            to: "now"
        },
        locate: "Da Nang",
        projects: [
            {
                prjName: "Unchain Talent Lab",
                prjTeamSize: 8,
                prjResponsibilities: ["Back-end", "Devops", "Crawler"],
                prjTechnologies: ["Web3", "Scrapy", "Aurora", "Postgres", "NextJs", "AWSCodeBuild", "Terraform", "FastAPI"],
                prjDescription: [
                    "- A start-up project that originated from the idea of applying blockchain technology to change and improve the current HR hiring process in the next several years.",
                    "- My role involved developing Python crawlers. And developing the backend system for the project.",
                    "- The project is still on going at this time."
                ]
            },
        ]
    },
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
                    "- The purpose is to create a platform for SmartDev managing all most of operating activities,",
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
                    "- An IoT project that utilizes smartphones to manage and control devices (Heater/Sensor) in user's home. ",
                ],
            },
            {
                prjName: "Presale Command Bot",
                prjTeamSize: 2,
                prjResponsibilities: ["FullStack"],
                prjTechnologies: ["TypeScript", "AzureCommandBot", "MsTeam", "MicrosoftBotFramework", "AzureCloud", "SharePoint", "AmazonS3", "DocuSign"],
                prjDescription: [
                    "- The command bot the serve the purpose of managing the presale process of the company. ",
                    "- Including integrating DocuSign to sign the contract,",
                    "- Including generating Job Description for HR to post on the company's website. ",
                    "- And configuring to deploy and test automatically in every deployment stage (development, staging, production/release). ",
                ],
            },
            {
                prjName: "Meracle Whizz Spacer - Health Care",
                prjTeamSize: 2,
                prjResponsibilities: ["Back-end", "Devops"],
                prjTechnologies: ["IOS", "Android", "AWS-ECS", "AWS-Aurora", "ECS-Copilot"],
                prjDescription: [
                    "- IoT project that helps asthma kids to breathe better.",
                    "- I worked mainly as a DevOps engineer on this project,",
                    "- Ensuring that the application remains highly available",
                    "- And configuring to deploy and test automatically in every deployment stage (development, staging, production/release). ",
                ],
            },
            {
                prjName: "DoleUS Integration Tool",
                prjTeamSize: 2,
                prjResponsibilities: [],
                prjTechnologies: ["Python", "DevOps", "Airflow", "AWS-Lambda", "FastAPI", "GitActions", "Terraform"],
                prjDescription: [
                    "- A tool to automate the process of integrating data from DoleUS organization to Clarifruit organization Platform. ",
                    "- I worked alone on this project as Developer and DevOps,",
                    "- The automate things are: get the files from a SFTP, then process and other stuffs,",
                    "- And configuring to deploy and test automatically in every deployment stage (development, staging, production/release). ",
                ],
            },
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
    "As a Python DevOps Specialist, I bring a unique blend of programming prowess and infrastructure management expertise to the table.",
    "With a proven track record of optimizing software development and deployment processes, I am dedicated to streamlining operations, enhancing collaboration, and ensuring the reliability and scalability of complex systems.",
]
const CvSkill = {
    main: ["Python-ecosystem", "DevOps", "AWS", "Kubernetes", "Terraform"],
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
    CvSkill,
    CvEdu,
    CvCert
}