import {
  Contato,
  DadosContainer,
  TextAreaDataEditar,
  TextAreaData,
  ButtonsControl,
  BtnSalvar,
  BtnCancelar,
  BtnEditar,
  BtnDeletar
} from './styles'

import ContatoType from '../../models/Contato'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editar, deletar } from '../../redux/reducers/contatos'

type Props = ContatoType

const InfoContato = ({ id, nome, email, telefone }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  const dispatch = useDispatch()

  return (
    <Contato>
      <DadosContainer>
        {estaEditando ? (
          <>
            <TextAreaDataEditar
              onChange={(event) => {
                nome = event.target.value
              }}
              disabled={!estaEditando}
            >
              {nome}
            </TextAreaDataEditar>
            <TextAreaDataEditar
              onChange={(event) => {
                email = event.target.value
              }}
              disabled={!estaEditando}
            >
              {email}
            </TextAreaDataEditar>
            <TextAreaDataEditar
              onChange={(event) => {
                telefone = event.target.value
              }}
              disabled={!estaEditando}
            >
              {telefone}
            </TextAreaDataEditar>
          </>
        ) : (
          <>
            <TextAreaData disabled={!estaEditando} placeholder="Nome">
              {nome}
            </TextAreaData>
            <TextAreaData disabled={!estaEditando} placeholder="E-mail">
              {email}
            </TextAreaData>
            <TextAreaData disabled={!estaEditando} placeholder="Telefone">
              {telefone}
            </TextAreaData>
          </>
        )}
      </DadosContainer>
      <ButtonsControl>
        {estaEditando ? (
          <>
            <BtnSalvar
              onClick={() => {
                dispatch(editar({ id, nome, email, telefone }))
                setEstaEditando(false)
              }}
            >
              Salvar
            </BtnSalvar>
            <BtnCancelar onClick={() => setEstaEditando(false)}>
              Cancelar
            </BtnCancelar>
          </>
        ) : (
          <>
            <BtnEditar
              onClick={() => {
                setEstaEditando(true)
              }}
            >
              Editar
            </BtnEditar>
            <BtnDeletar onClick={() => dispatch(deletar(id))}>
              Deletar
            </BtnDeletar>
          </>
        )}
      </ButtonsControl>
    </Contato>
  )
}

export default InfoContato
