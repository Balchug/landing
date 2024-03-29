import * as React from 'react'
import { AppBar, Toolbar, Container, CssBaseline } from '@mui/material'
import { ElevationScroll } from './model'
import Logo from './ui/logo'
import NavButtons from './ui/nav'

const containerStyles = {
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const Header = () => {
  return (
    <>
      <CssBaseline />
      <ElevationScroll>
        <AppBar>
          <Container>
            <Toolbar sx={containerStyles}>
              <Logo />
              <NavButtons />
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  )
}

export default Header
