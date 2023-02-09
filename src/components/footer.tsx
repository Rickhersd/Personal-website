import React from 'react'

import ContactForm from "../components/ContactForm";

import GmailIcon from '../images/gmailIcon.svg'
import LinkedinIcon from '../images/linkedinIcon.svg'
import GithubIcon from '../images/github.svg'

import '../sass/_contact.scss'
import { Link } from 'react-router-dom'
import LogotypeIcon from '../images/logotype.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__leftside">
        <LogotypeIcon className='footer__logotype'></LogotypeIcon>
        <div className='footer__navigation'>
          <h4 className='footer__navigation-text'>Navigacion</h4>
          <ul className='footer__navigation-list'>
            <li className='footer__navigation-item'>
              <Link to="about-me">
                Sobre mí
              </Link>
            </li>
            <li className='footer__navigation-item'>
              <Link to="blog">
                Blog
              </Link>
            </li>
            <li className='footer__navigation-item'>
              <Link to="projects">
                Porfolio
              </Link>
            </li>
            <li className='footer__navigation-item'>
              <Link to="contact">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__social">
          <h4 className="footer__social-text">Social</h4>
          <ul className="footer__social-list">
            <li className="footer__social-item">
              <a id="contact__email-address-icon" >
                <GmailIcon className='contact-end__social-link'></GmailIcon>
              </a>
            </li>
            <li className="footer__social-item">
              <a href="https://github.com/Rickhersd">
                <GithubIcon className='contact-end__social-link'></GithubIcon>
              </a>
            </li>
            <li className="footer__social-item">
              <a href="https://www.linkedin.com/in/ricardosan-webdev/">
                <LinkedinIcon className='contact-end__social-link'></LinkedinIcon>
              </a>
            </li>
          </ul>
        </div>
      </div> 
      <div className="footer__rightside">
        <h3 className="footer__rightside-title">Contactame</h3>
        <p className="footer__rightside-text"> No dudes en comunicarte conmigo en cualquier momento, ya sea por email directo a ricardosanchez.webdev@gmail.com o utilizando el fomulario de abajo. Estoy interesando en toda clase de proyectos sin importar su dificultad.</p>
        <ContactForm></ContactForm>
      </div>
      <div className="footer__end">
        <p className="footer__end-text" data-text="contact-handcrafted-by">Esta página web fue hecha por mí © 2022</p> 
      </div>  
    </footer>
  )
}
