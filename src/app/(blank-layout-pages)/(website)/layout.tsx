import React from 'react'

import { Box } from '@mui/material'

import Navbar from '@/components/layout/webNavigation/Navbar'

import Footer from '@/components/layout/webNavigation/Footer'


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box display='flex' flexDirection='column' minHeight='100vh'>
      <Navbar />

      <Box component='main'>{children}</Box>

      <Footer />
    </Box>
  )
}

export default Layout
