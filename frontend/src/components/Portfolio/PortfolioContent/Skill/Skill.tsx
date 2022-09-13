import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './Skill.scss'
import SkillItem, {getItemsContainerId} from '../SkillItem/SkillItem';
import { skillsData } from '../../../../data';


const osElementId = "os_skill";
const databaseElementId = "database_skill";
const webElementId = "web_skill";
const devopsElementId = "devops_skill";
const toolElementId = "tool_skill";
const otherElementId = "other_skill";



// TODO: add ClassName to SkillItem

function Skill(props) {

  useEffect(() => {
    addAnimationWhetherOverflow(osElementId);
    addAnimationWhetherOverflow(databaseElementId);
    addAnimationWhetherOverflow(webElementId);
    addAnimationWhetherOverflow(devopsElementId);
    addAnimationWhetherOverflow(toolElementId);
    addAnimationWhetherOverflow(otherElementId);
  }, [])

  return (
    <div className='portfolio-skill'>
        {/* <div className="label-rotate">Skills</div> */}
        <SkillItem id={osElementId} label={skillsData.os.name} skills={skillsData.os.items} />
        <SkillItem id={databaseElementId} label={skillsData.database_skill.name} skills={skillsData.database_skill.items} />
        <SkillItem id={webElementId} label={skillsData.web_skill.name} skills={skillsData.web_skill.items} />
        <SkillItem id={devopsElementId} label={skillsData.devops_skill.name} skills={skillsData.devops_skill.items} />
        <SkillItem id={toolElementId} label={skillsData.tools.name} skills={skillsData.tools.items} />
        <SkillItem id={otherElementId} label={skillsData.others.name} skills={skillsData.others.items} />
    </div>
  )
}

const addAnimationWhetherOverflow = (skillElementId: string) => {
  const containerItemsId = getItemsContainerId(skillElementId);
  const containerGroupItemsElementWidth = document.getElementById(containerItemsId)?.clientWidth || 0;
  const groupItemsElement = document.querySelector(`#${containerItemsId} div`);
  const groupItemsElementWidth = groupItemsElement?.clientWidth || 0;

  console.log(skillElementId, containerGroupItemsElementWidth, "<", groupItemsElementWidth);
  if (containerGroupItemsElementWidth < groupItemsElementWidth) {
    groupItemsElement?.classList.add("skill-animation");
    (groupItemsElement as HTMLElement).style.animationDuration = groupItemsElementWidth/containerGroupItemsElementWidth + "s"
  }
}


export default Skill
