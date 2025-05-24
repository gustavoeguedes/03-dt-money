import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
  <ThemeProvider theme={defaultTheme}>
    <div>
      <h2>afds</h2>
    </div>
    <GlobalStyle />
  </ThemeProvider>)
  
}

export default App
