const infoData = {
    paragraphHeader: [
        "Hi, my name is Quyet - a young guy that loves Computer, Programming & Technologies."
    ],
    paragraphBody: [
        "I am a Web-Developer, with about 2 years experience, from 2021.",
        "My beginning is Springboot (a Java Framework)",
        "Besides, i can build CI/CD to deploy to VPS or Cloud-Service (Kubernetes) by myself.",
        "In previous projects, i was working as DevOps - FrontEnd - BackEnd roles",
    ],
    paragraphFooter:[
        "I love Python because the ability, strongly, shortly, quickly and intelligence.",
        "Currently, i am interested in to working with ReactJs & Django.",
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
        items: ["docker", "kubenetes", "Helm", "ECR", "VPS", "BitbucketPipeline", "Crontab", "ShellScript"],
    },
    tools: {
        name: "Tools",
        items: ["VisualCode", "Postman", "Lens", "Brave", "Figma", "Bitbucket", "Jira", "FileZilla", "SSH", "Github"],
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

export {infoData, skillsData, skillOverviewChart}