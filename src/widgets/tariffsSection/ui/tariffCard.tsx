import React from 'react'
import styled from 'styled-components'

interface IProps {
  title: string
  content: string[]
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 3px solid white;
  border-radius: 15px;
  width: 450px;
  align-content: center;
  padding-bottom: 50px;
`

const Title = styled.div`
  color: #b58c68;
  font-weight: 600;
  font-size: 1.4rem;
  padding: 15px;
  text-align: center;
`
const Content = styled.div`
  font-size: 1.4rem;
  color: white;
  padding: 5px;
  text-align: start;
`
const StyledLi = styled.li`
  margin: 5px;
`

const TariffCard = ({ title, content }: IProps) => {
  return (
    <CardWrapper>
      <Title>{title}</Title>
      <Content>
        <ul>
          {content.map(i => (
            <StyledLi key={i}>{i}</StyledLi>
          ))}
        </ul>
      </Content>
    </CardWrapper>
  )
}

export default TariffCard
