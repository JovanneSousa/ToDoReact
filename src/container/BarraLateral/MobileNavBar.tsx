import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BotaoAdicionar from '../../components/BotaoAdicionar'
import * as S from './styles'
import { faTachographDigital } from '@fortawesome/free-solid-svg-icons'

const MobileNavBar = () => {
  return (
    <S.Aside>
      <S.BottomBar>
        <li>
          <FontAwesomeIcon icon={faTachographDigital} />
        </li>
        <li>
          <FontAwesomeIcon icon={faTachographDigital} />
        </li>
        <li>
          <BotaoAdicionar />
        </li>
        <li>
          <FontAwesomeIcon icon={faTachographDigital} />
        </li>
        <li>
          <FontAwesomeIcon icon={faTachographDigital} />
        </li>
      </S.BottomBar>
    </S.Aside>
  )
}

export default MobileNavBar
