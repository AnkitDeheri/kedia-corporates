'use client'

import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface HeroBannerProps {
  title: string
  description?: string
  backgroundImage: string
  overlay?: 'light' | 'medium' | 'dark'
  height?: 'small' | 'medium' | 'large' | 'full'
  titleSize?: 'small' | 'medium' | 'large' | 'xl'
  className?: string
  breadcrumbs?: BreadcrumbItem[]
}

const CustomHeroBanner: React.FC<HeroBannerProps> = ({
  title,
  description,
  backgroundImage,
  overlay = 'medium',
  height = 'large',
  titleSize = 'large',
  className = '',
  breadcrumbs = []
}) => {
  const getHeightClass = () => {
    switch (height) {
      case 'small':
        return 'h-[30vh] min-h-[300px] md:h-[35vh] md:min-h-[350px] lg:h-[40vh] lg:min-h-[400px]'
      case 'medium':
        return 'h-[50vh] min-h-[400px] md:h-[60vh] md:min-h-[450px] lg:h-[80vh] lg:min-h-[500px]'
      case 'large':
        return 'h-[60vh] min-h-[500px] md:h-[70vh] md:min-h-[550px] lg:h-[100vh] lg:min-h-[600px]'
      case 'full':
        return 'h-[80vh] md:h-[90vh] lg:h-screen'
      default:
        return 'h-[60vh] min-h-[500px] md:h-[70vh] md:min-h-[550px] lg:h-[80vh] lg:min-h-[600px]'
    }
  }

  const getOverlayClass = () => {
    switch (overlay) {
      case 'light':
        return 'bg-black/20'
      case 'medium':
        return 'bg-black/50'
      case 'dark':
        return 'bg-black/70'
      default:
        return 'bg-black/50'
    }
  }

  const getTitleSizeClass = () => {
    switch (titleSize) {
      case 'small':
        return 'text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl'
      case 'medium':
        return 'text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl'
      case 'large':
        return 'text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl'
      case 'xl':
        return 'text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl'
      default:
        return 'text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl'
    }
  }

  const renderWithLineBreaks = (text: string) => {
    return text.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ))
  }

  return (
    <section className={`relative ${getHeightClass()} overflow-hidden   ${className}`}>
      <div className='absolute inset-0 z-0'>
        <Image
          src={backgroundImage}
          alt={title}
          fill
          sizes='100vw'
          className='object-cover object-center'
          priority
          quality={90}
        />
      </div>

      <div className={`absolute inset-0 z-10 ${getOverlayClass()}`} />

      <div className='relative z-20 h-full flex flex-col justify-center'>
        <div className='container mx-auto px-4 sm:px-6 md:px-8 lg:px-48'>
          <div className='max-w-6xl lg:max-w-none'>
            {/* Title */}
            <h1
              className={`${getTitleSizeClass()} font-bold text-white mb-4 md:mb-6 leading-tight tracking-tight text-left`}
              style={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                fontWeight: '700'
              }}
            >
              {renderWithLineBreaks(title)}
            </h1>

            {/* Description */}
            {description && (
              <div className='max-w-4xl'>
                <p
                  className='text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed font-light text-left'
                  style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                >
                  {renderWithLineBreaks(description)}
                </p>
              </div>
            )}

            {/* Breadcrumbs - Show at bottom on mobile */}
            {breadcrumbs.length > 0 && (
              <nav className='mt-4 md:mt-10 lg:mt-7' aria-label='Breadcrumb'>
                <ol className='flex flex-wrap items-center space-x-1 sm:space-x-2 text-xs sm:text-sm md:text-base '>
                  {breadcrumbs.map((item, index) => (
                    <li key={index} className='flex items-center'>
                      {index > 0 && (
                        <svg
                          className='w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mx-2 text-white/60'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                        </svg>
                      )}
                      {item.href && index < breadcrumbs.length - 1 ? (
                        <Link
                          href={item.href}
                          className='text-white/80 hover:text-white transition-colors duration-200 font-medium truncate'
                          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span
                          className={`font-medium truncate ${index === breadcrumbs.length - 1 ? 'text-white' : 'text-white/80'}`}
                          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                          aria-current={index === breadcrumbs.length - 1 ? 'page' : undefined}
                        >
                          {item.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomHeroBanner
