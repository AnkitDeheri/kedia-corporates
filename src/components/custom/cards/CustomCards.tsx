'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'

import CustomButton from '../button/Button'

// Define the props interface
interface CustomCardProps {
  title: string
  image: string
  href?: string
  width?: string // e.g. "w-[400px]" or "w-full"
  height?: string // e.g. "h-[380px]" or "h-[580px]"
}

export default function CustomCard({
  title,
  image,
  href,
  width = 'w-full',
  height = 'h-[320px] md:h-[420px]' // default heights
}: CustomCardProps) {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      className={`relative overflow-hidden group ${width} ${height}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className='object-cover transition-transform duration-500 group-hover:scale-110'
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex flex-col justify-end p-6 text-brand-white text-center'>
        <h3 className='text-xl md:text-2xl font-semibold py-5'>
          <motion.h3
            className='text-2xl md:text-2xl font-semibold py-5'
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {title.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </motion.h3>
        </h3>
        <CustomButton href={href} textColor='text-white' className='mt-0 '>
          Want to know more?
        </CustomButton>
      </div>
    </motion.div>
  )
}
