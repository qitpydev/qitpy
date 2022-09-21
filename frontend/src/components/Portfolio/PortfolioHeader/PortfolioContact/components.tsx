import React, { useState } from 'react'
import { FaFacebookSquare, FaGithubSquare } from 'react-icons/fa'
import { ImLinkedin } from 'react-icons/im'
import {IoIosCopy} from 'react-icons/io'

const PortfolioHeaderGetCV = () => {
    return (
      <div className="portfolio-header-contact-getcv">
        <button className="preview-btn">Preview</button>
        <button className="download-btn">Download</button>
      </div>
    )
}
  
const PortfolioHeaderLeaveMessage = () => {
    return (
        <div className="portfolio-header-contact-leave-message no-close">
            <div className="portfolio-header-contact-leave-message-frame no-close">
                <input type="text" className='no-close' />
                <button>send</button>
            </div>
        </div>
    )
}
  
const PortfolioHeaderSocial = () => {
    return (
    <div className='portfolio-header-contact-social-links'>
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


  
  
const PortfolioHeaderContactMe = () => {


    const [showCopyEmail, setShowCopyEmail] = useState(false)
    const [showCopyPhone, setShowCopyPhone] = useState(false)

    const CopyLabel = () => {
        return (
            <div id="copy-label" className='no-close'>
                <IoIosCopy className='no-close'/>
            </div>
        )
    }

    return (
        <div className="portfolio-header-contact-contact-me no-close">
            <div className="portfolio-header-contact-info-email no-close" 
                onMouseEnter={() => setShowCopyEmail(true)}
                onMouseLeave={() => setShowCopyEmail(false)}
            >
                <p className='no-close'>code.maito@outlook.com</p>
                {showCopyEmail && <CopyLabel />}
            </div>
            <div className="portfolio-header-contact-info-phone no-close"
                onMouseEnter={() => setShowCopyPhone(true)}
                onMouseLeave={() => setShowCopyPhone(false)}
            >
                <p className='no-close'>0868260254</p>
                {showCopyPhone && <CopyLabel />}
            </div>
        </div>
    )
}

export {
    PortfolioHeaderGetCV, 
    PortfolioHeaderLeaveMessage, 
    PortfolioHeaderSocial, 
    PortfolioHeaderContactMe
}