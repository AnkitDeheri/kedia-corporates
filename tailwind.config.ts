import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // Required for next-themes
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false // If you intentionally disabled preflight
  },
  important: '#__next',
  plugins: [require('tailwindcss-logical'), require('./src/@core/tailwind/plugin')],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#000000',
          secondary: '#FF9900',
          accent: '#00CC66',
          white: '#F4F4F4'
        }
      }
    }
  }
}

export default config
