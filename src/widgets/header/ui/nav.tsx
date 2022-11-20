import React from 'react';
import  styled from 'styled-components'
import { Link, animateScroll as scroll } from "react-scroll"



const sections = [
  {url: 'home', text: "Описание"},
  {url: 'tariffs', text: "Тарифы"},
  {url: 'functions', text: "Возможности"},
  {url: 'services', text: "Услуги"},
]


const StyledLink = styled(Link)`
  padding: 15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.2rem;
  cursor: pointer;
  &.active { 
    font-size: 1.3rem;
    font-weight: bold;
    color: red;
  }
`


const NavButtons = () => {
  return (<nav>
    {sections.map(section => 
              <StyledLink 
                key={section.url} 
                activeClass="active" 
                to={section.url} 
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {section.text}
              </StyledLink>)} 
  </ nav>)
}

export default NavButtons

