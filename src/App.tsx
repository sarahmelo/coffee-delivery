import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Router } from "./router/Route";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/themes/global";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <div className="app">
      <CartProvider>
        <ThemeProvider theme={defaultTheme}>
          <BrowserRouter>
            <Header/>
            <div className="container">
              <Router/> 
            </div>
          </BrowserRouter>  
          <GlobalStyle />
        </ThemeProvider>
      </CartProvider>
    </div>
  )
}

export default App;
