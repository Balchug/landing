import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Header, MockSection, Footer, HomeSection, FeaturesSection } from '~/widgets'

import { useTheme } from '@mui/material'
const IndexPage: React.FC<PageProps> = () => {
  const theme = useTheme()
  return (
  <>
    <Header />
    <HomeSection  id="home" theme={theme}/>
    <FeaturesSection id="functions"/>
    <MockSection title="Тарифы" id="tariffs"/>
    <MockSection title="Услуги" id="services"/>
    <Footer />

  </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Балчуг-Тeх | Портал </title>
