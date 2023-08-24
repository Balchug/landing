import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import {
  Header,
  Footer,
  HomeSection,
  ProductSection,
  TariffsSection,
  ReviewsSection,
  FeedbackSection,
  AboutSection,
  CompamyTitleSection,
} from '~/widgets'

import { useTheme } from '@mui/material'

const IndexPage: React.FC<PageProps> = () => {
  const theme = useTheme()
  return (
    <>
      <Header />
      <CompamyTitleSection id="title" theme={theme} />
      <AboutSection id="about" theme={theme} />
      <HomeSection theme={theme} />
      <ProductSection id="product" theme={theme} />
      <ReviewsSection id="reviews" theme={theme} />
      <TariffsSection id="tariffs" theme={theme} />
      <FeedbackSection id="feedback" theme={theme} />
      <Footer />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Балчуг-Тeх</title>
