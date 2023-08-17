
import React from 'react'
import styled from 'styled-components'
import reviews from './reviews'
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
  /* background-color: ${props => props.theme.palette.primary.main  } */
`

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  height: '100%',
  paddingTop: '30px',
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 3px solid ${props => props.theme.palette.primary.main};
  border-radius: 15px;
  min-width: 800px;
  max-width: 800px;
  min-height: 400px;
  margin: 10px;
  align-content: center;
  padding-bottom: 50px;
`

const ReviewsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 30px;
`

const Title = styled.div`
  padding: 15px;
  font-size: 1.4rem;
  font-weight: 600;
`
const Content = styled.div`
  margin: 20px;
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: 300;
  text-align: justify;
`



const ReviewsSection = ({ id, theme }: ISectionProps) => {
  return (<StyledSection id={id} theme={theme}>
      <Container sx={containerStyles}>
        <SectionTitle>Отзывы</SectionTitle>
          <ReviewsWrapper>

            { reviews.map(item => <CardWrapper theme={theme} key={item.id}>
              <Title>{item.title}</Title>
              <Content>{item.content}</Content>
            </CardWrapper>) }
          </ReviewsWrapper>
        
          
          
      </Container>
    </StyledSection>)
}



export default ReviewsSection
 