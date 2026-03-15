import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const Card = styled.div.withConfig({
  shouldForwardProp: (props) => !['ativo'].includes(props)
})<Props>`
  padding: 8px;
  border: 1px solid ${({ ativo, theme }) => (ativo ? '#1e90ff' : theme.bordas)};
  background-color: ${({ ativo, theme }) =>
    ativo ? theme.background : theme.backgroundSecondary};
  color: ${({ ativo, theme }) => (ativo ? '#1e90ff' : theme.textSecondary)} !important;
  border-radius: 8px;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
