'use client'

import { useMemo } from 'react'

import { motion } from 'framer-motion'

import CustomHeroBanner from '@/components/custom/herobanner/CustomHeroBanner'

import CustomCard from '@/components/custom/cards/CustomCards'

// Constants moved outside component
const HERO_CONFIG = {
  title: ' BUSINESSES',

  backgroundImage: '/images/banner/kedia-corporate-business.webp',
  overlay: 'medium' as const,
  height: 'medium' as const,
  titleSize: 'small' as const
}

const BUSINESSES_DATA = [
  {
    id: 'civil-infrastructure',
    title: 'Civil\nInfrastructure',
    image: '/images/card/kedvass-infrastructure.webp',
    href: '/business/civil-infrastructure',
    alt: 'Civil Infrastructure services'
  },
  {
    id: 'disinfectant-manufacture',
    title: 'Black Disinfectant\nManufacture',
    image: '/images/card/black-disinfectant-phenyl.webp',
    href: '/business/disinfectant',
    alt: 'Black disinfectant manufacturing'
  },
  {
    id: 'hygiene-products',
    title: 'Hygiene & Home\nCare Products',
    image: '/images/card/home-care-products-khp.webp',
    href: '/business/hygiene-products',
    alt: 'Hygiene and home care products'
  },
  {
    id: 'water-irrigation',
    title: 'RCC OHT &\nWater Irrigation',
    image: '/images/card/rcc-oht-&-water-irrigation.webp',
    href: '/business/water-irrigation',
    alt: 'RCC OHT and water irrigation systems'
  },
  {
    id: 'water-supply',
    title: 'Water Supply\n& Pipeline',
    image: '/images/card/aditi-borewells.webp',
    href: '/business/water-supply',
    alt: 'Water supply and pipeline services'
  },
  {
    id: 'consultancy',
    title: 'Numerology & Vastu\nConsultancy',
    image: '/images/card/fortune-with-kedvass-numerology.webp',
    href: '/business/consultancy',
    alt: 'Numerology and Vastu consultancy services'
  },
  {
    id: 'everyday-hygiene-products',
    title: 'EVERYDAY HYGIENE\nPRODUCTS',
    image: '/images/card/ehn-everyday-hygiene-products.webp',
    href: '/business/everyday-hygiene-products',
    alt: 'Numerology and Vastu consultancy services'
  }
]

const BusinessPage = () => {
  // Memoize businesses data to prevent unnecessary re-renders
  const businesses = useMemo(() => BUSINESSES_DATA, [])

  return (
    <>
      <CustomHeroBanner {...HERO_CONFIG} />

      <section className='relative w-full py-16 bg-transparent'>
        {/* Header Section */}
        <div className='max-w-7xl mx-auto mb-12 px-6 md:px-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
          <div>
            <motion.h2
              className='text-3xl md:text-5xl font-bold text-brand-primary dark:text-gray-600'
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              Businesses
            </motion.h2>
            <motion.p
              className='text-brand-primary font-semibold mt-2 dark:text-gray-600'
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Our diverse portfolio
            </motion.p>
          </div>
        </div>

        {/* Business Cards Grid */}
        <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 px-6 md:px-16'>
          {businesses.map(business => (
            <CustomCard key={business.id} title={business.title} image={business.image} href={business.href} />
          ))}
        </div>
      </section>
    </>
  )
}

export default BusinessPage
