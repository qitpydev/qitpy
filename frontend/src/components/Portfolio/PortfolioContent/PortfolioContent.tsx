import React, {useEffect, useMemo, useState, useRef, useCallback} from 'react'
import './PortfolioContent.scss'
import PortfolioContentAvatar from './Avatar/Avatar'
import Experience from './Experience/Experience';
import  Skill from './Skill/Skill';
import Certificate from './Certificate/Certificate'

function PortfolioContent() {
  return (
    <div className='portfolio-content'>
      <PortfolioContentAvatar />
      <Skill />
      <div className="right-side">
        <Experience />
        <Certificate />
      </div>
    </div>
  )
}

export default PortfolioContent;