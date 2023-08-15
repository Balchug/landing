import React from 'react'
import styled from 'styled-components'

import { Container } from '@mui/material'
import { ISectionProps } from '~/shared/interfaces/section.interface'
import { SectionTitle } from '~/shared/ui'

const StyledSection = styled.section`
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
  fontSize: '1.3rem',
}

const StyledP = styled.div`
  text-align: justify;
  margin-bottom: 10px;
  text-indent: 20px;
  width: 100%;
`

const AboutSection = ({ id, theme }: ISectionProps) => {
  return (
    <StyledSection id={id} theme={theme}>
      <Container sx={containerStyles}>
        <SectionTitle>О нас</SectionTitle>
        <StyledP>
          Мы - компания, специализирующаяся на разработке программных систем в
          сфере торговли и маркетинга. Наша команда состоит из программистов,
          аналитиков и экспертов в предметной области, с успешным опытом
          реализации проектов в сфере управления коммерцией
        </StyledP>
        <StyledP>
          Активно развивая собственный продукт, мы готовы к сотрудничеству в
          части разработки и интеграции новых решений
        </StyledP>
        <StyledP>
          Мы используем современные технологии, а именно 1c, Bitrix, MS SQL, SQL
          Analysis Services, Postgresql
        </StyledP>
        <StyledP>
          <b>Наша цель</b> - предоставить нашим клиентам эффективные решения для
          повышения конкурентоспособности и прибыльности их бизнеса
        </StyledP>
      </Container>
    </StyledSection>
  )
}

export default AboutSection
