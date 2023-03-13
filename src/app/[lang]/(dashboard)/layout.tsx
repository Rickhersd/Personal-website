import Darkmode_btn from '@root/components/buttons/Darkmode_Button';
import LanguageBtn from '@root/components/buttons/Language_Button';
import Link from 'next/link';
import { Briefcase, PenTool, User, Code, IconProps, ArrowLeft } from 'react-feather';

export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}) {
  return (
    <>
      <div className='flex flex-row'>
        <nav className='min-w-[15rem] max-h-screen h-screen overflow-scroll shadow-xl p-4 bg-white'>
          <NavSection Icon={Briefcase}>Portfolio</NavSection>
          <ul>
            <NavLink href='dashboard'>Todos</NavLink>
            <NavLink href='dashboard'>Registrar</NavLink>
          </ul>
          <NavSection Icon={PenTool}>Articulos</NavSection>
          <ul>
            <NavLink href='dashboard/articles'>Todos</NavLink>
            <NavLink href='dashboard/articles/add'>Crear</NavLink>
            <NavLink href='dashboard/articles/tags'>Etiquetas</NavLink>
          </ul>
          <NavSection Icon={User}>Usuarios</NavSection>
          <ul>
            <NavLink href='dashboard'>Todos</NavLink>
            <NavLink href='dashboard'>Permisos</NavLink>
            <NavLink href='dashboard'>Registrar</NavLink>
          </ul>
          <NavSection Icon={Code}>Habilidades</NavSection>
          <ul>
            <NavLink href='dashboard/skills'>Todas</NavLink>
            <NavLink href='dashboard/skills/add'>Registrar</NavLink>
          </ul>
        </nav>
        <main className='w-full max-h-screen h-screen overflow-scroll items-center'>
          <div className='grid grid-cols-3'>
            <Link className='flex flex-row items-center p-4 gap-1' href='/'>
              <ArrowLeft></ArrowLeft>
              Inicio
            </Link>
            <h1 className='text-center p-4 text-xl'>Bienvenido, Ricardo!</h1>
            <div className='ml-auto px-4 flex flex-row items-center'>
              <LanguageBtn className="hidden sm:block" ></LanguageBtn>
              <Darkmode_btn></Darkmode_btn>
            </div>
          </div>
          {children}
        </main>
      </div>   
    </>
  )
}

function NavSection({
  children,
  Icon
}:{
  children:string,
  Icon: React.ElementType<IconProps>
}){
  
  return <>
    <div className='flex flex-row gap-2 mt-4 '>
      <Icon className='w-5 h-5'/>
      <h3 className='font-bold text-lg'>{children}</h3>
    </div>
  </>
}

function NavLink({
  children,
  href
}:{
  children:string,
  href:string
}){
  
  return <li className='flex flex-row gap-2'>
    <span className='w-5 h-5'></span>
    <Link href={href} className="w-full text-left px-2 py-1 border-l border-l-gray-200 hover:border-l-blue-500">
      {children}
    </Link>
  </li>
}

