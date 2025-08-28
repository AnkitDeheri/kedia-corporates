import Image from 'next/image'

import { Box, Card, Grid, Stack } from '@mui/material'

import AuthLoginForm from './AuthLoginForm'

const LoginPage = () => (
  <Box sx={{ flexGrow: 1, height: '100vh', backgroundColor: '#f4f6f8' }}>
    <Grid container sx={{ height: '100%' }}>
      <Grid md={7} xs={0}>
        <Box
          sx={{
            height: '100%',
            display: { md: 'flex', xs: 'none' },
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Stack gap={2} textAlign='center'>
            <Image
              src={'/images/illustrations/auth/v2-login-light.png'}
              alt='Welcome Image'
              width={500}
              height={500}
              style={{ width: '100%', height: 'auto' }}
            />
          </Stack>
        </Box>
      </Grid>

      {/* Right side with Login Form */}
      <Grid md={5} xs={12}>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px;', borderRadius: 3 }}>
            <AuthLoginForm />
          </Card>
        </Box>
      </Grid>
    </Grid>
  </Box>
)

export default LoginPage
