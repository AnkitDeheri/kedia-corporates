'use client'

import { motion } from 'framer-motion'

import CustomCard from '@/components/custom/cards/CustomCards'
import CustomButton from '@/components/custom/button/Button'

const mediaData = [
  {
    title:
      'Natraj Chemical Industries leads the way with its unbeatable black disinfectants, setting new standards in hygiene',
    image: 'https://picsum.photos/id/1015/600/400',
    href: '/media/build-better-todays'
  },
  {
    title:
      'EHN’s award-winning hygiene products continue to redefine safety and cleanliness across homes and workplaces.',
    image: 'https://picsum.photos/id/1021/600/400',
    href: '/media/greenfield-investor'
  },
  {
    title:
      'Fortune with Kedvass brings life-changing numerology and Vastu insights, guiding you towards a brighter future.',
    image: 'https://picsum.photos/id/1033/600/400',
    href: '/media/fashion-vs-planet'
  }
]

export default function MediaSection() {
  return (
    <section className='py-12 bg-transparent'>
      {/* Header */}
      <div className='max-w-7xl mx-auto mb-12 px-6 md:px-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
        <div>
          <motion.h2
            className='text-3xl md:text-5xl font-bold text-brand-primary  dark:text-gray-600'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Media
          </motion.h2>
          <motion.p
            className='text-brand-primary font-semibold mt-2  dark:text-gray-600'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            In the Spotlight of the Progress
          </motion.p>
        </div>
        {/* <div className='max-w-2xl text-brand-primary'>
          <p>
            Stay connected with Aditya Birla Group’s presence through our press releases, media reports, stories,
            events, and files. Discover the pulse of Aditya Birla Group with real-time press releases, media reports,
            exclusive stories, podcasts, events, and downloadable resources at your fingertips.
          </p>
        </div> */}
      </div>

      {/* Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mt-12'>
        {mediaData.map((item, index) => (
          <CustomCard key={index} title={item.title} image={item.image} href={item.href} />
        ))}
      </div>
      <motion.div
        className='max-w-7xl mx-auto mt-12 px-6 md:px-16 text-center'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <CustomButton textColor='black' href='/media'>
          View All Media
        </CustomButton>
      </motion.div>
    </section>
  )
}
