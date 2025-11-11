import {
  buscarTarefas,
  editarTarefa,
  removerTarefa
} from '../../store/reducers/tarefas'
import * as enums from '../../utils/enums/Tarefa'
import { Botao, BotaoSalvar } from '../../styles'
import * as S from './styles'
import { useState, useEffect, ChangeEvent } from 'react'
import TarefaClass from '../../models/Tarefa'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store'

type Props = TarefaClass

const Tarefa = ({
  descricao: descricaoOriginal,
  prioridade,
  titulo,
  status,
  id
}: Props) => {
  const dispatch = useDispatch<AppDispatch>()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  const alteraStatusTarefa = (e: ChangeEvent<HTMLInputElement>) => {
    const novoStatus = e.target.checked
      ? enums.Status.CONCLUIDA
      : enums.Status.PENDENTE

    dispatch(
      editarTarefa({
        id,
        titulo,
        descricao,
        prioridade,
        status: novoStatus,
        data: new Date().toISOString()
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          checked={status === enums.Status.CONCLUIDA}
          onChange={alteraStatusTarefa}
          type="checkbox"
          id={titulo}
        />
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
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
