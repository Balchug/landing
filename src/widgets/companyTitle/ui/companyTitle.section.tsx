import Logo from '~/images/clock_2.svg'
import React from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material'
import { ISectionProps } from '~/shared/interfaces/section.interface'

const StyledHomeSection = styled.section`
  background-image: url(patternBG.png);
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  padding-bottom: 120px;
  height: 800px;
  border-bottom-right-radius: 120px;
  background-color: ${props => props.theme.palette.primary.main};
`

const containerStyles = {
  height: '100%',
  display: 'grid',
  gridTemplateColumns: '3fr 2fr',
  justifyContent: 'space-evenly',
}
const CompanyTitle = styled.div`
  align-self: center;
  justify-self: center;
  font-weight: 800;
  font-style: normal;
  /* font-family: 'Bowlby One SC', sans-serif; */
  color: white;
  font-size: 60px;
  letter-spacing: 0em;
  text-transform: uppercase;
`

const LogoWrapper = styled.div`
  align-self: center;
  justify-self: center;
`

const Subtitle = styled.div`
  line-height: 10px;
  font-weight: 300;
  font-style: normal;
  /* font-family: 'Bowlby One SC', sans-serif; */
  color: white;
  font-size: 55px;
  letter-spacing: 0.4em;
  text-transform: lowercase;
`

const CompanyTitleSection = ({ id, theme }: ISectionProps) => {
  return (
    <StyledHomeSection id={id} theme={theme}>
      <Container sx={containerStyles}>
        <CompanyTitle>
          Балчуг-Тех
          <Subtitle>software</Subtitle>
        </CompanyTitle>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </Container>
    </StyledHomeSection>
  )
}

export default CompanyTitleSection
