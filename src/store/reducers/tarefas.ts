import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
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

export const buscarTarefas = createAsyncThunk(
  '/Tarefa/ObterTodos',
  async () => {
    const response = await api.get<Tarefa[]>('/Tarefas')
    return response.data
  }
)

export const cadastrarTarefa = createAsyncThunk(
  '/Tarefas',
  async (tarefa: Omit<Tarefa, 'id'>) => {
    const response = await api.post<Tarefa>('Tarefas', tarefa)
    return response.data
  }
)

export const editarTarefa = createAsyncThunk(
  '/Tarefas/{id}',
  async (tarefa: Tarefa) => {
    const reponse = await api.put(`/Tarefas/${tarefa.id}`, tarefa)
    return reponse.data
  }
)

export const removerTarefa = createAsyncThunk(
  '/Tarefas/Remover',
  async (id: number) => {
    await api.delete(`/Tarefas/${id}`)
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
  }
})

export const { alteraStatus } = tarefasSlice.actions
export default tarefasSlice.reducer
