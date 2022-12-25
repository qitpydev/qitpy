import React from 'react'
import ContactCvItem from '../components/ContactCvItem/ContactCvItem';
import "./ContactCv.scss"

function ContactCv() {
  return (
    <div id='contact-cv'>
      <ContactCvItem />
      <ContactCvItem />
      <ContactCvItem />
    </div>
  )
}

export default ContactCv