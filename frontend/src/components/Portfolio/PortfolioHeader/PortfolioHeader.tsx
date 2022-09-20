import React from 'react'
import { Link } from 'react-router-dom'
import './PortfolioHeader.scss'
import { FaFacebookSquare, FaGithubSquare } from 'react-icons/fa'
import { ImLinkedin } from 'react-icons/im'
import PortfolioHeaderQuote from './PortfolioHeaderQuote/PortfolioHeaderQuote';

function PortfolioHeader() {
  return (
    <div className='portfolio-header'>
      <div className='portfolio-header-logo'>
          LOGO
      </div>

      <div className="portfolio-header-quote">
        <PortfolioHeaderQuote />
      </div>
      
      <div className="portfolio-header-contact">
        <PortfolioHeaderGetCV />
        <PortfolioHeaderLeaveMessage />
        <PortfolioHeaderSocial />
        <PortfolioHeaderInfo />
      </div>
  </div>
  )
}

const PortfolioHeaderGetCV = () => {
  return (
    <div className="portfolio-header-contact-getcv">
      Get My CV
    </div>
  )
}

const PortfolioHeaderLeaveMessage = () => {
  return (
    <div className="portfolio-header-contact-give-message">give MS</div>
  )
}

const PortfolioHeaderSocial = () => {

  return (
    <div className="portfolio-header-contact-social">
      <div className="portfolio-header-contact-linkedin">
        <ImLinkedin size={"22px"} />
      </div>
      <div className="portfolio-header-contact-fb" >
        <FaFacebookSquare size={"25px"}/>
      </div>
      <div className="portfolio-header-contact-git">
        <FaGithubSquare size={"25px"}/>
      </div>
    </div>
  )
}

const PortfolioHeaderInfo = () => {
  return (
    <div className="portfolio-header-contact-info">
      <div className="portfolio-header-contact-info-email">code.maito@outlook.com</div>
      <div className="portfolio-header-contact-info-phone">0868260254</div>
    </div>
  )
}

export default PortfolioHeader