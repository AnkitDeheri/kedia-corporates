// next
import type { ReactNode } from 'react'

import NextLink from 'next/link'

// @mui
import { Box, Link } from '@mui/material'

// ----------------------------------------------------------------------

interface LinkProps {
  href?: string
  icon?: ReactNode
  name?: string
}

interface BreadcrumbsLinkProps {
  link: LinkProps
  activeLast?: boolean
  disabled?: boolean
}

export default function BreadcrumbsLink({ link, activeLast = false, disabled = false }: BreadcrumbsLinkProps) {
  const { name, href, icon } = link

  const styles = {
    display: 'inline-flex',
    alignItems: 'center',
    color: 'text.primary',
    ...(disabled &&
      !activeLast && {
        cursor: 'default',
        pointerEvents: 'none',
        color: 'text.disabled'
      })
  }

  const renderContent = (
    <>
      {icon && (
        <Box
          component='span'
          sx={{
            mr: 1,
            display: 'inherit',
            '& svg': { width: 20, height: 20 }
          }}
        >
          {icon}
        </Box>
      )}
      {name}
    </>
  )

  if (href) {
    return (
      <Link component={NextLink} href={href} sx={styles}>
        {renderContent}
      </Link>
    )
  }

  return <Box sx={styles}> {renderContent} </Box>
}
