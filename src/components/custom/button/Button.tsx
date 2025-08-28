'use client'
import Link from 'next/link'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CustomButton({
  children = 'Learn More',
  href,
  onClick,
  icon = <ArrowRight className='w-5 h-5' />,
  className = '',
  delay = 0.2,
  textColor = 'text-white',
  bgColor = 'bg-transparent',
  fontSize = 'text-base', // ✅ Dynamic font size
  fontWeight = 'font-medium' // ✅ new: font weight control
}: {
  children?: React.ReactNode
  href?: string
  onClick?: () => void
  icon?: React.ReactNode
  className?: string
  delay?: number
  textColor?: string
  bgColor?: string
  fontSize?: string
  fontWeight?: string // ✅ new: font weight control
}) {
  const baseClasses = `inline-flex items-center gap-2 px-0 py-2 rounded-full font-medium transition cursor-pointer ${bgColor} ${textColor} ${fontSize} ${fontWeight} group `

  // ✅ Variants for the icon
  const iconVariants = {
    initial: { x: 0 },
    hover: { x: 6 } // move right
  }

  const MotionLink = motion(Link)
  const MotionButton = motion.button

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
      viewport={{ once: true }}
    >
      {href ? (
        <MotionLink
          href={href}
          className={`${baseClasses} ${className} group`}
          whileHover='hover' // ✅ hover on whole button
          initial='initial'
        >
          {children}
          <motion.span
            className='inline-flex'
            variants={iconVariants}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {icon}
          </motion.span>
        </MotionLink>
      ) : (
        <MotionButton
          onClick={onClick}
          className={`${baseClasses} ${className} group`}
          whileHover='hover'
          initial='initial'
        >
          {children}
          <motion.span
            className='inline-flex'
            variants={iconVariants}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {icon}
          </motion.span>
        </MotionButton>
      )}
    </motion.div>
  )
}
