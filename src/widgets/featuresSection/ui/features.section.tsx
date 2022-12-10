import React from 'react'
import styled from 'styled-components'
import { Container, Card, CardContent, Typography } from '@mui/material'
import { ISectionProps } from '~/shared/interfaces/section.interface'
import { SectionTitle } from '~/shared/ui'
import { StaticImage } from 'gatsby-plugin-image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const StyledHomeSection = styled.section`
  padding-top: 40px;
  padding-bottom: 80px;
`

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
}

const FeaturesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 20px;
  padding: 10px;
  overflow-x: auto;

  justify-content: space-evenly;
`

const features = [
  {
    title: 'Планирование',
    content: `Планируйте объем продаж и приход денежных средств на неделю, месяц или год. 
    В разрезе контрагентов и товаров. 
    Сравнивайте с фактом продаж с помощью консолидированного отчета.`,
  },
  {
    title: 'Ценовые модели',
    content: `Создавайте и фиксируйте ценовую политику компании.
    Создавайте ценовые модели под каждого контрагента.`,
  },
  {
    title: 'Маркетинг',
    content: `Заводите маркетинговые активности для разных каналов продаж (сеть, розница, HoReCa).`,
  },
  {
    title: 'Учет POSM - материалов',
    content: `Отслеживайте приход-расход POSM материалов как у себя, так и у дистрибьютора.`,
  },
  {
    title: 'Листинг',
    content: `Заводите контракты с различными коммерческими условиями и объединяйте их в листинг, чтобы проанализировать коммерцию по всей сети.`,
  },
]

const HomeSection = ({ id, theme }: ISectionProps) => {
  return (
    <StyledHomeSection id={id} theme={theme}>
      <Container sx={containerStyles}>
        {/* <HorizontalLines color={ theme?.palette.primary.main || 'transparent' }/> */}
        <SectionTitle>Возможности</SectionTitle>
        <Carousel autoPlay={true} infiniteLoop={true}>
          <StaticImage src={`../../../images/features/01.JPG`} alt="Описание" />
          <StaticImage src={`../../../images/features/02.JPG`} alt="Описание" />
          <StaticImage src={`../../../images/features/03.JPG`} alt="Описание" />
          <StaticImage src={`../../../images/features/04.JPG`} alt="Описание" />
          <StaticImage src={`../../../images/features/05.JPG`} alt="Описание" />
          <StaticImage src={`../../../images/features/06.JPG`} alt="Описание" />
          <StaticImage src={`../../../images/features/07.JPG`} alt="Описание" />
          <StaticImage src={`../../../images/features/08.JPG`} alt="Описание" />
          <StaticImage src={`../../../images/features/09.JPG`} alt="Описание" />
          <StaticImage src={`../../../images/features/10.JPG`} alt="Описание" />
          <StaticImage src={`../../../images/features/11.JPG`} alt="Описание" />
          <StaticImage src={`../../../images/features/12.JPG`} alt="Описание" />
          <StaticImage src={`../../../images/features/13.JPG`} alt="Описание" />
          <StaticImage src={`../../../images/features/14.JPG`} alt="Описание" />
          <StaticImage src={`../../../images/features/15.JPG`} alt="Описание" />
          <StaticImage src={`../../../images/features/16.JPG`} alt="Описание" />
        </Carousel>
        <FeaturesWrapper>
          {features.map(block => (
            <Card sx={{ width: '250px' }}>
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
            </Card>
          ))}
        </FeaturesWrapper>
      </Container>
    </StyledHomeSection>
  )
}

export default HomeSection
