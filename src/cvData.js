export const cvData = {
  name: 'QUYET DOAN',
  title: 'DevOps Engineer',
  contact: {
    email: 'qitpydev@gmail.com',
    phone: '+84-868-260-254',
    location: 'Vietnam',
    linkedin: 'linkedin.com/in/qitpy',
    github: 'github.com/qitpydev',
  },

  summary: `DevOps Engineer with nearly 5 years of experience in tech, including 3 years focused on DevOps and cloud infrastructure. Started as a software developer, which helps me work closely with dev teams and understand CI/CD requirements. Primarily work with AWS, with hands-on experience in Azure and GCP. Contributed to 10+ projects, focusing on cost optimization, automation, and system reliability. Currently learning cloud security, actively using AI tools to improve productivity, and growing toward a DevSecOps role.`,

  skills: [
    {
      group: 'Strong Experience',
      items: [
        { label: 'AWS', detail: 'VPC, EKS, RDS, S3, CloudFront, EC2, ALB, WAF, IAM, Lambda, Step Function, ECS, Secrets Manager, Route53' },
        { label: 'Programming', detail: 'Python, JavaScript, Bash' },
        { label: 'CI/CD', detail: 'GitHub Actions, Bitbucket Pipeline, Azure DevOps Pipeline' },
        { label: 'Infrastructure as Code', detail: 'Terraform, ArgoCD' },
        { label: 'Monitoring', detail: 'Grafana, Prometheus, Loki, Uptime Kuma' },
        { label: 'Database', detail: 'PostgreSQL, MySQL, MongoDB, Qdrant, ChromaDB' },
        { label: 'Self-hosted', detail: 'Nginx, Apache, WordPress, Docker Compose, Dockge, Portainer, Confluent Kafka' },
        { label: 'Other', detail: 'Kubernetes, Docker, Claude Code, FastAPI, SonarQube, AWS Copilot CLI, Keycloak' },
      ]
    },
    {
      group: 'Familiar',
      items: [
        { label: 'Azure', detail: 'App Service, Azure OpenAI, API Management, Flexible PostgreSQL, VM, Monitor, EntraID, Container App, Azure Function, PlayFab' },
        { label: 'GCP', detail: 'Cloud Run, Cloud SQL, VM' },
        { label: 'Other', detail: 'Infisical Secrets, DigitalOcean, GitLab, Moodle, PHP, FluxCD, React Native, Apple Store, Google Play Console, Java Quarkus, Java Spring Boot, Airflow, Nginx, Apache, Laravel, Ansible, PM2, Multi EKS cluster on Production.' },
      ]
    },
  ],

  experience: [
    {
      title: 'DevOps Engineer',
      company: 'SmartDev LLC - Outsourcing',
      period: 'Jun 2023 – Present (2.5 years)',
      bullets: [
        'Built and managed cloud infrastructure for 10+ projects, mostly on AWS, with some work on Azure, GCP, DigitalOcean, and VPS',
        'Set up CI/CD pipelines using Bitbucket Pipeline, Azure DevOps, GitHub Actions, and GitLab CI for containerized services',
        'Set up monitoring, logs, and alerts for websites, services, and databases using Grafana, Prometheus, Loki, Uptime Kuma',
        'Used Terraform to provision infrastructure on all cloud projects',
        'Reduced cloud costs by finding the right resource sizes and setting up auto-scaling',
        'Worked with dev teams to fix infrastructure issues and improve system speed',
        'Migrated PHP websites from AWS to DigitalOcean to reduce costs',
        'Applied Cloudflare WAF to protect a compromised vanilla PHP website on DigitalOcean',
        'Applied AWS WAF to protect a compromised WordPress website on EC2',
        'Worked with DevOps Team to design Disaster Recovery for EKS cluster using Velero',
        'Maintained multiple projects for years; provided short-term DevOps support and quick CI/CD setup for small projects',
        'Supported Pre-sale team to plan and design system documentation for small projects',
      ]
    },
    {
      title: 'Software Developer',
      company: 'SmartDev LLC - Outsourcing',
      period: 'Jun 2021 – Jun 2023 (2 years)',
      bullets: [
        'Started as Java Back-end developer building Enterprise Internal Web Application with AI recommendation system for matching employees to projects',
        'Worked as Python Developer solo with US clients to build end-to-end automation tools using AWS ECS, Lambda, RDS, Atlas MongoDB, Airflow, FastAPI',
        'Developed Enterprise Internal Bot to automate NDA signing contracts and generate Job Description files',
        'Started DevOps role building Enterprise Internal microservices platform using AWS EKS, Terraform, FluxCD, Next.js, NestJS, Java',
      ]
    },
  ],

  projects: [
    {
      title: 'DevOps Engineer',
      company: 'Beelabs Product Team',
      period: 'Jan 2025 – Jul 2025 (7 months)',
      description: 'Solo DevOps work with team of 10 developers',
      bullets: [
        'Migrated self-hosted platform from Docker Containers on EC2 to AWS EKS for better scaling and production readiness',
        'Built and maintained multiple environment EKS clusters and infrastructure using Terraform',
        'Applied Karpenter to save cost on Worker Nodes for non-production clusters and enable auto-scaling',
        'Applied ArgoCD to practice GitOps in team culture',
        'Applied GitHub Actions Reusable Workflow to optimize CI/CD pipelines across many microservices',
        'Applied Infisical Secrets for better developer experience with secret management in Kubernetes',
        'Applied Loki Stack for cluster log monitoring',
      ]
    },
    {
      title: 'Data Crawler Developer',
      company: 'UCTalent Product Team',
      period: 'Nov 2023 – Apr 2024 (5 months)',
      description: '',
      bullets: [
        'Crawled job data from sites using Scrapy',
        'Processed and mapped job data to better structure and saved into database',
      ]
    },
  ],

  additional: [
    'Languages: Vietnamese (native), English (working level)',
    'Currently learning: Cloud Security, Basic Security, applying AI at work',
    'AI tools: Actively using and investing in Claude Code Max plan to improve work speed',
    'Interests: Security, MLOps, IoT, Humanoid Robotics',
  ],
};
