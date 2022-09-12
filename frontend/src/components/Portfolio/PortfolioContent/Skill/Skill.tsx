import React from 'react'
import PropTypes from 'prop-types'
import './Skill.scss'
import SkillItem from '../SkillItem/SkillItem';
import { skillsData } from '../../../../data';

const osItemWidth = 500;
const webItemWidth = 500;
const databaseItemWidth = 500;
const devopsItemWidth = 500;
const toolsItemWidth = 500;
const othersItemWidth = 500;

function Skill(props) {
  return (
    <div className='portfolio-skill'>
        <div className="label-rotate">Skills</div>
        <SkillItem label={skillsData.os.name} skills={skillsData.os.items} width={osItemWidth} />
        <SkillItem label={skillsData.web_skill.name} skills={skillsData.web_skill.items} width={webItemWidth} />
        <SkillItem label={skillsData.database_skill.name} skills={skillsData.database_skill.items} width={databaseItemWidth} />
        <SkillItem label={skillsData.devops_skill.name} skills={skillsData.devops_skill.items} width={devopsItemWidth} />
        <SkillItem label={skillsData.tools.name} skills={skillsData.tools.items} width={toolsItemWidth} />
        <SkillItem label={skillsData.others.name} skills={skillsData.others.items} width={othersItemWidth} />
    </div>
  )
}

Skill.propTypes = {}

export default Skill
