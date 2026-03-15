import BotaoAdicionar from '../../components/BotaoAdicionar'
import ListaDeTarefas from '../../container/ListaDeTarefas'
import useIsMobile from '../../hooks/useIsMobile'
import { Container } from '../../styles'

const Home = () => {
  const isMobile = useIsMobile()
  return (
    <Container>
      <ListaDeTarefas />
      {isMobile && <BotaoAdicionar />}
    </Container>
  )
}

export default Home
