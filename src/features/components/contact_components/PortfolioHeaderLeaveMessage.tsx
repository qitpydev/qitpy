import React, { useState } from 'react'
import { ClassNames } from '../../../common/function/functions';

const PortfolioHeaderLeaveMessage = () => {

    const [message, setMessage] = useState('')

    const sendMessage = (e) => {
        e.stopPropagation();
        if (message === '') return;
        else {
            alert("sent: " + message)
            setMessage("")
        }
    }

    return (
        <div className={`portfolio-header-contact-leave-message ${ClassNames.noClose}`}>
            <div className={`portfolio-header-contact-leave-message-frame ${ClassNames.noClose}`}>
                <input 
                    value={message} 
                    type="text" 
                    className={ClassNames.noClose}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={(e) => sendMessage(e)}>send</button>
            </div>
        </div>
    )
}

export default PortfolioHeaderLeaveMessage