import theme from './theme'
import { ThemeProvider } from '@material-ui/styles'
import {BrowserRouter} from 'react-router-dom'

import { hot } from 'react-hot-loader'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <h1>Hello This is Moshiur</h1>
      </ThemeProvider>
  </BrowserRouter>
  );
}

export default hot(module)(App)
