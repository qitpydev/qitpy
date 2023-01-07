import React from 'react'
import { FaFacebookSquare, FaGithubSquare } from 'react-icons/fa'
import { ImLinkedin } from 'react-icons/im'
import { ContactData } from '../../../../../data';


const PortfolioHeaderSocial = () => {

    const contactSocial = ContactData.socialLinks;

    const openNewTabTo = (url) => { window.open(url, "_blank") }

    return (
        <div className='portfolio-header-contact-social-links'>
            <div className="portfolio-header-contact-linkedin">
                <ImLinkedin size={"22px"}
                    onClick={() => openNewTabTo(contactSocial.linkedin)}
                />
            </div>
            <div className="portfolio-header-contact-fb">
                <FaFacebookSquare size={"25px"}
                    onClick={() => openNewTabTo(contactSocial.facebook)}
                />
            </div>
            <div className="portfolio-header-contact-git">
                <FaGithubSquare size={"25px"}
                    onClick={() => openNewTabTo(contactSocial.github)}
                />
            </div>
        </div>
    )
}

export default PortfolioHeaderSocial
