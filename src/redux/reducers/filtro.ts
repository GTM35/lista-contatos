import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FiltroType = {
  termoPesquisa: string
}

const initialState: FiltroType = {
  termoPesquisa: ''
}

const filtro = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermoPesquisa: (state, action: PayloadAction<string>) => {
      state.termoPesquisa = action.payload
    }
  }
})

export const { alteraTermoPesquisa } = filtro.actions
export default filtro.reducer
