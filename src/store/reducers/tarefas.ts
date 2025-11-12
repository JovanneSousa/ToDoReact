import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'
import { api } from '../../services/api'

type TarefasState = {
  itens: Tarefa[]
  loading: boolean
  error: string | null
}

const initialState: TarefasState = {
  itens: [],
  loading: false,
  error: null
}

export const buscarTarefas = createAsyncThunk('obterTodos', async () => {
  const response = await api.get<Tarefa[]>('api/Tarefa/ObterTodos')
  return response.data
})

export const cadastrarTarefa = createAsyncThunk(
  'cadastrar',
  async (tarefa: Omit<Tarefa, 'id'>) => {
    const response = await api.post<Tarefa>('api/Tarefa', tarefa)
    return response.data
  }
)

export const editarTarefa = createAsyncThunk(
  '/Tarefas/{id}',
  async (tarefa: Tarefa) => {
    const reponse = await api.put(`api/Tarefa/${tarefa.id}`, tarefa)
    return reponse.data
  }
)

export const editarStatus = createAsyncThunk(
  'atualizaStatus',
  async ({id, status}: {id: number, status: enums.Status}) => {
    await api.post(`api/Tarefa/atualiza-status/${id}`, status, 
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )
    return id
  }
)

export const removerTarefa = createAsyncThunk(
  '/Tarefas/Remover',
  async (id: number) => {
    await api.post(`api/Tarefa/excluir/${id}`)
    return id
  }
)

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(buscarTarefas.pending, (state) => {
        state.loading = true
      })
      .addCase(buscarTarefas.fulfilled, (state, action) => {
        state.loading = false
        state.itens = action.payload
      })
      .addCase(cadastrarTarefa.fulfilled, (state, action) => {
        state.itens.push(action.payload)
      })
      .addCase(editarTarefa.fulfilled, (state, action) => {
        const index = state.itens.findIndex((t) => t.id === action.payload.id)
        if (index >= 0) {
          state.itens[index] = action.payload
        }
      })
      .addCase(removerTarefa.fulfilled, (state, action) => {
        state.itens = state.itens.filter((t) => t.id !== action.payload)
      })
      .addCase(editarStatus.fulfilled, (state, action) => {
        const { id, status } = action.meta.arg; 
        const tarefa = state.itens.find((t) => t.id === id);
        if (tarefa) {
          tarefa.status = status; 
        }
      })
  }
})

export const { alteraStatus } = tarefasSlice.actions
export default tarefasSlice.reducer
