import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buscarTarefas } from '../../store/reducers/tarefas'
import Tarefa from '../Tarefa'
import { AppDispatch, RootState } from '../../store'

const ListaTarefas = () => {
  const dispatch = useDispatch<AppDispatch>()
  const tarefas = useSelector((state: RootState) => state.tarefas.itens)

  useEffect(() => {
    dispatch(buscarTarefas())
  }, [dispatch])

  return (
    <div>
      {tarefas.map((tarefa) => (
        <Tarefa key={tarefa.id} {...tarefa} />
      ))}
    </div>
  )
}

export default ListaTarefas
