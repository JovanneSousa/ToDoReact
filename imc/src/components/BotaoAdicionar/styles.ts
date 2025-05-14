import { Link } from 'react-router-dom'

import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
  border-radius: 50%;
  display: flex;
  height: 64px;
  width: 64px;
  background-color: ${variaveis.verde};
  position: fixed;
  color: #fff;
  bottom: 40px;
  right: 40px;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`
