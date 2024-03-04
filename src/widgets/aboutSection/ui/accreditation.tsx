/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled from 'styled-components'
import Logo from '../../../images/mintsifry_logo.svg'

const Wrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
`

const Accreditation = () => {
  return (
    <>
      <Wrapper>
        <Logo style={{ height: '35px' }} />

        <div>
          "Балчуг-Тех" аккредитованная IT-компания. Решение о предоставлении
          государственной аккредитации от 07.09.2023 № АО-20230830-14045213386-3
        </div>
      </Wrapper>
    </>
  )
}

export default Accreditation
