import { Outlet } from 'react-router-dom'
import BarraLateral from '../container/BarraLateral'

const DefaultLayout = () => {
  return (
    <>
      <BarraLateral mostrarFiltros />
      <Outlet />
    </>
  )
}

export default DefaultLayout
