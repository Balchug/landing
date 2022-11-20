
import React from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material'
import { ISectionProps } from '~/shared/interfaces/section.interface'



const StyledHomeSection = styled.section`
  height: 80vh;
  background-image: url(patternBG.png);
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
  border-bottom-right-radius: 250;
  padding-top: 150px;
  padding-bottom: 150px;
  background-color: ${props => props.theme.palette.primary.main  }
`

const containerStyles = {
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
}


const HomeSection = ({ id, theme }: ISectionProps) =>(
  <StyledHomeSection id={id} theme={theme}>
      <Container sx={containerStyles}>
        <div>
          
        </div>
        <div>
          картинка
        </div>
      </Container>
    </StyledHomeSection>
    )



export default HomeSection