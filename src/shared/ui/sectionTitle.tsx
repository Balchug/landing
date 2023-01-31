import { useTheme } from '@mui/material'

import React from 'react'
import styled from 'styled-components'

interface IProps {
  children: React.ReactNode, 
  color?: string
}

const StyledWrapper = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${props =>  props.color ? props.color : props.theme.palette.primary.main }

`


const SectionTitle = ({children, color}: IProps) => {
  const theme = useTheme()
  return (
    <StyledWrapper theme={theme} color={color}>
        { children }
    </StyledWrapper>
  )
}

export default SectionTitle