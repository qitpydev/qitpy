import React, {useEffect, useMemo, useState, useRef, useCallback} from 'react'
import './PortfolioContent.scss'
import PortfolioContentAvatar from './Avatar/Avatar'
import Experience from './Experience/Experience';
import  Skill from './Skill/Skill';
import Certificate from './Certificate/Certificate'
import AppCenter from './AppCenter/AppCenter';
import * as FUNC from "../../../common/function/functions"

function PortfolioContent() {

  const portfolioExperienceId = "portfolio-content-experience"

  useEffect(() => {
    FUNC.recursiveToAddClassNameWith(portfolioExperienceId, FUNC.classNames.noWrap)
  }, [])

  return (
    <div className="portfolio-content">
      <div className="portfolio-content-avatar"><PortfolioContentAvatar /></div>
      <div className="portfolio-content-skill"><Skill /></div>
      <div className="portfolio-content-experience" id={portfolioExperienceId}><Experience /></div>
      <div className="portfolio-content-app"><AppCenter></AppCenter></div>
      <div className="portfolio-content-certificate"><Certificate /></div>
    </div>
  )
}

export default PortfolioContent;