import useIsMobile from '../../hooks/useIsMobile'
import type { Tabs } from '../../Layouts/DefaultLayout'
import DesktopNavBar from './DesktopNavBar'
import MobileNavBar from './MobileNavBar'

export type Props = {
  mostrarFiltros: boolean
  activeTabs: Tabs
}

const BarraLateral = ({ mostrarFiltros, activeTabs }: Props) => {
  const isMobile = useIsMobile()

  return isMobile ? (
    <MobileNavBar activeTabs={activeTabs} />
  ) : (
    <DesktopNavBar mostrarFiltros={mostrarFiltros} />
  )
}

export default BarraLateral
