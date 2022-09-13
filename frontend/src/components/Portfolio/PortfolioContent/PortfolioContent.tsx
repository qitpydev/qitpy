import React, {useEffect, useMemo, useState, useRef, useCallback} from 'react'
import './PortfolioContent.scss'
import PortfolioContentAvatar from './Avatar/Avatar'
import Experience from './Experience/Experience';
import  Skill from './Skill/Skill';

function PortfolioContent() {
  return (
    <div className='portfolio-content'>
      {/* <PortfolioContentAvatar /> */}
      <Skill />
      {/* <Experience /> */}
    </div>
  )
}

export default PortfolioContent;