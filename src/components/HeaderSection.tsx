import React from 'react'

import '../sass/_header.scss';

export default function HeaderSection() {
  return (
  <div className="header__container">
    <div className="header__rightside">
      <div>
        <h1 className="header__title" data-text="header-title">Hola, mi nombre es <br /><span>RICARDO SANCHEZ</span></h1> 
        <p className="header__subtext data" data-text="header-subtext">Desarollador Web Full Stack y Apasionado del Código.<br /> <span> Creo impresionantes y originales páginas web, y disfruto cada día poder dedicarme a ello.</span></p> 
      </div>
    </div>
    <div className="header__nav">
      <ul className="header__nav-list" >
        <li className="header__nav-item" data-appearIndex="1"><a href="#about-me" data-text="nav-about-me">Sobre mí</a></li>
        <li className="header__nav-item" data-appearIndex="2"><a href="#skills" data-text="nav-skills">Habilidades</a></li>
        <li className="header__nav-item"> <a href="#portfolio" data-text="nav-portfolio">Porfolio</a></li>
        <li className="header__nav-item"> <a href="#contact" data-text="nav-contact">Contacto</a></li>
      </ul> 
    </div>
  </div>
  )
}
