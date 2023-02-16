'use client'

import React from 'react'

//import GmailIcon from '../images/gmailIcon.svg'
//import LinkedinIcon from '../images/linkedinIcon.svg'
//import GithubIcon from '../images/github.svg'

import Link from 'next/link';
import AnchorItem from './AnchorItem';
import ListRender from './ListRender';
//import LogotypeIcon from '../images/logotype.svg'

export default function Footer() {
  return (
    <footer className='w-full '>
      <div className='grid grid-cols-4 max-w-7xl mx-auto'>
        <div>
          <div>
            <h4 className='text-2xl font-medium'>Navigation</h4>
            <ul className='footer__navigation-list'>
              <ListRender className='text-gray-800 p-2'>
                <AnchorItem href="about-me">About me</AnchorItem>
                <AnchorItem href="blog">Blog</AnchorItem>
                <AnchorItem href="projects">Portfolio</AnchorItem>
                <AnchorItem href="contact">Contact</AnchorItem>
              </ListRender>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-medium">Social</h4>
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
        <div className="col-span-3">
          <h3 className="footer__rightside-title">Contactame</h3>
          <p className="footer__rightside-text"> No dudes en comunicarte conmigo en cualquier momenhref, ya sea por email direchref a ricardosanchez.webdev@gmail.com o utilizando el fomulario de abajo. Eshrefy interesando en hrefda clase de proyechrefs sin importar su dificultad.</p>
        </div>
      </div>
      <div className="w-full">
        <p className="block mx-auto text-center">Esta página web fue hecha por mí © 2022</p>   
      </div>
      <div></div>
      
      
    </footer>
  )
}
