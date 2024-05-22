import Cabecalho from './containers/Cabecalho'
import Contatos from './containers/Contatos'
import AdicionarContatoContainer from './containers/AdicionarContato'

import { Container, EstiloGlobal } from './styles'

import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />

      <Container>
        <Cabecalho />
        <main>
          <AdicionarContatoContainer />
          <Contatos />
        </main>
      </Container>
    </Provider>
  )
}

export default App
