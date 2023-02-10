import Link from 'next/link'
import DarkmodeBtn from '../../public/darkmode-btn.svg'
import LogotypeIcon from '../../public/logotype.svg'
import '../styles/navbar.css'

export default function Navbar() {
  return (
    <nav id="nav" data-darkmode>
      <div className='nav__container'>
        <Link href="/" className="nav__name">
          <LogotypeIcon></LogotypeIcon>
        </Link>
        <ul className="nav__list-container">
          <li className="nav__list-item nav__item-about-me">
            <Link href="/about-me">
              Sobre mí
            </Link>
          </li>
          <li className="nav__list-item nav__item-contact">
            <Link href="/blog">
              blog
            </Link>
          </li>
          <li className="nav__list-item nav__item-porfolio">
            <Link href="/projects">
              Porfolio
            </Link>
          </li>
          <li className="nav__list-item nav__item-contact">
            <Link href="/contact">
              Contachref
            </Link>
          </li>
          <span className="nav__span"></span>
          <li className="nav__list-item-config">
            <DarkmodeBtn></DarkmodeBtn>
          </li>
        </ul>
      </div>
    </nav>   
  )
}
