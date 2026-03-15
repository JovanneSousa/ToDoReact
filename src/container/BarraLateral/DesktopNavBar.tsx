import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { alteraTermo } from '../../store/reducers/Filtro'
import * as enums from '../../utils/enums/Tarefa'
import { Botao, Campo } from '../../styles'
import type { AppDispatch, RootReducer } from '../../store'
import type { Props } from '.'

const DesktopNavBar = ({ mostrarFiltros }: Omit<Props, 'activeTabs'>) => {
  const dispatch = useDispatch<AppDispatch>()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const navigate = useNavigate()

  return (
    <S.Aside>
      {mostrarFiltros ? (
        <>
          <Campo
            onChange={(e) => dispatch(alteraTermo(e.target.value))}
            type="text"
            placeholder="Buscar"
            value={termo}
          ></Campo>
          <S.Filtros>
            <FiltroCard
              valor={enums.Status.PENDENTE}
              criterio="status"
              legenda="pendentes"
            />
            <FiltroCard
              valor={enums.Status.CONCLUIDA}
              criterio="status"
              legenda="concluidas"
            />
            <FiltroCard
              valor={enums.Prioridade.URGENTE}
              criterio="prioridade"
              legenda="urgentes"
            />
            <FiltroCard
              valor={enums.Prioridade.IMPORTANTE}
              criterio="prioridade"
              legenda="importantes"
            />
            <FiltroCard
              valor={enums.Prioridade.NORMAL}
              criterio="prioridade"
              legenda="normal"
            />
            <FiltroCard criterio="todas" legenda="todas" />
          </S.Filtros>
        </>
      ) : (
        <Botao onClick={() => navigate('/')} type="button">
          Voltar a lista de tarefas
        </Botao>
      )}
    </S.Aside>
  )
}

export default DesktopNavBar
