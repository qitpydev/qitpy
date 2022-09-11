import React from 'react'
import PropTypes from 'prop-types'
import './SkillItem.scss'

function SkillItem(props) {
    console.log(props);
    const {label, skills, width} = props
  return (
    <div className='skill-item'>
        <div className="item-label">{label}</div>

    </div>
  )
}

const renderSkills = (skills: Array<String>) => {

}

SkillItem.defaultProps = {
    label: "label",
    skill: ['skill1', 'skill2', 'skill3', 'skill4'],
    width: 400
}

SkillItem.propTypes = {
    label: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string),
    width: PropTypes.number,
}

export default SkillItem
