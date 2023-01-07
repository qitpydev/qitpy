import React, { useState } from 'react'
import {IoIosCopy} from 'react-icons/io'
import { ClassNames } from '../../../common/function/functions';

const PortfolioHeaderContactMe = () => {

    const email = "qitpydev@gmail.com";
    const phoneNumber = "+84868260254"

    const [showCopyEmail, setShowCopyEmail] = useState(false)
    const [showCopyPhone, setShowCopyPhone] = useState(false)
    const [showCopied, setShowCopied] = useState(false)
    const handleCopyLabel = (e, value) => {
        e.stopPropagation()
        setShowCopied(true)
        navigator.clipboard.writeText(value)
        setTimeout(() => setShowCopied(false), 200);
    }

    const CopyLabel = ({value}) => {
        return (
            <div id="copy-label" className={ClassNames.noClose}>
                <IoIosCopy className={ClassNames.noClose} onClick={(e) => handleCopyLabel(e, value)}/>
                {showCopied && <div id="copied">Copied!</div>}
            </div>
        )
    }

    return (
        <div className={`portfolio-header-contact-contact-me ${ClassNames.noClose}`}>
            <div className={`portfolio-header-contact-info-email ${ClassNames.noClose}`}
                onMouseEnter={() => setShowCopyEmail(true)}
                onMouseLeave={() => setShowCopyEmail(false)}
            >
                <p className={ClassNames.noClose}>{email}</p>
                {showCopyEmail && <CopyLabel value={email}/>}
            </div>
            <div className={`portfolio-header-contact-info-phone ${ClassNames.noClose}`}
                onMouseEnter={() => setShowCopyPhone(true)}
                onMouseLeave={() => setShowCopyPhone(false)}
            >
                <p className={ClassNames.noClose}>{phoneNumber}</p>
                {showCopyPhone && <CopyLabel value={phoneNumber} />}
            </div>
        </div>
    )
}

export default PortfolioHeaderContactMe