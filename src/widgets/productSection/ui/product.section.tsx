import React from 'react'
import styled from 'styled-components'
import { Container, Card, CardContent, Typography } from '@mui/material'
import { ISectionProps } from '~/shared/interfaces/section.interface'
import { SectionTitle } from '~/shared/ui'
import { StaticImage } from 'gatsby-plugin-image'
import { Carousel } from 'react-responsive-carousel'

import { features } from './features'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Slider from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const StyledHomeSection = styled.section`
  margin-top: 40px;
  margin-bottom: 80px;
`

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  justifyContent: 'space-evenly',
}

const StyledCard = styled(Card)`
  margin: 10px;
  padding: 10px;
  margin-bottom: 20px;
  height: 95%;
`

const PortalDescription = styled.div`
  font-size: 25px;
  font-weight: 600;
  text-align: end;
  align-self: flex-end;
  max-width: 700px;
`

const MainModules = styled.div`
  line-height: 18px;
  margin-left: 30px;
  font-size: 22px;
  font-weight: 300;
  text-align: start;
  align-self: flex-start;
  max-width: 500px;
`
const DescriptionFooter = styled.div`
  margin-bottom: 50px;
  line-height: 22px;

  font-size: 20px;
  font-weight: 400;
  text-align: end;
  align-self: flex-end;
  max-width: 900px;
  & .description {
    font-weight: 500;
    margin-top: 30px;
  }
`
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const HomeSection = ({ id, theme }: ISectionProps) => (
  <StyledHomeSection id={id} theme={theme}>
    <Container sx={containerStyles}>
      <PortalDescription>
        БАЛЧУГ : Торговый портал - это современный инструмент для повышения
        эффективности управления процессами торгового предприятия
      </PortalDescription>
      <MainModules>
        <Typography variant="h5">
          <b>Основные модули:</b>
        </Typography>
        <ul>Планирование</ul>
        <ul>Листинг</ul>
        <ul>Маркетинг</ul>
        <ul>Ценообразование</ul>
        <ul>Управленческие отчеты</ul>
      </MainModules>
      <DescriptionFooter>
        И другие функции программы позволят в комплексе автоматизировать задачи
        управленческого учета, анализа и планирования
        <div className="description">
          <b>БАЛЧУГ : Торговый портал</b> разработан с использованием
          <b> «1С:Библитека стандартных подсистем»</b>
        </div>
      </DescriptionFooter>
    </Container>

    <Container sx={containerStyles}>
      <SectionTitle>Возможности</SectionTitle>
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        <StaticImage src={'../../../images/features/01.JPG'} alt="Описание" />
        <StaticImage src={'../../../images/features/02.JPG'} alt="Описание" />
        <StaticImage src={'../../../images/features/03.JPG'} alt="Описание" />
        <StaticImage src={'../../../images/features/04.JPG'} alt="Описание" />
        <StaticImage src={'../../../images/features/05.JPG'} alt="Описание" />
        <StaticImage src={'../../../images/features/06.JPG'} alt="Описание" />
        <StaticImage src={'../../../images/features/07.JPG'} alt="Описание" />
        <StaticImage src={'../../../images/features/08.JPG'} alt="Описание" />
        <StaticImage src={'../../../images/features/09.JPG'} alt="Описание" />
        <StaticImage src={'../../../images/features/10.JPG'} alt="Описание" />
        <StaticImage src={'../../../images/features/11.JPG'} alt="Описание" />
        <StaticImage src={'../../../images/features/12.JPG'} alt="Описание" />
        <StaticImage src={'../../../images/features/13.JPG'} alt="Описание" />
        <StaticImage src={'../../../images/features/14.JPG'} alt="Описание" />
        <StaticImage src={'../../../images/features/15.JPG'} alt="Описание" />
        <StaticImage src={'../../../images/features/16.JPG'} alt="Описание" />
      </Carousel>
      <Slider responsive={responsive}>
        {features.map(block => (
          <StyledCard key={block.title}>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ textAlign: 'center' }}
              >
                {block.title}
              </Typography>
              <Typography
                sx={{ my: 1.5, textAlign: 'center' }}
                color="text.secondary"
              >
                {block.content}
              </Typography>
              <Typography variant="body2"></Typography>
            </CardContent>
          </StyledCard>
        ))}
      </Slider>
    </Container>
  </StyledHomeSection>
)

export default HomeSection
