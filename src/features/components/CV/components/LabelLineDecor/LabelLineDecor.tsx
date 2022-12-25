import React from 'react'
import './LabelLineDecor.scss'

function LabelLineDecor({name}) {
  return (
    <div id='label-line-decor'>
        <h2 className="label-line-decor__title">{name}</h2>
        <div className="label-line-decor__line"></div>
    </div>
  )
}

export default LabelLineDecor