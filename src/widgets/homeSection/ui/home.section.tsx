import React from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material'
import { ISectionProps } from '~/shared/interfaces/section.interface'
import { StaticImage } from 'gatsby-plugin-image'

const StyledHomeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-image: url(patternBG.png);
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
  padding-bottom: 30px;
  min-height: 900px;
  border-bottom-right-radius: 120px;
  background-color: ${props => props.theme.palette.primary.main};
`

const containerStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '20px',
  height: '100%',
  justifyContent: 'space-evenly',

  padding: '50px 25px',
}

const imageStyles = {
  borderRadius: '10px',
  filter: 'saturate(0.5)',
  padding: '25px 25px',
  margin: '25px',
}

const DescriptionWrapper = styled.div`
  padding: 30px;
  align-self: center;
`

const DescriptionTitle = styled.div`
  font-size: 30px;
  line-height: 28px;
  color: white;
  font-weight: 600;
`

const Description = styled.div`
  margin-top: 20px;
  color: white;
  font-weight: 100;
  font-size: 14px;
  line-height: 20px;
`

const HomeSection = ({ theme }: ISectionProps) => {
  return (
    <StyledHomeSection theme={theme}>
      <Container sx={containerStyles}>
        <StaticImage
          alt="img_1"
          src="../../../images/img_1.webp"
          width={400}
          style={imageStyles}
        />
        <DescriptionWrapper>
          <DescriptionTitle>
            Максимизируйте влияние на бизнес с помощью передовых технологий
          </DescriptionTitle>
          <Description>
            Интегрируя платформу «1С:Предприятие», наши квалифицированные
            специалисты создают качественное программное обеспечение для
            оптимизации ваших процессов, снижения затрат и повышения
            эффективности.
          </Description>
        </DescriptionWrapper>
      </Container>
      <Container sx={containerStyles}>
        <DescriptionWrapper>
          <DescriptionTitle>
            Индивидуально разработанные решения для продвижения вашего бизнеса
            вперед
          </DescriptionTitle>
          <Description>
            Команда Балчуг-Тех гарантирует, что наши клиенты не согласятся на
            меньшее. Мы предоставляет инновационное и функциональное
            коммерческое программное обеспечение, не имеющее аналогов.
          </Description>
        </DescriptionWrapper>
        <StaticImage
          alt="img_1"
          src="../../../images/img_2.webp"
          width={400}
          style={imageStyles}
        />
      </Container>
    </StyledHomeSection>
  )
}

export default HomeSection
