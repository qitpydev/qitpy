import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './SkillItem.scss'

SkillItem.defaultProps = {
  id: "id",
  label: "skill name",
  skills: ['skill1', 'skill2', 'skill3', 'skill4'],
}

SkillItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string),
}

/* assign id to the tag that container items */
const itemsSuffix = "items"
export const getItemsContainerId = (id) => {
  return id + "_" + itemsSuffix;
}

function SkillItem(props) {
  const {label, skills} = props
  const id = props.id || ""

  return (
    <div className="skill-item" id={id}>
        <div className="skill-item-label">{label}:</div>
        <div className="skill-item-items" id={getItemsContainerId(id)}>
          <div className="skill-item-items-container">
            {renderSkills(skills)}
          </div>
        </div>
    </div>
  )
}

const renderSkills = (skills: Array<String>) => {
  return skills.map((item, index) => (
      <span key={index} className="skill-item-items-child">
        {item}
      </span>
    ))
}

export default SkillItem
