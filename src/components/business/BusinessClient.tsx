'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'

import CustomHeroBanner from '@/components/custom/herobanner/CustomHeroBanner'
import CustomStories from '@/components/custom/customstories/CustomStories'

// Story interface
interface Story {
  id: number
  number: string
  title: string
  description?: string
  image: string
  link?: string
  linkText?: string
}

// Business interface
interface Business {
  id: number
  title: string
  slug: string
  category: string
  description: string
  shortDescription: string
  image: string
  heroImage: string
  services: string[]
  keyFeatures: string[]
  contact: {
    phone: string
    email: string
    address: string
  }
  established: string
  employees: string
  projectsCompleted?: string
  clientsServed?: string
  productRange?: string
  certifications: string[]
  workingHours: string
  website: string
  socialMedia: {
    facebook?: string
    linkedin?: string
    instagram?: string
    twitter?: string
    youtube?: string
  }
  gallery: string[]
  stories: Story[]
}

export default function BusinessClient({ slug }: { slug: string }) {
  const [business, setBusiness] = useState<Business | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (slug) {
      fetchBusiness(slug)
    }
  }, [slug])

  const fetchBusiness = async (businessSlug: string) => {
    try {
      const response = await fetch('/data/business.json')

      if (!response.ok) {
        throw new Error('Failed to fetch business data')
      }

      const businesses: Business[] = await response.json()
      const foundBusiness = businesses.find(b => b.slug === businessSlug)

      if (!foundBusiness) {
        setError('Business not found')
      } else {
        setBusiness(foundBusiness)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto'></div>
          <p className='mt-4 text-lg'>Loading business details...</p>
        </div>
      </div>
    )
  }

  if (error || !business) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-red-600 mb-4'>Error</h1>
          <p className='text-lg mb-6'>{error || 'Business not found'}</p>
          <Link
            href='/businesses'
            className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'
          >
            ← Back to Businesses
          </Link>
        </div>
      </div>
    )
  }

  // Breadcrumbs
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Businesses', href: '/business' },
    { label: business.title }
  ]

  return (
    <div className='min-h-screen'>
      {/* Hero Banner */}
      <CustomHeroBanner
        title={business.title}
        backgroundImage={business.heroImage}
        overlay='dark'
        height='large'
        titleSize='large'
        breadcrumbs={breadcrumbs}
        className='mb-8'
      />

      <div className='max-w-7xl mx-auto px-6 lg:px-8 py-12 '>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
          {/* Main Content */}
          <div className='lg:col-span-2'>
            <section className='mb-12'>
              <h2 className='text-3xl font-bold mb-6 text-gray-800'>About {business.title}</h2>
              <p className='text-lg text-gray-600 leading-relaxed mb-6'>{business.description}</p>
            </section>
          </div>

          {/* Sidebar */}
          <div className='lg:col-span-1'>
            <div className=' rounded-lg shadow-xl p-6 mb-8 sticky top-6 '>
              <h3 className='text-2xl font-bold mb-6 text-gray-800 '>Contact Information</h3>

              <div className='space-y-4'>
                <div className='flex items-start'>
                  <svg className='w-5 h-5 text-blue-600 mr-3 mt-1' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                  </svg>
                  <div>
                    <p className='font-medium text-gray-700'>Phone</p>
                    <p className='text-blue-600'>{business.contact.phone}</p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <svg className='w-5 h-5 text-blue-600 mr-3 mt-1' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                    <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                  </svg>
                  <div>
                    <p className='font-medium text-gray-700'>Email</p>
                    <p className='text-blue-600 break-all'>{business.contact.email}</p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <svg className='w-5 h-5 text-blue-600 mr-3 mt-1' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <div>
                    <p className='font-medium text-gray-700'>Address</p>
                    <p className='text-gray-600'>{business.contact.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CustomStories
          stories={business.stories}
          title='Our Stories'
          autoPlay={true}
          autoPlayInterval={6000}
          showDots={true}
          showNavigation={true}
        />

        <div className='mt-12 text-center'>
          <Link
            href='/business'
            className='inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors'
          >
            <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
            </svg>
            Back to All Businesses
          </Link>
        </div>
      </div>
    </div>
  )
}
