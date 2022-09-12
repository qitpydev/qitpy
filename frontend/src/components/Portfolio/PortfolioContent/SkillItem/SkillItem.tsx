import React from 'react'
import PropTypes from 'prop-types'
import './SkillItem.scss'

function SkillItem(props) {
    console.log(props);
    const {label, skills, width} = props
    const class_name = props.className || ""
  return (
    <div className={`skill-item ${class_name}`} style={{width: width}}>
        <div className="skill-item-label">{label}:</div>
        <div className="skill-item-items">
          {renderSkills(skills)}
        </div>
    </div>
  )
}

const renderSkills = (skills: Array<String>) => {
  return skills.map((item, index) => (
    <div key={index} className="skill-item-items-child">
      {item}
      </div>
    ))
}

SkillItem.defaultProps = {
    className: "className",
    label: "skill name",
    skills: ['skill1', 'skill2', 'skill3', 'skill4'],
    width: 400,
}

SkillItem.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string),
    width: PropTypes.number,
}

export default SkillItem
