import BarraLateral from '../../container/BarraLateral'
import Formulario from '../../container/Formulario'
import { Container } from '../../styles'

const Cadastro = () => (
  <Container>
    <BarraLateral mostrarFiltros={false} />
    <Formulario />
  </Container>
)

export default Cadastro
