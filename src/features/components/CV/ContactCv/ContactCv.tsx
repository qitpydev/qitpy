import React from 'react'
import ContactCvItem from '../components/ContactCvItem/ContactCvItem';
import "./ContactCv.scss"
import { BiWorld, BiPhoneCall, BiMailSend } from 'react-icons/bi';
import { SiLinkedin } from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'

function ContactCv() {
  return (
    <div id='contact-cv'>
      <ContactCvItem name='Website' content='www.qitpy.com'><BiWorld /></ContactCvItem>
      <ContactCvItem name='Phone' content='0868260254'><BiPhoneCall /></ContactCvItem>
      <ContactCvItem name='Email' content='qitpydev@gmail.com'><BiMailSend /></ContactCvItem>
      <ContactCvItem name='Linkedin' content='www.linkedin.com/in/qitpy/'><SiLinkedin /></ContactCvItem>
      <ContactCvItem name='GitHub' content='www.github.com/qitpy'><AiFillGithub /></ContactCvItem>
    </div>
  )
}

export default ContactCv