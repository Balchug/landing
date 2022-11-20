import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Header, MockSection, Footer } from '../widgets'

const IndexPage: React.FC<PageProps> = () => {
  return (
  <>
    <Header />
    <MockSection title="Описание" id="home"/>
    <MockSection title="Тарифы" id="tariffs"/>
    <MockSection title="Возможности" id="functions"/>
    <MockSection title="Услуги" id="services"/>
    <Footer />

  </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Балчуг-Тeх | Портал </title>
