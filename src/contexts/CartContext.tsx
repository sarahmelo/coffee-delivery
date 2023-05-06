import React, { createContext, ReactNode, useState } from "react";
import { Coffee } from "./menu";

type CoffeDeliveryProviderProps = {
    children: ReactNode,
}

type CoffeDeliveryContextData = {
    coffeCart: Coffee[], 
    handleSetCart: (coffe: Coffee) => void,
}

export const CartContext = createContext<CoffeDeliveryContextData>({
    coffeCart: [],
    handleSetCart: () => { }
})

export const CartProvider = (props: CoffeDeliveryProviderProps) => {
    const [coffeCart, setCoffeCart] = useState<Coffee[]>([])

    const handleSetCart = (coffe: Coffee): void => {
        setCoffeCart([...coffeCart,coffe])
    }

    return (
        <CartContext.Provider value={{ coffeCart, handleSetCart }}>
            {props.children}
        </CartContext.Provider>
    )
}

export const useCart = () => React.useContext(CartContext)