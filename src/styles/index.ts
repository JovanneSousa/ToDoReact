import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

export const breakpoints = {
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px'
}

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }

  #root {
    width: 100%;
    display: flex;
  }

  .container {
    width: 100%;
  }
`

export const Container = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 30vw auto;
  }
`

export const MainContainer = styled.main`
  padding: 0 8px;
  height: 100vh;
  overflow-y: scroll;
  width: 100%;

  @media (min-width: ${breakpoints.laptop}) {
    padding: 0 40px;
  }
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`
export const Campo = styled.input`
  border-radius: 8px;
  border: 1px solid #666666;
  padding: 8px;
  background-color: #fff;
  font-weight: bold;
  width: 100%;
`

export const Botao = styled.button`
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
