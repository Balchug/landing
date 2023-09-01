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
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
          Являясь экспертами в области платформы «1С:Предприятие», мы в
          «Балчуг-Тех» специализируемся на разработке индивидуальных программных
          решений, помогающих бизнесу стремительно развиваться и достигать
          успеха.
        </StyledP>
        <StyledP>
          Оставьте обыденность позади и откройте для себя необычное с нашими
          инновационными и высокопроизводительными приложениями, специально
          адаптированными к вашим требованиям.
        </StyledP>
        <StyledP>
          Мы не просто создаем программное обеспечение; мы создаем для вас
          возможности доминировать в своей отрасли.
        </StyledP>
        <StyledP>
          Мы гордимся тем, что используем стек самых современных и мощных
          технологий, которые позволяют нам решать сложные задачи в области
          аналитики, автоматизации и разработки. Наша команда экспертов владеет
          такими инструментами, как PostgreSQL, MongoDB, C#, TSQL, MDX, DAX,
          Python и различными библиотеками для machine learning (TensorFlow,
          PyTorch, Scikit-learn и другие). Мы умеем обрабатывать и
          визуализировать большие объемы данных, выявлять закономерности и
          прогнозировать будущее. Для автоматизации бизнес процессов и
          построения пользовательских интерфейсов используем Платформу 1С,
          NodeJS, ReactJS, Flutter и другие современные фреймворки. Мы стремимся
          к постоянному развитию и инновациям в нашей работе.
        </StyledP>
      </Container>
    </StyledSection>
  )
}

export default AboutSection
