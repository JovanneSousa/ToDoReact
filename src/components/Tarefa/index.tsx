import { editarStatus, editarTarefa, removerTarefa } from '../../store/reducers/tarefas'
import * as enums from '../../utils/enums/Tarefa'
import { Botao, BotaoSalvar } from '../../styles'
import * as S from './styles'
import TarefaClass from '../../models/Tarefa'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../store'
import { useState, type ChangeEvent } from 'react'

type Props = TarefaClass

export const exibePrioridade = (prioridade: enums.Prioridade) => {
  if (prioridade == enums.Prioridade.URGENTE) return 'Urgente'
  if (prioridade == enums.Prioridade.IMPORTANTE) return 'Importante'

  return 'Normal'
}

const Tarefa = ({
  descricao: descricaoOriginal,
  prioridade,
  titulo,
  status,
  id
}: Props) => {
  const dispatch = useDispatch<AppDispatch>()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState(descricaoOriginal)

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }
  const exibeStatus = (status: enums.Status) => {
    return status === enums.Status.PENDENTE ? 'Pendente' : 'Concluída'
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          checked={status === enums.Status.CONCLUIDA}
          onChange={(e) => dispatch(editarStatus({id, status: e.target.checked ? enums.Status.CONCLUIDA : enums.Status.PENDENTE}))}
          type="checkbox"
          id={titulo}
        />
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {exibePrioridade(prioridade)}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {exibeStatus(status)}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editarTarefa({
                    id,
                    titulo,
                    descricao,
                    prioridade,
                    status,
                    data: new Date().toISOString()
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarERemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarERemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarERemover
              onClick={() => dispatch(removerTarefa(id))}
            >
              Remover
            </S.BotaoCancelarERemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
