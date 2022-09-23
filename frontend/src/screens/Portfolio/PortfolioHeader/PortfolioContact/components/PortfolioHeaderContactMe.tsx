import React, { useState } from 'react'
import {IoIosCopy} from 'react-icons/io'

const PortfolioHeaderContactMe = () => {

    const email = "code.maito@outlook.com";
    const phoneNumber = "+84868260254"

    const [showCopyEmail, setShowCopyEmail] = useState(false)
    const [showCopyPhone, setShowCopyPhone] = useState(false)
    const [showCopied, setShowCopied] = useState(false)
    const handleCopyLabel = (e, value) => {
        e.stopPropagation()
        setShowCopied(true)
        navigator.clipboard.writeText(value)
        setTimeout(() => setShowCopied(false), 500);
    }

    const CopyLabel = ({value}) => {
        return (
            <div id="copy-label" className='no-close'>
                <IoIosCopy className='no-close' onClick={(e) => handleCopyLabel(e, value)}/>
                {showCopied && <div id="copied">Copied!</div>}
            </div>
        )
    }

    return (
        <div className="portfolio-header-contact-contact-me no-close">
            <div className="portfolio-header-contact-info-email no-close" 
                onMouseEnter={() => setShowCopyEmail(true)}
                onMouseLeave={() => setShowCopyEmail(false)}
            >
                <p className='no-close'>{email}</p>
                {showCopyEmail && <CopyLabel value={email}/>}
            </div>
            <div className="portfolio-header-contact-info-phone no-close"
                onMouseEnter={() => setShowCopyPhone(true)}
                onMouseLeave={() => setShowCopyPhone(false)}
            >
                <p className='no-close'>{phoneNumber}</p>
                {showCopyPhone && <CopyLabel value={phoneNumber} />}
            </div>
        </div>
    )
}

export default PortfolioHeaderContactMe