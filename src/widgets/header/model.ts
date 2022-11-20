import useScrollTrigger from '@mui/material/useScrollTrigger';
import React from 'react';

export interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

export function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    //color: trigger ? 'primary': 'transparent',
    dark: !!trigger
  });
}