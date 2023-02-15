'use client'

import InternalNavProvider from '@root/contexts/InternalNavContext'
import { ThemeProvider } from 'next-themes'

import En_Lang from "@root/compiled-locales/en.json";
import Es_Lang from "@root/compiled-locales/es.json";
import { IntlProvider, MessageFormatElement } from 'react-intl';


export default function AppProvider({
  children,
  locale
}:{
  children: React.ReactNode,
  locale:string
}) {

  const [shortLocale] = locale ? locale.split("-") : ["en"];

  const messages = ():Record<string, string> | Record<string, MessageFormatElement[]> | undefined => {
    switch (shortLocale) {
      case "en":
        return En_Lang;
      case "es":
        return Es_Lang;
      default:
        return Es_Lang;
    }
  }

  return (
    <IntlProvider locale={shortLocale} messages={messages()} onError={() => null}>
      <ThemeProvider>
        <InternalNavProvider pathroot={'dashboard/skills'}>
          {children}
        </InternalNavProvider>
      </ThemeProvider>
    </IntlProvider>
  )
}
