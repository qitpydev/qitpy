import React from 'react'
import { ContactValueName } from '../../../common/store/contactSlice'
import PortfolioHeaderContactMe from '../../components/contact_components/PortfolioHeaderContactMe'
import PortfolioHeaderGetCV from '../../components/contact_components/PortfolioHeaderGetCV'
import PortfolioHeaderLeaveMessage from '../../components/contact_components/PortfolioHeaderLeaveMessage'
import PortfolioHeaderSocial from '../../components/contact_components/PortfolioHeaderSocial'
import PortfolioContactItem from '../../components/PortfolioContactItem/PortfolioContactItem'
import "./PortfolioContact.scss"

function PortfolioContact(props) {
    return (
        <div className="portfolio-header-contact">
            <PortfolioContactItem 
                text="Get my CV" 
                element={<PortfolioHeaderGetCV />} 
                stateSet={ContactValueName.GET_CV}
            />
            <PortfolioContactItem 
                text="Leave message" 
                element={<PortfolioHeaderLeaveMessage />} 
                stateSet={ContactValueName.LEAVE_TEXT}
            />
            <PortfolioContactItem 
                text="Social links" 
                element={<PortfolioHeaderSocial />} 
                stateSet={ContactValueName.SOCIAL_LINKS}
            />
            <PortfolioContactItem 
                text="Contact me" 
                element={<PortfolioHeaderContactMe />} 
                stateSet={ContactValueName.CONTACT_ME}
            />
        </div>
    )
}

PortfolioContact.propTypes = {}

export default PortfolioContact
