import React, { useState } from 'react'
import * as FUNC from '../../../../common/function/functions'

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
        <div className={`portfolio-header-contact-leave-message ${FUNC.classNames.noClose}`}>
            <div className={`portfolio-header-contact-leave-message-frame ${FUNC.classNames.noClose}`}>
                <input 
                    value={message} 
                    type="text" 
                    className={FUNC.classNames.noClose}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={(e) => sendMessage(e)}>send</button>
            </div>
        </div>
    )
}

export default PortfolioHeaderLeaveMessage