import React from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material'
import { ISectionProps } from '~/shared/interfaces/section.interface'
import { SectionTitle } from '~/shared/ui'
import TariffCard from './tariffCard'
import { title } from 'process'

const StyledHomeSection = styled.section`
  /* background-image: url(patternBG.png); */
  /* background-repeat: no-repeat;
  background-position: top left;
  background-size: cover; */
  padding-bottom: 120px;
  /* border-bottom-right-radius: 120px; */
  background-color: ${props => props.theme.palette.primary.main};
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
    content: ['200 000 руб. в месяц', '2 400 000 руб. за 12 месяцев'],
  },
  {
    title: 'БАЛЧУГ: Торговый портал (от 5 пользователей)',
    content: [
      '200 000 руб. + 10 000 руб. (за каждого дополнительного пользователя) в месяц',
      '1 400 000 руб. + 10 000 руб. (за каждого дополнительного пользователя) за 12 месяцев',
    ],
  },
]

const CardsWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
`

const TariffsSection = ({ id, theme }: ISectionProps) => {
  return (
    <StyledHomeSection id={id} theme={theme}>
      <Container sx={containerStyles}>
        <SectionTitle color="white">Тарифы</SectionTitle>
        <CardsWrapper>
          {tariffs.map((tariff) => (
            <TariffCard
              title={tariff.title}
              content={tariff.content}
              key={tariff.title}
            />
          ))}
        </CardsWrapper>
      </Container>
    </StyledHomeSection>
  )
}

export default TariffsSection
