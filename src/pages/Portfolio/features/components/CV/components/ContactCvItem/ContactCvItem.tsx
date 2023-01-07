import React from 'react'
import "./ContactCvItem.scss";

function ContactCvItem(props) {
  const { children, name, content } = props

  return (
    <div id='contact-cv-item'>
        <div className="contact-cv-item__title">
            {children}  <span>{name}</span>
        </div>
        <div className="contact-cv-item__content">
            : {content}
        </div>
    </div>
  )
}

export default ContactCvItem