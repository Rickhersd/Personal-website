import Navbar from '@root/components/navbar'
import Link from 'next/link'
import LogotypeIcon from '@root/../public/logotype.svg'
import "@root/styles/dashboard.css"
import { Roboto } from '@next/font/google';
import ContextProvider from './appContext';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <head />
      <body>
        <ContextProvider>
          <div className='dashboard'>
            <nav className='dashboard__nav'>
              <LogotypeIcon className='dashboard__nav-logo'></LogotypeIcon>
              <hr></hr>
              <ul className='dashboard__nav-list'>
                <li className='dashboard__nav-item' ><Link href='/dashboard/projects'>Proyectos</Link></li>
                <li className='dashboard__nav-item' ><Link href='/dashboard/blogs'>Blogs</Link></li>
                <li className='dashboard__nav-item' ><Link href='/dashboard/skills'>Habilidades</Link></li>
              </ul>
            </nav>
            <main className='dashboard__content'>
              <h1 className='dashboard__content-title'>Bienvenido, Ricardo!</h1>
              <hr></hr>
              {children}
            </main>
          </div>
        </ContextProvider>
      </body>
    </html>
  )
}
