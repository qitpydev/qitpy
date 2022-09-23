import React, { useState } from 'react'

const PortfolioHeaderLeaveMessage = () => {

    const [message, setMessage] = useState('')

    const sendMessage = (e) => {
        e.stopPropagation();
        alert("sent: " + message)
        setMessage("")
    }

    return (
        <div className="portfolio-header-contact-leave-message no-close">
            <div className="portfolio-header-contact-leave-message-frame no-close">
                <input 
                    value={message} 
                    type="text" 
                    className='no-close' 
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={(e) => sendMessage(e)}>send</button>
            </div>
        </div>
    )
}

export default PortfolioHeaderLeaveMessage