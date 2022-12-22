import React from 'react'
import './LabelLineDecor.scss'

function LabelLineDecor({name}) {
  return (
    <div id='label-line-decor'>
        <div className="label-line-decor__title">{name}</div>
        <div className="label-line-decor__line"></div>
    </div>
  )
}

export default LabelLineDecor