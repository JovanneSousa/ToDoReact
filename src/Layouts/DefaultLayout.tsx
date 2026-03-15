import { Outlet, useLocation } from 'react-router-dom'
import BarraLateral from '../container/BarraLateral'

export type Tabs = 'novo' | 'lista' | 'calendario' | 'ambientes' | 'dashboard'

const DefaultLayout = () => {
  const { pathname } = useLocation()

  const activeTabsMap: Record<string, Tabs> = {
    '/novo': 'novo',
    '/lista': 'lista',
    '/ambientes': 'ambientes',
    '/calendar': 'calendario'
  }

  const activeTab =
    Object.entries(activeTabsMap).find(([route]) =>
      pathname.startsWith(route)
    )?.[1] ?? 'lista'

  return (
    <>
      <BarraLateral activeTabs={activeTab} mostrarFiltros />
      <Outlet />
    </>
  )
}

export default DefaultLayout
