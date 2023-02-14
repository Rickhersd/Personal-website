import LogotypeIcon from '@root/../public/logotype.svg'
import "@root/styles/dashboard.css"
import Dropdown, {DropdownLink, DropdownProvider} from './dropdown';

export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}) {
  return (
    <>
      <div className='dashboard'>
        <nav className='dashboard__nav'>
          <DropdownProvider>
            <LogotypeIcon className='dashboard__nav-logo'></LogotypeIcon>
            <hr></hr>
            <Dropdown label='Skills' className='p-2 w-full bg-slate-500 hover:bg-slate-600 text-left'>
              {['List', 'Create', 'Tags'].map((label, index) => (
                <DropdownLink key={index} className='w-full p-2 bg-gray-300 hover:bg-gray-500'>{label}</DropdownLink>
              ))}
            </Dropdown>
            <Dropdown label='Projects' className='p-2 w-full bg-slate-500 hover:bg-slate-600 text-left'>
              {['List', 'Create', 'Selected', 'Tags'].map((label, index) => (
                <DropdownLink key={index} className='w-full p-2 bg-gray-300 hover:bg-gray-500'>{label}</DropdownLink>
              ))}
            </Dropdown>
            <Dropdown label='Blog' className='p-2 w-full bg-slate-500 hover:bg-slate-600 text-left'>
              {['List', 'Create', 'Tags'].map((label, index) => (
                <DropdownLink key={index} className='w-full p-2 bg-gray-300 hover:bg-gray-500'>{label}</DropdownLink>
              ))}
            </Dropdown>
            <Dropdown label='Users' className='p-2 w-full bg-slate-500 hover:bg-slate-600 text-left'>
              {['List', 'Roles', 'Permises'].map((label, index) => (
                <DropdownLink key={index} className='w-full p-2 bg-gray-300  hover:bg-gray-500'>{label}</DropdownLink>
              ))}
            </Dropdown>
          </DropdownProvider>
          <div className='w-full h-64 bg-gray-300'></div>
        </nav>
      </div>
      <main className='dashboard__content'>
        <h1 className='dashboard__content-title'>Bienvenido, Ricardo!</h1>
        <hr></hr>
        {children}
      </main>   
    </>
  )
}

