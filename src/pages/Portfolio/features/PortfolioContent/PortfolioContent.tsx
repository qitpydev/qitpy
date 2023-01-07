import React, {useEffect} from 'react'
import './PortfolioContent.scss'
import PortfolioContentAvatar from './Avatar/Avatar'
import Experience from './Experience/Experience';
import  Skill from './Skill/Skill';
import Certificate from './Certificate/Certificate'
import AppCenter from './AppCenter/AppCenter';
import { ClassNames, recursiveToAddClassNameWith } from '../../common/function/functions';

function PortfolioContent() {

  const portfolioExperienceId = "portfolio-content-experience"

  useEffect(() => {
    recursiveToAddClassNameWith(portfolioExperienceId, ClassNames.noWrap)
  }, [])

  return (
    <div className="portfolio-content">
      <div className="portfolio-content-avatar"><PortfolioContentAvatar /></div>
      <div className="portfolio-content-skill"><Skill /></div>
      <div className="portfolio-content-experience" id={portfolioExperienceId}><Experience /></div>
      <div className="portfolio-content-app"><AppCenter /></div>
      {/* <div className="portfolio-content-app"><h1>ss</h1></div> */}
      <div className="portfolio-content-certificate"><Certificate /></div>
    </div>
  )
}

export default PortfolioContent;