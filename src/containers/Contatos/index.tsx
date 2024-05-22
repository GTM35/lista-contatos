import { useDispatch, useSelector } from 'react-redux'
import {
  ContatosContainer,
  ListaContatosContainer,
  PesquisaContainer,
  Filtro
} from './styles'
import { RootReducer } from '../../redux/store'

import { alteraTermoPesquisa } from '../../redux/reducers/filtro'
import InfoContato from '../../components/InfoContato'

const Contatos = () => {
  const dispatch = useDispatch()

  const { listaContatos } = useSelector((state: RootReducer) => state.contatos)
  const { termoPesquisa } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = listaContatos

    contatosFiltrados = contatosFiltrados.filter(
      (contato) =>
        contato.nome.toLowerCase().search(termoPesquisa.toLowerCase()) >= 0
    )

    return contatosFiltrados
  }

  const teste = filtraContatos()

  return (
    <ContatosContainer>
      <PesquisaContainer>
        <Filtro
          type="search"
          placeholder="Pesquise contato"
          onChange={(event) =>
            dispatch(alteraTermoPesquisa(event.target.value))
          }
          value={termoPesquisa}
        />
      </PesquisaContainer>

      <ListaContatosContainer>
        {teste.map((item) => (
          <InfoContato
            nome={item.nome}
            email={item.email}
            telefone={item.telefone}
            key={item.id}
            id={item.id}
          />
        ))}
      </ListaContatosContainer>
    </ContatosContainer>
  )
}

export default Contatos
