import { useTheme } from '@mui/material'

import React from 'react'
import styled from 'styled-components'

interface IProps {
  children: React.ReactNode
}

const StyledWrapper = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${props => props.theme.palette.primary.main}

`


const SectionTitle = ({children}: IProps) => {
  const theme = useTheme()
  console.log('theme: ', theme)  
  return (
    <StyledWrapper theme={theme}>
        { children }
    </StyledWrapper>
  )
}

export default SectionTitle