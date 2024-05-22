import { useDispatch, useSelector } from 'react-redux'
import {
  Form,
  ContainerInputs,
  ContainerButtons,
  BtnAdicionar,
  BtnLimpar,
  InputAdicionarContato
} from './styles'
import { RootReducer } from '../../redux/store'
import { adicionar } from '../../redux/reducers/contatos'
import { useState } from 'react'

const AdicionarContatoContainer = () => {
  const dispatch = useDispatch()
  const { contatos } = useSelector((state: RootReducer) => state)

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const adicionaContato = (nome: string, email: string, telefone: string) => {
    if (telefone.length < 11) {
      alert('Verifique se o número de telefone está correto!')
      return
    } else {
      dispatch(adicionar({ nome, email, telefone }))

      setNome('')
      setEmail('')
      setTelefone('')

      console.log(contatos)
    }
  }

  const limparContatos = () => {
    setNome('')
    setEmail('')
    setTelefone('')
  }

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault()

        adicionaContato(nome, email, telefone)
      }}
    >
      <ContainerInputs>
        <InputAdicionarContato
          placeholder="Digite o nome"
          type="text"
          required
          onChange={(event) => setNome(event.target.value)}
          value={nome}
        />
        <InputAdicionarContato
          placeholder="Digite o e-mail "
          type="email"
          required
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <InputAdicionarContato
          placeholder="Digite o telefone"
          type="tel"
          required
          onChange={(event) => setTelefone(event.target.value)}
          value={telefone}
        />
      </ContainerInputs>

      <ContainerButtons>
        <BtnAdicionar type="submit">Enviar</BtnAdicionar>
        <BtnLimpar type="reset" onClick={() => limparContatos()}>
          Limpar
        </BtnLimpar>
      </ContainerButtons>
    </Form>
  )
}

export default AdicionarContatoContainer
