// @mui
import type { ReactNode } from 'react'

import { Box, Link, Stack, Typography, Breadcrumbs } from '@mui/material'
import type { SxProps } from '@mui/system'

import LinkItem from './LinkItem'

// ----------------------------------------------------------------------

interface LinkProps {
  href?: string
  icon?: ReactNode
  name?: string
}

interface CustomBreadcrumbsProps {
  links: LinkProps[]
  action?: ReactNode
  heading?: string
  moreLink?: string[]
  activeLast?: boolean
  sx?: SxProps
  [key: string]: any
}

export default function CustomBreadcrumbs({
  links,
  action,
  heading,
  moreLink,
  activeLast = false,
  sx,
  ...other
}: CustomBreadcrumbsProps) {
  const lastLink = links[links.length - 1]?.name

  return (
    <Box sx={{ mb: 5, ...sx }}>
      <Stack direction='row' alignItems='center'>
        <Box sx={{ flexGrow: 1 }}>
          {/* HEADING */}
          {heading && (
            <Typography variant='h4' gutterBottom>
              {heading}
            </Typography>
          )}

          {/* BREADCRUMBS */}
          {!!links.length && (
            <Breadcrumbs separator={<Separator />} {...other}>
              {links.map(link => (
                <LinkItem key={link.name || ''} link={link} activeLast={activeLast} disabled={link.name === lastLink} />
              ))}
            </Breadcrumbs>
          )}
        </Box>

        {action && <Box sx={{ flexShrink: 0 }}> {action} </Box>}
      </Stack>

      {/* MORE LINK */}
      {!!moreLink && (
        <Box sx={{ mt: 2 }}>
          {moreLink.map(href => (
            <Link
              noWrap
              key={href}
              href={href}
              variant='body2'
              target='_blank'
              rel='noopener'
              sx={{ display: 'table' }}
            >
              {href}
            </Link>
          ))}
        </Box>
      )}
    </Box>
  )
}

// ----------------------------------------------------------------------

function Separator() {
  return <Box component='span' sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'text.disabled' }} />
}
