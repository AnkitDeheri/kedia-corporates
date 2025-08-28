'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'

import CustomButton from '@/components/custom/button/Button'

export default function LegacySection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className='relative w-full py-10 bg-transparent'>
      {/* Section Heading */}
      <div className='max-w-7xl mx-auto mb-12 px-6 md:px-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
        <div>
          <motion.h2
            className='text-3xl md:text-5xl font-bold text-brand-primary  dark:text-gray-600'
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Legacy & Leadership
          </motion.h2>
          <motion.p
            className='text-brand-primary mt-2 font-semibold  dark:text-gray-600'
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Our force of success
          </motion.p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className='grid md:grid-cols-2 w-full '>
        {/* Card 1 */}
        <div className='relative h-[500px] overflow-hidden shadow-lg group '>
          <Image
            src='/images/card/natraj_chemical_industries_factory.webp'
            alt='Card One'
            fill
            className='object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110'
          />
          <div className='absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-500 flex flex-col justify-end p-6 text-brand-white'>
            <motion.h3
              className='text-2xl font-semibold mb-2'
              variants={fadeUp}
              initial='hidden'
              whileInView='visible'
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              Establishing a foundation of trust
            </motion.h3>

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

        {/* Card 2 */}
        <div className='relative h-[500px] overflow-hidden shadow-lg group '>
          <Image
            src='/images/card/kedia_corporates_vision.webp'
            alt='Card Two'
            fill
            className='object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110'
          />
          <div className='absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-500 flex flex-col justify-end p-6 text-brand-white'>
            <motion.h3
              className='text-2xl font-semibold mb-2'
              variants={fadeUp}
              initial='hidden'
              whileInView='visible'
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              A vision to lead with responsibility
            </motion.h3>

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
      </div>
    </section>
  )
}
