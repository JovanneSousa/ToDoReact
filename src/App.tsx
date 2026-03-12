import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import EstiloGlobal from './styles'
import store from './store'
import Rotas from './Routes'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </Provider>
  )
}

export default App
