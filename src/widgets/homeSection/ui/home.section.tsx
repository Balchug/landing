
import React from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material'
import { ISectionProps } from '~/shared/interfaces/section.interface'
import { HorizontalLines} from '~/shared/ui'


const StyledHomeSection = styled.section`
  min-height: 70vh;
  background-image: url(patternBG.png);
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
  border-bottom-right-radius: 250;
  background-color: ${props => props.theme.palette.primary.main  }
`

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  height: '100%',
}

const DescriptionSection = styled.div`
  align-self: end;
  max-width: 43%;
  color: #939598;
  font-size: 1.3rem;
  font-weight: 800;
  text-align: right;
`

const FeatureList = styled.div`
  align-self: start;
  max-width: 100%;
  color: white;
  font-size: 1.7rem;
  font-weight: 600;
`


const HomeSection = ({ id, theme }: ISectionProps) =>(
  <StyledHomeSection id={id} theme={theme}>
      <Container sx={containerStyles}>
        <HorizontalLines color='white'/>
        <DescriptionSection>
          БАЛЧУГ: Торговый портал - это современный инструмент 
          для повышения эффективности управления процессами торгового предприятия.
        </DescriptionSection>
        <FeatureList>
          <ul>
            <li>Планирование</li>
            <li>Листинг</li>
            <li>Маркетинг</li>
            <li>Ценообразование</li>
            <li>Управленческие отчеты</li>
          </ul>
        </FeatureList>
      </Container>
    </StyledHomeSection>
    )



export default HomeSection
