import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Vitrines } from "./pages/vitrines";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/themes/global";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Header/>
        <Vitrines />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App;
