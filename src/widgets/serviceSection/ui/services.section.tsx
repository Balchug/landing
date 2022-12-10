import React from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material'
import { ISectionProps } from '~/shared/interfaces/section.interface'
import { SectionTitle } from '~/shared/ui'

const StyledHomeSection = styled.section`
  /* background-image: url(patternBG.png); */
  /* background-repeat: no-repeat;
  background-position: top left;
  background-size: cover; */
  padding-bottom: 40px;
  /* border-bottom-right-radius: 120px; */
  /* background-color: ${props => props.theme.palette.primary.main} */
`

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  height: '100%',
  paddingTop: '30px',
}
const StyledUl = styled.ul`
  padding: 10px;
  color: ${props => props.theme.palette.primary.main};
  font-size: 1.7rem;
  font-weight: 600;
  background-image: url(logoLarge.jpg);
  background-repeat: no-repeat;
  background-size: 13%;
  background-position: right 15% bottom 50%;
`

const StyledLi = styled.li`
  margin: 12px;
`

const services = [
  'Заливка справочников',
  'Синхронизация с программами заказчика',
  'Доработка конфигурации',
  'Техническая поддержка',
]

const ServicesSection = ({ id, theme }: ISectionProps) => {
  return (
    <StyledHomeSection id={id} theme={theme}>
      <Container sx={containerStyles}>
        <SectionTitle>Услуги</SectionTitle>
        <StyledUl theme={theme}>
          {services.map((service, idx) => (
            <StyledLi key={idx}>{service}</StyledLi>
          ))}
        </StyledUl>
      </Container>
    </StyledHomeSection>
  )
}

export default ServicesSection
