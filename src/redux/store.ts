import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import contatosReducer from './reducers/contatos'
import filtroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    filtro: filtroReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
