import * as React from "react"
import GlobalStyle from '../app/globalStyles'
import type {  PageProps } from "gatsby"
import { createTheme, ThemeProvider } from '@mui/material/styles';

type LayoutProps = {
  children: React.ReactNode
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#1c1f2a'
    }
  }
})

const Layout = ({children}: LayoutProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        { children }
      </ThemeProvider>
    
    </>
  )
}

export default Layout