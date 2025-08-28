'use client'
import CustomHeroBanner from '@/components/custom/herobanner/CustomHeroBanner'
import ContactForm from '@/views/Contact/components/contactPage'

const ComponentName = () => {
  return (
    <>
      <CustomHeroBanner
        title={'CONTACT US'}
        backgroundImage={'/images/banner/kedia-corporates-contact.webp'}
        overlay='dark'
        height='medium'
        titleSize='small'
        className='mb-8'
      />
      <ContactForm />
    </>
  )
}

export default ComponentName
