
import React from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material'
import { ISectionProps } from '~/shared/interfaces/section.interface'
import { HorizontalLines , SectionTitle } from '~/shared/ui'


const StyledHomeSection = styled.section`
  /* background-image: url(patternBG.png); */
  /* background-repeat: no-repeat;
  background-position: top left;
  background-size: cover; */
  padding-bottom: 120px;
  /* border-bottom-right-radius: 120px; */
  /* background-color: ${props => props.theme.palette.primary.main  } */
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
  color: ${props => props.theme.palette.primary.main  };
  font-size: 1.7rem;
  font-weight: 600;
`

const StyledLi = styled.li`
  margin: 10px;
`


const services = [
  "Заливка справочников",
"Синхронизация с программами заказчика",
"Доработка конфигурации",
"Техническая поддержка",
]

const ServicesSection = ({ id, theme }: ISectionProps) => {
  return (<StyledHomeSection id={id} theme={theme}>
      <Container sx={containerStyles}>
      
        <SectionTitle>Услуги</SectionTitle>
        <StyledUl theme={theme} >
          { services.map(service => <StyledLi>{service}</StyledLi>)}
        </StyledUl>
      </Container>
    </StyledHomeSection>)
}



export default ServicesSection
