import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ContatoClass from '../../models/Contato'

type ContatosType = {
  listaContatos: ContatoClass[]
}

const initialState: ContatosType = {
  listaContatos: [
    {
      id: 1,
      nome: 'Gustavo Teofilo',
      email: 'gustavotmsilva35@gmail.com',
      telefone: '11977800799'
    }
  ]
}

const contatos = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Omit<ContatoClass, 'id'>>) => {
      const ultimoContato = state.listaContatos[state.listaContatos.length - 1]

      state.listaContatos = [
        ...state.listaContatos,
        { id: ultimoContato.id + 1, ...action.payload }
      ]
    },
    editar: (state, action: PayloadAction<ContatoClass>) => {
      const indexDaTarefa = state.listaContatos.findIndex(
        (item) => item.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.listaContatos[indexDaTarefa] = action.payload
        console.log(action.payload)
      }
    },

    deletar: (state, action: PayloadAction<number>) => {
      const indexDaTarefa = state.listaContatos.findIndex(
        (item) => item.id === action.payload
      )
      if (indexDaTarefa >= 0) {
        state.listaContatos = state.listaContatos.filter(
          (item) => item.id !== action.payload
        )
      }
    }
  }
})

export const { adicionar, editar, deletar } = contatos.actions
export default contatos.reducer
