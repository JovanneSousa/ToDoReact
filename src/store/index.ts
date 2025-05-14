import { configureStore } from '@reduxjs/toolkit'
import tarefasReducer from './reducers/tarefas'

import filtroReducer from './reducers/Filtro'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
