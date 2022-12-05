
import React from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material'
import { ISectionProps } from '~/shared/interfaces/section.interface'
import { SectionTitle, HorizontalLines } from '~/shared/ui'
import { StaticImage } from "gatsby-plugin-image"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"


const StyledHomeSection = styled.section`
  padding-top: 40px;
  padding-bottom: 100px;
`

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
}

const slides = [
  {name: '01.png', legend: '01-description'},
  {name: '02.png', legend: '01-description'},
  {name: '03.png', legend: '01-description'},
  {name: '04.png', legend: '01-description'},
  {name: '05.png', legend: '01-description'},
  {name: '06.png', legend: '01-description'},
  {name: '07.png', legend: '01-description'},
  {name: '08.png', legend: '01-description'},
  {name: '09.png', legend: '01-description'},
  {name: '10.png', legend: '01-description'},
  {name: '11.png', legend: '01-description'},
  {name: '12.png', legend: '01-description'},
  {name: '13.png', legend: '01-description'},
  {name: '14.png', legend: '01-description'},
  {name: '15.png', legend: '01-description'},
  {name: '16.png', legend: '01-description'},
]


const HomeSection = ({ id, theme }: ISectionProps) => {
  return (<StyledHomeSection id={id} theme={theme}>
      <Container sx={containerStyles}>
        {/* <HorizontalLines color={ theme?.palette.primary.main || 'transparent' }/> */}
        <SectionTitle>Возможности</SectionTitle>
        <Carousel>
           <div>  <StaticImage src={ `../../../images/features/01.png` } alt='Описание'/> </div>
           <div>  <StaticImage src={ `../../../images/features/02.png` } alt='Описание'/> </div>
           <div>  <StaticImage src={ `../../../images/features/03.png` } alt='Описание'/> </div>
           <div>  <StaticImage src={ `../../../images/features/04.png` } alt='Описание'/> </div>
           <div>  <StaticImage src={ `../../../images/features/05.png` } alt='Описание'/> </div>
           <div>  <StaticImage src={ `../../../images/features/06.png` } alt='Описание'/> </div>
           <div>  <StaticImage src={ `../../../images/features/07.png` } alt='Описание'/> </div>
           <div>  <StaticImage src={ `../../../images/features/08.png` } alt='Описание'/> </div>
           <div>  <StaticImage src={ `../../../images/features/09.png` } alt='Описание'/> </div>
           <div>  <StaticImage src={ `../../../images/features/10.png` } alt='Описание'/> </div>
           <div>  <StaticImage src={ `../../../images/features/11.png` } alt='Описание'/> </div>
           <div>  <StaticImage src={ `../../../images/features/12.png` } alt='Описание'/> </div>
           <div>  <StaticImage src={ `../../../images/features/13.png` } alt='Описание'/> </div>
           <div>  <StaticImage src={ `../../../images/features/14.png` } alt='Описание'/> </div>
           <div>  <StaticImage src={ `../../../images/features/15.png` } alt='Описание'/> </div>
           <div>  <StaticImage src={ `../../../images/features/16.png` } alt='Описание'/> </div>
        </Carousel>
      </Container>
    </StyledHomeSection>)
}



export default HomeSection
