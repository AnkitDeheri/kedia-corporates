'use client'

import React, { useState, useCallback, useMemo } from 'react'

import Image from 'next/image'

import Slider from 'react-slick'

import { motion, AnimatePresence } from 'framer-motion'

// Types
interface Slide {
  id: number
  image: string
  title: string
  description: string
}

interface HeroSliderProps {
  slides?: Slide[]
  className?: string
}

// Default slides configuration
const DEFAULT_SLIDES: Slide[] = [
  {
    id: 1,
    image: '/images/banner/natraj-chemical-industries.webp',
    title: 'NATRAJ CHEMICAL INDUSTRIES',
    description: 'We deliver innovative solutions for corporate excellence.'
  },
  {
    id: 2,
    image: '/images/banner/kedvass-infra.webp',
    title: 'KEDVASS INFRA',
    description: 'Focused on long-term impact with responsible practices.'
  },
  {
    id: 3,
    image: '/images/banner/aditi-borewells.webp',
    title: 'ADITI BOREWELLS',
    description: 'Connecting opportunities across borders with trust.'
  },
  {
    id: 4,
    image: '/images/banner/kedvass-enterpreneur.webp',
    title: 'KEDVASS \n ENTREPRENEUR',
    description: 'Connecting opportunities across borders with trust.'
  },
  {
    id: 5,
    image: '/images/banner/ehn-everyday-hygienic-need.webp',
    title: 'EVERYDAY HYGIENIC NEED',
    description: 'Connecting opportunities across borders with trust.'
  },
  {
    id: 6,
    image: '/images/banner/kedvass-hygiene-products-khp.webp',
    title: 'KEDVASS HYGIENE PROCUCTS',
    description: 'Connecting opportunities across borders with trust.'
  },
  {
    id: 6,
    image: '/images/banner/fortune-with-kedvass-numerology-vastu.webp',
    title: 'FORTUNE WITH KEDVASS',
    description: 'Connecting opportunities across borders with trust.'
  }
]

// Animation constants
const ANIMATION_DURATION = 0.6
const SLIDE_SPEED = 800
const AUTOPLAY_SPEED = 3000

// Animation variants for better performance
const slideVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slides = DEFAULT_SLIDES, className = '' }) => {
  const [activeSlide, setActiveSlide] = useState<number>(0)

  // Memoized slider settings for performance
  const sliderSettings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: SLIDE_SPEED,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: AUTOPLAY_SPEED,
      arrows: false,
      pauseOnHover: false,
      beforeChange: (_: number, next: number) => setActiveSlide(next)
    }),
    []
  )

  // Memoized animation transition
  const animationTransition = useMemo(
    () => ({
      duration: ANIMATION_DURATION,
      ease: 'easeOut' as const
    }),
    []
  )

  // Render mobile title with animation
  const renderMobileTitle = useCallback(
    (slide: Slide) => (
      <div className='md:hidden'>
        <h2 className='text-white text-3xl sm:text-4xl font-light leading-none mb-2'>KEDIA CORPORATES</h2>
        <div className='text-white text-3xl sm:text-4xl font-bold leading-none'>
          <AnimatePresence mode='wait'>
            <motion.span
              key={`mobile-${slide.title}`}
              variants={slideVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              transition={animationTransition}
              className='block text-center'
            >
              {slide.title.split('\n').map((line, i) => (
                <span key={i} className='block'>
                  {line}
                </span>
              ))}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    ),
    [animationTransition]
  )

  // Render desktop title with fixed positioning
  const renderDesktopTitle = useCallback(
    (slide: Slide) => (
      <div className='hidden md:block relative w-full h-20'>
        {/* KEDIA CORPORATES - fixed on the left */}
        <div className='absolute left-1/2 top-1/2 transform -translate-x-full -translate-y-1/2 pr-8'>
          <span className='text-white text-6xl font-extralight leading-none'>KEDIA CORPORATES</span>
        </div>

        {/* Separator - fixed in center */}
        <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <span className='text-white text-6xl font-light leading-none'>|</span>
        </div>

        {/* Animated title - fixed on the right */}
        <div className='absolute left-1/2 top-1/2 transform translate-x-0 -translate-y-1/2 pl-8'>
          <AnimatePresence mode='wait'>
            <motion.span
              key={`desktop-${slide.title}`}
              variants={slideVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              transition={animationTransition}
              className='text-white text-6xl font-bold leading-none whitespace-pre-line text-left inline-block'
            >
              {slide.title.split('\n').map((line, i) => (
                <span key={i} className='block'>
                  {line}
                </span>
              ))}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    ),
    [animationTransition]
  )

  // Error boundary for slides
  if (!slides?.length) {
    return (
      <div className='relative w-full h-screen bg-gray-900 flex items-center justify-center'>
        <p className='text-white'>No slides available</p>
      </div>
    )
  }

  return (
    <div className={`relative w-full h-screen ${className}`}>
      <Slider {...sliderSettings} className='h-full'>
        {slides.map((slide, index) => (
          <div key={`${slide.id}-${index}`} className='relative w-full h-screen'>
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0} // Priority loading for first slide
              sizes='100vw'
              className='object-cover'
              quality={85}
            />

            {/* Overlay */}
            <div className='absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6'>
              {activeSlide === index && (
                <div className='w-full max-w-[1400px] px-4'>
                  {renderMobileTitle(slide)}
                  {renderDesktopTitle(slide)}
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default HeroSlider
