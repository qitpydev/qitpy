import React, {useEffect, useMemo, useState, useRef, useCallback} from 'react'
import './PortfolioContent.scss'
import PortfolioContentAvatar from './Avatar/Avatar'
import Experience from './Experience/Experience';
import  Skill from './Skill/Skill';
import Certificate from './Certificate/Certificate'
import AppCenter from './AppCenter/AppCenter';

function PortfolioContent() {
  return (
    <div className="portfolio-content">
      <div className="portfolio-content-avatar"><PortfolioContentAvatar /></div>
      <div className="portfolio-content-skill"><Skill /></div>
      <div className="portfolio-content-experience"><Experience /></div>
      <div className="portfolio-content-app">app</div>
      <div className="portfolio-content-certificate"><Certificate /></div>
    </div>
  )
}

export default PortfolioContent;