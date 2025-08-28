'use client'

import React, { useState, useEffect } from 'react'

import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

interface Story {
  id: number
  number: string
  title: string
  description?: string
  image: string
  link?: string
  linkText?: string
}

interface CustomStoriesProps {
  stories: Story[]
  title?: string
  autoPlay?: boolean
  autoPlayInterval?: number
  showDots?: boolean
  showNavigation?: boolean
  className?: string
}

const CustomStories: React.FC<CustomStoriesProps> = ({
  stories,
  title = 'Stories',
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = true,
  showNavigation = true,
  className = ''
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay)

  // Auto play functionality
  useEffect(() => {
    if (!isAutoPlaying || stories.length <= 1) return

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % stories.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [isAutoPlaying, stories.length, autoPlayInterval])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide(prev => (prev - 1 + stories.length) % stories.length)
  }

  const goToNext = () => {
    setCurrentSlide(prev => (prev + 1) % stories.length)
  }

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(autoPlay)
  }

  if (!stories || stories.length === 0) {
    return (
      <div className='text-center py-12'>
        <p className='text-gray-500'>No stories available</p>
      </div>
    )
  }

  const currentStory = stories[currentSlide]

  return (
    <section className={`shadow-xl py-16 ${className}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Title */}
        <div className='mb-12 text-center'>
          <h2 className='text-4xl font-bold text-gray-800 mb-4'>{title}</h2>
        </div>

        {/* Stories Container */}
        <div className='relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left Side - Story Content */}
            <div className='relative z-10'>
              {/* Story Number */}
              <div className='mb-8'>
                <span className='text-8xl font-bold  text-gray-800 leading-none tracking-tighter'>
                  {currentStory.number}
                </span>
              </div>

              {/* Story Title */}
              <h3 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight tracking-tight'>
                {currentStory.title}
              </h3>

              {/* Story Description */}
              {currentStory.description && (
                <p className='text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl'>{currentStory.description}</p>
              )}

              {/* Read More Link */}
              {currentStory.link && (
                <a
                  href={currentStory.link}
                  className='inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors group text-lg'
                >
                  {currentStory.linkText || 'Click to Read More'}
                  <ExternalLink className='ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </a>
              )}

              {/* Navigation Arrows */}
              {showNavigation && stories.length > 1 && (
                <div className='flex space-x-4 mt-12'>
                  <button
                    onClick={goToPrevious}
                    className='w-12 h-12 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md'
                    aria-label='Previous story'
                  >
                    <ChevronLeft className='w-6 h-6' />
                  </button>
                  <button
                    onClick={goToNext}
                    className='w-12 h-12 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md'
                    aria-label='Next story'
                  >
                    <ChevronRight className='w-6 h-6' />
                  </button>
                </div>
              )}
            </div>

            {/* Right Side - Story Image */}
            <div className='relative'>
              <div className='aspect-[4/3] rounded-lg overflow-hidden shadow-xl'>
                <img
                  src={currentStory.image}
                  alt={currentStory.title}
                  className='w-full h-full object-cover transition-transform duration-700'
                />
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          {showDots && stories.length > 1 && (
            <div className='flex justify-center mt-16 space-x-3'>
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-blue-600 scale-110' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to story ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default CustomStories
