import { Outlet } from 'react-router-dom'
import BarraLateral from '../container/BarraLateral'
import BotaoAdicionar from '../components/BotaoAdicionar'

const DefaultLayout = () => {
  return (
    <>
      <BarraLateral mostrarFiltros />
      <Outlet />
      <BotaoAdicionar />
    </>
  )
}

export default DefaultLayout
