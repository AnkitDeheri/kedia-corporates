'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'

import CustomButton from '@/components/custom/button/Button'

export default function HeroImage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className='relative w-full h-screen'>
      {/* Background Image */}
      <Image src='/images/banner/kedia-corporates-home.webp' alt='Hero Banner' fill className='object-cover' />

      {/* Overlay content */}
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-brand-white bg-black/40'>
        {/* Titles */}
        <motion.h1
          variants={fadeUp}
          className='text-3xl md:text-5xl font-bold mb-2'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }} // 👈 animate every time
        >
          Trusted by Governments.
        </motion.h1>

        <motion.h1
          variants={fadeUp}
          className='text-3xl md:text-5xl font-bold mb-2'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }} // 👈 animate every time
        >
          Preferred by People.
        </motion.h1>

        {/* Animated Button with hover icon */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          viewport={{ once: true }}
        >
          <CustomButton>Want to know more?</CustomButton>
        </motion.div> */}
        <motion.div
          variants={fadeUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <CustomButton>Want to know more ?</CustomButton>
        </motion.div>
      </div>
    </div>
  )
}
