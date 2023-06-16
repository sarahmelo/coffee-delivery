import { Routes, Route } from "react-router";
import { Menu } from "../pages/menu";
import { ShoppingCart } from "../pages/shopping-cart";
import { ConfirmedOrder } from "../pages/confirmed-order";

export function Router() {
    return (
        <Routes>
            <Route path="/">
                <Route path="/" element={<Menu/>} />
                <Route path="/shopping-cart" element={<ShoppingCart/>} />
                <Route path="/confirmed-order" element={<ConfirmedOrder/>}  />
            </Route>
        </Routes>
    )
}