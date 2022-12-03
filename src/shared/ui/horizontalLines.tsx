import React from 'react'

interface IProps {
  color: string
}

const HorizontalLines = ({ color }: IProps) =>  (
  <svg xmlns="http://www.w3.org/2000/svg" height="8" width="100%">
    <line x1="40%" y1="1" x2="100%" y2="1" stroke={color} />
    <line x1="50%" y1="4" x2="100%" y2="4" stroke={color} />
    <line x1="65%" y1="7" x2="100%" y2="7" stroke={color} />
  </svg>
)

export default HorizontalLines