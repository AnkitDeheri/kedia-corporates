// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

import { ThemeProvider } from 'next-themes'

// Type Imports
import type { ChildrenType } from '@core/types'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'
import ReduxProvider from '@/components/redux/ReduxProvider'

export const metadata = {
  title: 'Kedia Group',
  description: 'this is a description of the Kedia Group website'
}
export const dynamic = 'force-dynamic'

const RootLayout = ({ children }: ChildrenType) => {
  // Vars
  const direction = 'ltr'

  return (
    <html id='__next' lang='en' dir={direction}>
      <body className='flex is-full min-bs-full flex-auto flex-col bg-white text-black dark:bg-gray-900 dark:text-white'>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <ReduxProvider>{children}</ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
