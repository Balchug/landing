import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const StyledTitle = styled.div`
  font-size: 32px;
  font-family: Inter, sans-serif;
  font-weight: 600;
  color: #b58c68;
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`

const Logo = () => (
  <StyledWrapper>
    <StaticImage src="../../../images/logo.png" alt="logo" height={33} />
    <StyledTitle>{'Балчуг-Тех'}</StyledTitle>
  </StyledWrapper>
)

export default Logo
