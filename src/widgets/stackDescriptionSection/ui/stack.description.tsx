import React from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material'
import { ISectionProps } from '~/shared/interfaces/section.interface'
import { SectionTitle } from '~/shared/ui'
import topics, { ISubsection } from './topics'
import { StackSubsection } from './stackSubsection'

const StyledSection = styled(Container)`
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  padding-top: 30px;
`

const StackDescriptionSection = ({ id, theme }: ISectionProps) => {
  return (
    <StyledSection id={id} theme={theme}>
      <SectionTitle>Наш технологический стек</SectionTitle>
      {topics.map((topic: ISubsection) => (
        <StackSubsection topic={topic} key={topic.id} />
      ))}
    </StyledSection>
  )
}

export default StackDescriptionSection
