import React from 'react'
import { FaFacebookSquare, FaGithubSquare } from 'react-icons/fa'
import { ImLinkedin } from 'react-icons/im'
import PortfolioContactItem from '../PortfolioContactItem/PortfolioContactItem'
import { ContactValueName } from '../../../../app/contactSlice'

function PortfolioContact(props) {

    return (
        <div className="portfolio-header-contact">
            <PortfolioContactItem 
                text="Get my CV" 
                element={PortfolioHeaderGetCV()} 
                stateSet={ContactValueName.GET_CV}
            />
            <PortfolioContactItem 
                text="Leave message" 
                element={PortfolioHeaderLeaveMessage()} 
                stateSet={ContactValueName.LEAVE_TEXT}
            />
            <PortfolioContactItem 
                text="Social links" 
                element={PortfolioHeaderSocial()} 
                stateSet={ContactValueName.SOCIAL_LINKS}
            />
            <PortfolioContactItem 
                text="Contact me" 
                element={PortfolioHeaderContactMe()} 
                stateSet={ContactValueName.CONTACT_ME}
            />
        </div>
    )
}

const PortfolioHeaderGetCV = () => {
    return (
      <div className="portfolio-header-contact-getcv" id='getCV'>
        Get_My_CV
      </div>
    )
  }
  
const PortfolioHeaderLeaveMessage = () => {
return (
    <div className="portfolio-header-contact-give-message" id='leaveText'>
    Message
    </div>
)
}
  
const PortfolioHeaderSocial = () => {
    return (
    <div className='portfolio-header-contact-social-links' id='socialLinks'>
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
return (
    <div className="portfolio-header-contact-contact-me" id='contactMe'>
    <div className="portfolio-header-contact-info-email">code.maito@outlook.com</div>
    <div className="portfolio-header-contact-info-phone">0868260254</div>
    </div>
)
}

PortfolioContact.propTypes = {}

export default PortfolioContact
