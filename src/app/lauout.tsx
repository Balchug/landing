import * as React from "react"
import GlobalStyle from './globalStyles'
import type {  PageProps } from "gatsby"

type LayoutProps = {
  children: React.FC<PageProps>
}

const Layout = ({children}: LayoutProps) => {
  return (
    <>
      <GlobalStyle />
      { children }
    </>
  )
}

export default Layout