import React from 'react'
import PropTypes from 'prop-types'
import './Skill.scss'
import SkillItem from '../SkillItem/SkillItem';

function Skill(props) {
  return (
    <div className='portfolio-skill'>
        <div className="label-rotate">Skills</div>
        <div className="skill-os">Fedora, ubuntu</div>
        <div className="skill-web">JavaScript, Reactjs, Redux, Python, Django, Microservices</div>
        <div className="skill-database">Mysql, Postgres, MongoDB</div>
        <div className="skill-devops">docker, kubenetes, Helm, ECR, VPS, bitbucket-pipeline, Crontab, Shell script</div>
        <div className="skill-tool">Visual Code, Postman, Lens, Brave, Figma, Bitbucket, Jira, FileZilla, SSH, Github</div>
        <div className="skill-others">Heroku, SpringBoot, Azure-Function, NestJs, EMQX</div>
        <SkillItem />
    </div>
  )
}

Skill.propTypes = {}

export default Skill
