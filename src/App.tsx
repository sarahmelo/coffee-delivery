import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Router } from "./router/Route";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/themes/global";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <ThemeProvider theme={defaultTheme}>
          <BrowserRouter>
            <Header/>
            <Router/>
          </BrowserRouter>  
          <GlobalStyle />
        </ThemeProvider>
      </CartProvider>
    </>
  )
}

export default App;
