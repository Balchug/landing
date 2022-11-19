import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    margin: 0; 
    background-color: #fafaf3;
    font-family:'Roboto';
  }
`

export default GlobalStyle