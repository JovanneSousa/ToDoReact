import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo } from '../../styles/'
import { Campo } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { AppDispatch } from '../../store'
import { cadastrarTarefa } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefaFunction = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      cadastrarTarefa({
        titulo,
        prioridade,
        descricao,
        status: enums.Status.PENDENTE,
        data: new Date().toISOString()
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova tarefa</Titulo>
      <Form onSubmit={cadastrarTarefaFunction}>
        <Campo
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
          placeholder="Título"
        />
        <Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        ></Campo>
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((prioridade) => {
            return (
              <Opcao key={prioridade}>
                <input
                  value={prioridade}
                  name="prioridade"
                  type="radio"
                  onChange={(e) =>
                    setPrioridade(e.target.value as enums.Prioridade)
                  }
                  id={prioridade}
                  defaultChecked={prioridade === enums.Prioridade.NORMAL}
                />{' '}
                <label htmlFor={prioridade}>{prioridade}</label>
              </Opcao>
            )
          })}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
