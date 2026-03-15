import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import EstiloGlobal from './styles'
import store from './store'
import Rotas from './Routes'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './styles/theme'

function App() {
  const darkMode = true

  return (
    <Provider store={store}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <EstiloGlobal />
        <BrowserRouter>
          <Rotas />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
