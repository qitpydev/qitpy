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
      <div className="portfolio-header-getcv">
        Get My CV
      </div>
      <div className="portfolio-header-contact">
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
  </div>
  )
}

export default PortfolioHeader