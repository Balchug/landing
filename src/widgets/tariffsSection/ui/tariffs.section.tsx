
import React from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material'
import { ISectionProps } from '~/shared/interfaces/section.interface'
import { HorizontalLines , SectionTitle } from '~/shared/ui'
import TariffCard from './tariffCard'

const StyledHomeSection = styled.section`
  /* background-image: url(patternBG.png); */
  /* background-repeat: no-repeat;
  background-position: top left;
  background-size: cover; */
  padding-bottom: 120px;
  /* border-bottom-right-radius: 120px; */
  background-color: ${props => props.theme.palette.primary.main  }
`

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  height: '100%',
  paddingTop: '30px',
  
}

const tariffs = [
  {
  title: 'БАЛЧУГ: Торговый портал (до 5 пользователей)', 
  content: [
      '70000руб. за 6 месяцев',
      '120000руб. за 12 месяцев', 
      ]},
  {
    title: 'БАЛЧУГ: Торговый портал (от 5 пользователей)', 
    content: [
      '70000руб. +1000руб. (за каждого дополнительного пользователя) за 6 месяцев',
      '120000руб. +1000руб. (за каждого дополнительного пользователя) за 12 месяцев',
    ]              
  }

]

const CardsWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: row;
  justify-content:  center;
  gap: 40px;
`

const TariffsSection = ({ id, theme }: ISectionProps) => {
  return (<StyledHomeSection id={id} theme={theme}>
      <Container sx={containerStyles}>
      
        <SectionTitle color="white">Тарифы</SectionTitle>
        <CardsWrapper>
          { tariffs.map(tariff => (
            <TariffCard title={tariff.title} content={tariff.content} />
          ))}
        </CardsWrapper>
      </Container>
    </StyledHomeSection>)
}



export default TariffsSection
