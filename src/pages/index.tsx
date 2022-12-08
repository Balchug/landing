import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Header, Footer, HomeSection, FeaturesSection, TariffsSection, ServicesSection, ReviewsSection, FeedbackSection } from '~/widgets'

import { useTheme } from '@mui/material'

const IndexPage: React.FC<PageProps> = () => {
  const theme = useTheme()
  return (
  <>
    <Header />
    <HomeSection  id="home" theme={theme}/>
    <FeaturesSection id="functions"/>
    <ServicesSection id="services" theme={theme}/>
    <ReviewsSection id="reviews" theme={theme}/>
    <TariffsSection id="tariffs" theme={theme}/>
    <FeedbackSection id="feedback" theme={theme} />
    <Footer />

  </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Балчуг-Тeх | Портал </title>
