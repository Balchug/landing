import React from 'react';
import { Button } from '@mui/material'


const sections = [
  {url: '#home', text: "Описание"},
  {url: '#tariffs', text: "Тарифы"},
  {url: '#functions', text: "Возможности"},
  {url: '#services', text: "Услуги"},
]


const NavButtons = () => {
  return (<nav>
    {sections.map(section => 
              <Button key={section.url} href={section.url} variant="contained" >
                {section.text}
              </Button>)} 
  </ nav>)
}

export default NavButtons