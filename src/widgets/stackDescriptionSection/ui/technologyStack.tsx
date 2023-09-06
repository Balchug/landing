import React from 'react'
import styled from 'styled-components'
import { ITechnologyLabel } from './topics'

interface IProps {
  items: ITechnologyLabel[]
}

const TechnologyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 15px;

  padding-left: 10px;
  min-width: 300px;
`
const LabelWrapper = styled.div`
  font-weight: 600;
  margin: 3px 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

export const TechnologyStack = ({ items }: IProps) => {
  return (
    <TechnologyWrapper>
      {items.map((item, idx) => {
        return (
          <LabelWrapper key={idx}>
            {/* <StyledIcon /> */}
            <item.icon style={{ width: '35px', height: '35px' }} />
            <div>{item.name}</div>
          </LabelWrapper>
        )
      })}
    </TechnologyWrapper>
  )
}
