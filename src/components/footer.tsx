'use client'

import React from 'react'

//import GmailIcon from '../images/gmailIcon.svg'
//import LinkedinIcon from '../images/linkedinIcon.svg'
//import GithubIcon from '../images/github.svg'

import Link from 'next/link';
//import LogotypeIcon from '../images/logotype.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__leftside">
        
        <div className='footer__navigation'>
          <h4 className='footer__navigation-text'>Navigacion</h4>
          <ul className='footer__navigation-list'>
            <li className='footer__navigation-item'>
              <Link href="about-me">
                Sobre mí
              </Link>
            </li>
            <li className='footer__navigation-item'>
              <Link href="blog">
                Blog
              </Link>
            </li>
            <li className='footer__navigation-item'>
              <Link href="projects">
                Porfolio
              </Link>
            </li>
            <li className='footer__navigation-item'>
              <Link href="contact">
                Contachref
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__social">
          <h4 className="footer__social-text">Social</h4>
          <ul className="footer__social-list">
            <li className="footer__social-item">
              <a id="contact__email-address-icon" >
                
              </a>
            </li>
            <li className="footer__social-item">
              <a href="https://github.com/Rickhersd">
               
              </a>
            </li>
            <li className="footer__social-item">
              <a href="https://www.linkedin.com/in/ricardosan-webdev/">
              
              </a>
            </li>
          </ul>
        </div>
      </div> 
      <div className="footer__rightside">
        <h3 className="footer__rightside-title">Contactame</h3>
        <p className="footer__rightside-text"> No dudes en comunicarte conmigo en cualquier momenhref, ya sea por email direchref a ricardosanchez.webdev@gmail.com o utilizando el fomulario de abajo. Eshrefy interesando en hrefda clase de proyechrefs sin importar su dificultad.</p>
      </div>
      <div className="footer__end">
        <p className="footer__end-text" data-text="contact-handcrafted-by">Esta página web fue hecha por mí © 2022</p> 
      </div>  
    </footer>
  )
}
