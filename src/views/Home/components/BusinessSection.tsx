'use client'

import { useMemo, memo } from 'react'

import { motion } from 'framer-motion'

import CustomCard from '@/components/custom/cards/CustomCards'
import CustomButton from '@/components/custom/button/Button'

// Types
interface Business {
  id: string
  title: string
  image: string
  href: string
  alt?: string
}

interface BusinessesSectionProps {
  businesses?: Business[]
  showViewAllButton?: boolean
  maxItems?: number
}

// Constants
const DEFAULT_BUSINESSES: Business[] = [
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

const ANIMATION_CONFIG = {
  header: {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  subtitle: {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  },
  button: {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  }
} as const

const VIEWPORT_CONFIG = {
  once: true,
  margin: '-100px'
} as const

// Component
const BusinessesSection: React.FC<BusinessesSectionProps> = memo(
  ({ businesses = DEFAULT_BUSINESSES, showViewAllButton = true, maxItems }) => {
    // Memoize processed businesses data
    const processedBusinesses = useMemo(() => {
      const businessesToShow = maxItems ? businesses.slice(0, maxItems) : businesses

      // Ensure consistent line break formatting
      return businessesToShow.map(business => ({
        ...business,

        title: business.title.replace(/\\n/g, '\n')
      }))
    }, [businesses, maxItems])

    return (
      <section className='relative w-full py-16 bg-transparent' aria-labelledby='businesses-heading'>
        {/* Header */}
        <div className='max-w-7xl mx-auto mb-12 px-6 md:px-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
          <div>
            <motion.h2
              id='businesses-heading'
              className='text-3xl md:text-5xl font-bold text-brand-primary dark:text-gray-600'
              {...ANIMATION_CONFIG.header}
              viewport={VIEWPORT_CONFIG}
            >
              Businesses
            </motion.h2>
            <motion.p
              className='text-brand-primary font-semibold mt-2 dark:text-gray-600'
              {...ANIMATION_CONFIG.subtitle}
              viewport={VIEWPORT_CONFIG}
            >
              Our diverse portfolio
            </motion.p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 px-6 md:px-16'>
          {processedBusinesses.map(business => (
            <CustomCard key={business.id} title={business.title} image={business.image} href={business.href} />
          ))}
        </div>

        {/* View All Button */}
        {showViewAllButton && (
          <motion.div
            className='max-w-7xl mx-auto mt-12 px-6 md:px-16 text-center'
            {...ANIMATION_CONFIG.button}
            viewport={VIEWPORT_CONFIG}
          >
            <CustomButton textColor='black' href='/business' aria-label='View all business services'>
              View All Businesses
            </CustomButton>
          </motion.div>
        )}
      </section>
    )
  }
)

// Set display name for debugging
BusinessesSection.displayName = 'BusinessesSection'

export default BusinessesSection

// Export types for external use
export type { Business, BusinessesSectionProps }
