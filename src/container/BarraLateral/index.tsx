import useIsMobile from '../../hooks/useIsMobile'
import DesktopNavBar from './DesktopNavBar'
import MobileNavBar from './MobileNavBar'

export type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const isMobile = useIsMobile()

  return isMobile ? (
    <MobileNavBar />
  ) : (
    <DesktopNavBar mostrarFiltros={mostrarFiltros} />
  )
}

export default BarraLateral
