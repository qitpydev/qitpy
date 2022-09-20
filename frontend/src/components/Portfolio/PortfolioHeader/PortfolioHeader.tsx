import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './PortfolioHeader.scss'
import { FaFacebookSquare, FaGithubSquare } from 'react-icons/fa'
import { ImLinkedin } from 'react-icons/im'
import PortfolioHeaderQuote from './PortfolioHeaderQuote/PortfolioHeaderQuote';
import PortfolioContactItem from './PortfolioContactItem/PortfolioContactItem'

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
        {/* <PortfolioHeaderGetCV /> */}
        <PortfolioContactItem text="Get my CV" element={PortfolioHeaderGetCV()}/>
        <PortfolioContactItem text="Leave message" element={PortfolioHeaderLeaveMessage()}/>
        <PortfolioContactItem text="Social links" element={PortfolioHeaderSocial()}/>
        <PortfolioContactItem text="Contact info" element={PortfolioHeaderInfo()}/>
      </div>
  </div>
  )
}

const PortfolioHeaderGetCV = () => {
  return (
    <div className="portfolio-header-contact-getcv">
      Get_My_CV
    </div>
  )
}

const PortfolioHeaderLeaveMessage = () => {
  return (
    <div className="portfolio-header-contact-give-message">
      Message
    </div>
  )
}

const PortfolioHeaderSocial = () => {
    return (
      <>
        <div className="portfolio-header-contact-linkedin">
          <ImLinkedin size={"22px"} />
        </div>
        <div className="portfolio-header-contact-fb" >
          <FaFacebookSquare size={"25px"}/>
        </div>
        <div className="portfolio-header-contact-git">
          <FaGithubSquare size={"25px"}/>
        </div>
      </>
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