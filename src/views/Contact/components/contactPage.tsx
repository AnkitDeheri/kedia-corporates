'use client'

import React from 'react'

import { MapPin, Mail, Phone } from 'lucide-react'

// Types
interface ContactInfo {
  title: string
  address: string
  email: string
  phone: string
  phone2: string
}

interface SocialLink {
  name: string
  icon: string
  href: string
  ariaLabel: string
}

interface OfficeLocation {
  name: string
  address: string
  rating: number
  reviewCount: number
}

const ContactPage: React.FC = () => {
  // Data - in production, this would come from props or API
  const contactInfo: ContactInfo = {
    title: 'Corporate office',
    address: 'Agrasen Chowk, Korba, Chhattisgarh, India.',
    email: ' business@kediacorporates.com',
    phone: '+91-708-903-1212',
    phone2: '+91-877-019-2195'
  }

  const socialLinks: SocialLink[] = [
    {
      name: 'Twitter',
      icon: '𝕏',
      href: 'https://twitter.com/relianceindia',
      ariaLabel: 'Follow us on Twitter'
    },
    {
      name: 'LinkedIn',
      icon: 'in',
      href: 'https://linkedin.com/company/reliance-industries',
      ariaLabel: 'Connect with us on LinkedIn'
    },
    {
      name: 'Facebook',
      icon: 'f',
      href: 'https://linkedin.com/company/reliance-industries',
      ariaLabel: 'Connect with us on Facebook'
    },
    {
      name: 'Instagram',
      icon: '📸',
      href: 'https://linkedin.com/company/reliance-industries',
      ariaLabel: 'Connect with us on Instagram'
    }
  ]

  const officeLocation: OfficeLocation = {
    name: 'Chhattisgarh India',
    address: 'Agrasen Chowk, Korba, Chhattisgarh, India.',
    rating: 4.2,
    reviewCount: 109
  }

  const renderStars = (rating: number): React.ReactNode => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    const stars = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className='text-yellow-400' aria-hidden='true'>
          ★
        </span>
      )
    }

    if (hasHalfStar) {
      stars.push(
        <span key='half' className='text-yellow-400' aria-hidden='true'>
          ½
        </span>
      )
    }

    return stars
  }

  return (
    <main className='min-h-screen '>
      <div className='container mx-auto px-4 py-8 sm:py-12 lg:py-16 max-w-7xl'>
        {/* Header */}
        <header className='text-center mb-8 sm:mb-12 lg:mb-16'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-600 mb-4'>Get in touch</h1>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Connect with us through our corporate office or reach out via social media
          </p>
        </header>

        <div className='flex flex-col xl:flex-row gap-6 lg:gap-8'>
          {/* Left Column - Contact Information */}
          <div className='w-full xl:w-1/2 space-y-6'>
            {/* Corporate Office Info */}
            <section className=' rounded-xl shadow-xl p-6 lg:p-8 transition-shadow hover:shadow-xl'>
              <h2 className='text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3'>
                <MapPin className='w-6 h-6 text-blue-600' aria-hidden='true' />
                {contactInfo.title}
              </h2>

              <div className='space-y-4'>
                <div className='flex items-start gap-3'>
                  <MapPin className='w-5 h-5 text-gray-400 mt-1 flex-shrink-0' aria-hidden='true' />
                  <address className='text-gray-700 leading-relaxed not-italic'>{contactInfo.address}</address>
                </div>

                <div className='flex items-center gap-3'>
                  <Mail className='w-5 h-5 text-gray-400 flex-shrink-0' aria-hidden='true' />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className='text-blue-600 font-medium hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded'
                    aria-label={`Send email to ${contactInfo.email}`}
                  >
                    {contactInfo.email}
                  </a>
                </div>

                <div className='flex items-center gap-3'>
                  <Phone className='w-5 h-5 text-gray-400 flex-shrink-0' aria-hidden='true' />
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className='text-gray-700 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded'
                    aria-label={`Call us at ${contactInfo.phone}`}
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                <div className='flex items-center gap-3'>
                  <Phone className='w-5 h-5 text-gray-400 flex-shrink-0' aria-hidden='true' />
                  <a
                    href={`tel:${contactInfo.phone2}`}
                    className='text-gray-700 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded'
                    aria-label={`Call us at ${contactInfo.phone2}`}
                  >
                    {contactInfo.phone2}
                  </a>
                </div>
              </div>
            </section>

            {/* Social Media */}
            <section className=' rounded-xl shadow-xl p-6 lg:p-8 transition-shadow hover:shadow-xl'>
              <h2 className='text-xl sm:text-2xl font-bold text-gray-800 mb-6'>Socialize with us</h2>

              <div className='flex flex-wrap gap-4'>
                {socialLinks.map(social => (
                  <a
                    key={social.name}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='shadow-2xl  rounded-lg p-4 text-center min-w-[80px] transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group'
                    aria-label={social.ariaLabel}
                  >
                    <span className='font-bold text-gray-800 text-lg block mb-2 group-hover:text-blue-600 transition-colors'>
                      {social.icon}
                    </span>
                    <p className='text-xs text-gray-600 font-medium'>{social.name}</p>
                  </a>
                ))}
              </div>
            </section>

            {/* Office Location Details */}
            <section className=' rounded-xl shadow-xl p-6 lg:p-8 transition-shadow hover:shadow-xl'>
              <h3 className='text-xl font-bold text-gray-800 mb-4'>{officeLocation.name}</h3>

              <address className='text-gray-700 mb-4 leading-relaxed not-italic'>{officeLocation.address}</address>

              <div className='flex items-center text-sm text-gray-600 mb-6'>
                <div
                  className='flex items-center mr-3'
                  role='img'
                  aria-label={`Rating: ${officeLocation.rating} out of 5 stars`}
                >
                  {renderStars(officeLocation.rating)}
                </div>
                <span>
                  {officeLocation.rating} ({officeLocation.reviewCount} reviews)
                </span>
              </div>

              {/* Map Placeholder */}
              <div className=' rounded-lg h-48 sm:h-56 flex items-center justify-center  '>
                <div className='text-center text-gray-500'>
                  <MapPin className='w-8 h-8 mx-auto mb-2' aria-hidden='true' />
                  <span className='text-sm'>Interactive Map</span>
                  <p className='text-xs mt-1'>Map integration coming soon</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Hero Image */}
          <aside className='w-full xl:w-1/2'>
            <div className='relative h-64 sm:h-80 lg:h-96 xl:h-full xl:min-h-[600px] rounded-xl overflow-hidden shadow-lg group'>
              <img
                src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                alt='Modern corporate office building with glass facade - Chhattisgarh India Corporate Office in Mumbai, India'
                className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                loading='eager'
              />

              {/* Image Overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />

              {/* Text Overlay */}
              <div className='absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white'>
                <h3 className='font-bold text-lg sm:text-xl lg:text-2xl mb-2 leading-tight'>KEDIA CORPORATES</h3>
                <p className='text-sm sm:text-base opacity-90 flex items-center gap-2'>
                  <MapPin className='w-4 h-4 flex-shrink-0' aria-hidden='true' />
                  Chhattisgarh, India
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default ContactPage
