import React from 'react'
import PropTypes from 'prop-types'
import './SkillItem.scss'
import { SkillDetail } from '../../../../../data'
import MediaQuery from 'react-responsive';

SkillItem.defaultProps = {
  id: "id",
  label: "skill name",
  skills: ['skill1', 'skill2', 'skill3', 'skill4'],
}

SkillItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string
  })),
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

const renderSkills = (skills: Array<SkillDetail>) => {
  return skills.map((item, index) => (
      <span key={index} className="skill-item-items-child" onClick={ () => window.open(item.link)}>
        {item.name}
      </span>
    ))
}

export default SkillItem
