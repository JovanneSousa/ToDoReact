import BotaoAdicionar from '../../components/BotaoAdicionar'
import ListaDeTarefas from '../../container/ListaDeTarefas'
import { Container } from '../../styles'

const Home = () => (
  <Container>
    <ListaDeTarefas />
    <BotaoAdicionar />
  </Container>
)

export default Home
