'use client'

import { motion } from 'framer-motion'

import CustomCard from '@/components/custom/cards/CustomCards'

const Media = () => {
  const featuredStories = [
    {
      publication: 'FORBES',
      title:
        'Unbeatable black disinfectants trusted everywhere',
      image: 'https://picsum.photos/seed/forbes/600/400',
      href: '#'
    },
    {
      publication: 'TECH REPUBLIC',
      title:
        'Award-winning hygiene products for every home.',
      image: 'https://picsum.photos/seed/techrepublic/600/400',
      href: '#'
    },
    {
      publication: 'SMSTR',
      title:
        'Award-winning hygiene products for every home.',
      description: 'Building an Enduring Company, One Hard Lesson at a Time with Webflow',
      image: 'https://picsum.photos/seed/smstr/600/400',
      href: '#'
    }
  ]

  return (
    <section className='py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <motion.h2
          className='text-3xl font-bold text-center text-gray-600 mb-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured stories
        </motion.h2>

        {/* Stories Grid using CustomCard */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {featuredStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CustomCard title={story.title} image={story.image} href={story.href} width='w-full' height='h-80' />
              <div className='mt-4 text-center'>
                <span className='inline-block text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                  {story.publication}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Media
