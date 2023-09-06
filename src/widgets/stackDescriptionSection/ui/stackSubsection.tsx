import React from 'react'
import { ISubsection } from './topics'
import styled from 'styled-components'
import { TechnologyStack } from './technologyStack'

interface IComponentProps {
  topic: ISubsection
  key: number
}

const Title = styled.div`
  font-weight: 600;
`
const SectionWrapper = styled.div`
  display: flex;
  margin: 20px 10px;
  flex-direction: column;
  gap: 15px;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
const Description = styled.div`
  font-weight: 200;
  font-size: 1.4rem;
`

export const StackSubsection = ({ topic }: IComponentProps) => {
  return (
    <SectionWrapper>
      <Title>{topic.title}</Title>
      <Content>
        <TechnologyStack items={topic.technologies} />
        <Description>{topic.description}</Description>
      </Content>
    </SectionWrapper>
  )
}
