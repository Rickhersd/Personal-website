'use client'

import React from 'react'

import GmailIcon from '@root/svgs/gmail.svg'
import LinkedinIcon from '@root/svgs/linkedin.svg'
import GithubIcon from '@root/svgs/github.svg'

import AnchorItem from '../AnchorItem';
import ListRender from '../ListRender';
//import LogotypeIcon from '../images/logotype.svg'

export default function Footer() {
  return (
    <footer className='w-full mt-10'>
      <div className='grid grid-cols-5 max-w-7xl mx-auto pt-10 border-t border-gray-300'>
        <div>
          <h4 className='text-2xl font-bold text-gray-900'>Navigation</h4>
          <ul>
            <ListRender className='text-gray-800 p-2 pl-0'>
              <AnchorItem href="about-me">About me</AnchorItem>
              <AnchorItem href="blog">Blog</AnchorItem>
              <AnchorItem href="projects">Portfolio</AnchorItem>
              <AnchorItem href="contact">Contact</AnchorItem>
            </ListRender>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-bold text-gray-900">Social</h4>
          <ul className="footer__social-list">
            <ListRender className='flex flex-row text-gray-800 pl-0 items-center'>
              <a href='https://github.com/Rickhersd'>
                <GmailIcon className='w-10 y-10 text-gray-800'></GmailIcon>
                Gmail
              </a>
              <a href='https://www.linkedin.com/in/ricardosan-webdev/'>
                <LinkedinIcon className='w-10 y-10 text-gray-800'></LinkedinIcon>
                Linkelin
              </a>
              <a href='https://github.com/Rickhersd'>
                <GithubIcon className='w-10 y-10 text-gray-800'></GithubIcon>
                Github
              </a>
            </ListRender>
          </ul>
        </div>
        <div className="col-span-3">
          <h3 className="footer__rightside-title">Contactame</h3>
          <p className="footer__rightside-text"> No dudes en comunicarte conmigo en cualquier momenhref, ya sea por email direchref a ricardosanchez.webdev@gmail.com o utilizando el fomulario de abajo. Eshrefy interesando en hrefda clase de proyechrefs sin importar su dificultad.</p>
        </div>
      </div>
      <div className="w-full">
        <p className="block mx-auto text-center">Esta página web fue hecha por mí © 2022</p>   
      </div>
    </footer>
  )
}
