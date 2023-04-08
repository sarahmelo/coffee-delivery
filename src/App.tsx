import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Router } from "./Route";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/themes/global";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Header/>
          <Router/>
        </BrowserRouter>  
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App;
