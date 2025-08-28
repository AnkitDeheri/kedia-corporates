"use client"
import { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'



import { IconButton } from '@mui/material'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // Prevents hydration mismatch

  return (
    <IconButton
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      color="inherit"
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </IconButton>
  )
}

export default ThemeToggle
