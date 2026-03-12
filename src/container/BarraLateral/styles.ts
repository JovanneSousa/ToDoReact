import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
  display: none;

  @media (min-width: ${breakpoints.laptop}) {
    display: block;
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
