import { Roboto } from '@next/font/google';
import AppProvider from '@root/contexts/AppContext';
import './globals.css'

const roboto = Roboto({
  weight: ['400','500','700','900'], 
  subsets: ['latin'],
  display: 'swap'
})

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

export default function RootLayout({
  children,
  params
}:{
  children: React.ReactNode,
  params: {
    lang: string
  }
}) {
  return (
    <html lang={params.lang} className={roboto.className}>
      <head />
      <body>
        <AppProvider locale={params.lang}>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}