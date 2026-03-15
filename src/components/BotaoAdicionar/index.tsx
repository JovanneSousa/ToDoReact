import { Circulo } from './styles'

interface BotaoProps {
  className?: string
}

const BotaoAdicionar = ({ className }: BotaoProps) => {
  return (
    <Circulo className={className} to="/novo">
      +
    </Circulo>
  )
}

export default BotaoAdicionar
