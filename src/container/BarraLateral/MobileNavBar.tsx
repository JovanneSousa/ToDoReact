import BotaoAdicionar from '../../components/BotaoAdicionar'
import type { Tabs } from '../../Layouts/DefaultLayout'
import * as S from './styles'
import {
  faCalendar,
  faFolderOpen,
  faGauge,
  faTachographDigital
} from '@fortawesome/free-solid-svg-icons'

interface MobileNavBarProps {
  activeTabs: Tabs
}

const MobileNavBar = ({ activeTabs }: MobileNavBarProps) => {
  return (
    <S.Aside>
      <S.BottomBar>
        <li>
          <S.StyledLink
            className={activeTabs == 'dashboard' ? 'is-active' : ''}
            to={'/'}
          >
            <S.StyledIcon size="2x" icon={faGauge} />
            Dashboard
          </S.StyledLink>{' '}
        </li>
        <li>
          <S.StyledLink
            className={activeTabs == 'lista' ? 'is-active' : ''}
            to={'/'}
          >
            <S.StyledIcon size="2x" icon={faTachographDigital} />
            Lista
          </S.StyledLink>
        </li>
        <li>
          <S.StyledLink to={'/'}>
            <BotaoAdicionar className="shadow" />
          </S.StyledLink>
        </li>
        <li>
          <S.StyledLink
            className={activeTabs == 'calendario' ? 'is-active' : ''}
            to={'/'}
          >
            <S.StyledIcon size="2x" icon={faCalendar} />
            Calendario
          </S.StyledLink>{' '}
        </li>
        <li>
          <S.StyledLink
            className={activeTabs == 'ambientes' ? 'is-active' : ''}
            to={'/'}
          >
            <S.StyledIcon size="2x" icon={faFolderOpen} />
            Ambientes
          </S.StyledLink>{' '}
        </li>
      </S.BottomBar>
    </S.Aside>
  )
}

export default MobileNavBar
