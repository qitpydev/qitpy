import React from 'react'
import PortfolioContactItem from '../PortfolioContactItem/PortfolioContactItem'
import { ContactValueName } from '../../../../app/contactSlice'
import {
    PortfolioHeaderGetCV, 
    PortfolioHeaderLeaveMessage, 
    PortfolioHeaderSocial, 
    PortfolioHeaderContactMe
} from './components'

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
