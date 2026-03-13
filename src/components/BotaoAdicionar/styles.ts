import { Link } from 'react-router-dom'

import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { breakpoints } from '../../styles'

export const Circulo = styled(Link)`
  border-radius: 50%;
  display: flex;
  height: 64px;
  width: 64px;
  background-color: ${variaveis.verde};
  position: fixed;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: ${breakpoints.laptop}) {
    bottom: 40px;
    right: 40px;
    left: auto;
  }
`
