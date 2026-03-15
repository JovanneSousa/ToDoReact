import styled from 'styled-components'
import { breakpoints } from '../../styles'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import variaveis from '../../styles/variaveis'

export const Aside = styled.aside`
  background-color: ${({ theme }) => theme.primary};
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 70px;

  @media (min-width: ${breakpoints.laptop}) {
    position: inherit;
    width: auto;
    display: block;
    padding: 16px;
  }
`
export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const BottomBar = styled.ul`
  display: flex;
  padding: 0 8px;
  justify-content: space-between;
  position: relative;

  li {
    padding: 16px;
    width: 71px;
  }
`

export const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 10px;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &.is-active {
    color: ${variaveis.verde};
  }
`

export const StyledIcon = styled(FontAwesomeIcon)`
  padding-bottom: 8px;
`
