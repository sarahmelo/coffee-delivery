import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Menu } from "./pages/menu";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/themes/global";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Header/>
        <Menu />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App;
