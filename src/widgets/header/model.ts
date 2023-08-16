import React from 'react'
import useScrollTrigger from '@mui/material/useScrollTrigger'

export interface Props {
  window?: () => Window
  children: React.ReactElement
}

export function ElevationScroll(props: Props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    //color: trigger ? 'primary': 'transparent',
    // dark: !!trigger
  })
}
