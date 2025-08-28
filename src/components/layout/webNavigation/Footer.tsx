// src/components/layout/Footer.tsx
'use client'

import Link from 'next/link'

import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

type LinkItem = { name: string; href: string }

const PRODUCT: LinkItem[] = [
  { name: 'Civil Infrastructure', href: '/business/civil-infrastructure' },
  { name: 'Black Disinfectant Manufacturer', href: '/business/disinfectant' },
  { name: 'Hygiene & Home Care Products', href: '/business/hygiene-products' },
  { name: 'RCC OHT & Water Irrigation', href: '/business/water-irrigation' },
  { name: 'Water Supply & Pipeline', href: '/business/water-supply' },
  { name: 'Numerology & Vastu Consultancy', href: '/business/consultancy' },
  { name: 'Everyday Hygiene Products', href: '/business/everyday-hygiene-products' }
]

const RESOURCES: LinkItem[] = [
  { name: 'KEDVASS INFRA', href: '#' },
  { name: 'NATRAJ CHEMICAL INDUSTRIES', href: '#' },
  { name: 'KEDVASS HYGIENE PRODUCTS', href: '#' },
  { name: 'KEDVASS ENTREPRENEUR', href: '#' },
  { name: 'ADITI BOREWELLS', href: '#' },
  { name: 'FORTURE WITH KEDVASS', href: '#' },
  { name: 'EVERYDAY HYGIENIC NEED ', href: '#' }
]

const COMPANY: LinkItem[] = [
  { name: 'Story', href: '#' },
  { name: 'Business', href: '#' },
  { name: 'Responsibility', href: '#' },
  { name: 'Media', href: '#' },
  { name: 'Contact', href: '#' }
]

export default function Footer() {
  return (
    <footer className='bg-transparent border-t border-gray-200  dark:border-gray-600'>
      <div className='max-w-7xl mx-auto px-6 md:px-16 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-10'>
          {/* Brand + description */}
          <div className='md:col-span-4'>
            <div className='flex items-center gap-2'>
              <div className='h-8 w-8 rounded bg-[#130C2A] flex items-center justify-center text-white font-bold'>
                K
              </div>
              <span className='text-lg font-semibold text-gray-900  dark:text-gray-600'>Kedia Corporates</span>
            </div>
            <p className='mt-4 text-gray-600 text-base leading-relaxed'>
            Kedia Corporates is a diversified group of 7 companies, leading in infrastructure, chemicals, hygiene products, water supply, borewells, and consultancy; driving sustainable growth in every sector.
            </p>
            {/* Social icons */}
            <div className='flex items-center gap-4 mt-6'>
              <Link href='#' aria-label='Twitter' className='hover:text-gray-900'>
                <Twitter className='h-5 w-5 text-gray-600' />
              </Link>
              <Link href='#' aria-label='Instagram' className='hover:text-gray-900'>
                <Instagram className='h-5 w-5 text-gray-600' />
              </Link>
              <Link href='#' aria-label='LinkedIn' className='hover:text-gray-900'>
                <Linkedin className='h-5 w-5 text-gray-600' />
              </Link>
              <Link href='#' aria-label='Facebook' className='hover:text-gray-900'>
                <Facebook className='h-5 w-5 text-gray-600' />
              </Link>
            </div>
          </div>

          {/* Link columns */}
          <div className='md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8'>
            <div>
              <h4 className='text-lg font-semibold text-gray-900  dark:text-gray-600'>Services</h4>
              <ul className='mt-4 space-y-3 list-none'>
                {PRODUCT.map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className='text-gray-600 hover:text-gray-900 text-sm'>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className='text-lg font-semibold text-gray-900  dark:text-gray-600'>Companies</h4>
              <ul className='mt-4 space-y-3 list-none'>
                {RESOURCES.map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className='text-gray-600 hover:text-gray-900 text-sm'>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className='text-lg font-semibold text-gray-900  dark:text-gray-600'>About</h4>
              <ul className='mt-4 space-y-3 list-none'>
                {COMPANY.map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className='text-gray-600 hover:text-gray-900 text-sm'>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='mt-10 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4  dark:border-gray-600'>
          <p className='text-sm text-gray-500'>© 2025 Kedia Corporates. All rights reserved.</p>
          <div className='flex items-center gap-6 text-sm'>
            <Link href='#' className='text-gray-500 hover:text-gray-900'>
              Privacy Policy
            </Link>
            <Link href='#' className='text-gray-500 hover:text-gray-900'>
              Terms of Service
            </Link>
            <Link href='#' className='text-gray-500 hover:text-gray-900'>
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
