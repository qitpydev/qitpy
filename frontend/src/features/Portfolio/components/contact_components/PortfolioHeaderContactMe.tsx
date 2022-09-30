import React, { useState } from 'react'
import {IoIosCopy} from 'react-icons/io'
import * as FUNC from '../../../../common/function/functions'

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
        setTimeout(() => setShowCopied(false), 200);
    }

    const CopyLabel = ({value}) => {
        return (
            <div id="copy-label" className={FUNC.classNames.noClose}>
                <IoIosCopy className={FUNC.classNames.noClose} onClick={(e) => handleCopyLabel(e, value)}/>
                {showCopied && <div id="copied">Copied!</div>}
            </div>
        )
    }

    return (
        <div className={`portfolio-header-contact-contact-me ${FUNC.classNames.noClose}`}>
            <div className={`portfolio-header-contact-info-email ${FUNC.classNames.noClose}`} 
                onMouseEnter={() => setShowCopyEmail(true)}
                onMouseLeave={() => setShowCopyEmail(false)}
            >
                <p className={FUNC.classNames.noClose}>{email}</p>
                {showCopyEmail && <CopyLabel value={email}/>}
            </div>
            <div className={`portfolio-header-contact-info-phone ${FUNC.classNames.noClose}`}
                onMouseEnter={() => setShowCopyPhone(true)}
                onMouseLeave={() => setShowCopyPhone(false)}
            >
                <p className={FUNC.classNames.noClose}>{phoneNumber}</p>
                {showCopyPhone && <CopyLabel value={phoneNumber} />}
            </div>
        </div>
    )
}

export default PortfolioHeaderContactMe