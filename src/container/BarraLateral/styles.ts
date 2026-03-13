import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 70px;

  @media (min-width: ${breakpoints.laptop}) {
    position: inherit;
    width: auto;
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

export const BottomBar = styled.ul`
  display: flex;
  padding: 0 16px;
  justify-content: space-between;
  position: relative;
`
