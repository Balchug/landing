import * as React from "react"
import { AppBar, Toolbar, Typography, Container, CssBaseline }from '@mui/material'
import { ElevationScroll, Props} from './model'


const Header = (props: Props) => {
  return <>
  <CssBaseline />
  <ElevationScroll {...props}>
    <AppBar>
      <Container>
        Тitle
      </Container>
    </AppBar>
  </ElevationScroll>
  <Toolbar />
</>
} 

export default Header