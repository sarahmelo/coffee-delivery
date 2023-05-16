import React, { createContext, ReactNode, useState } from "react";
import { Coffee } from "./menu";
import { Bank, CreditCard, Money } from "@phosphor-icons/react";

type Payment = 'cartão de crédito' | 'cartão de débito' | 'dinheiro'
type PaymentProviderProps = {
    name: Payment,
    icon: ReactNode,   
}

const paymentProviders: PaymentProviderProps[] = [
    {
        name: 'cartão de crédito',
        icon: <CreditCard size={16} color="#8047F8"/>
    },
    {
        name: 'cartão de débito',
        icon: <Bank size={16} color="#8047F8"/>
    },
    {
        name: 'dinheiro',
        icon: <Money size={16} color="#8047F8"/>
    }
]

type CoffeDeliveryProviderProps = {
    children: ReactNode,
}

type CoffeDeliveryContextData = {
    coffeCart: Coffee[], 
    handleSetCart: (coffe: Coffee) => void,
    removeItem: (coffe: Coffee) => void,
    paymentProviders: PaymentProviderProps[],
}


export const CartContext = createContext<CoffeDeliveryContextData>({
    coffeCart: [],
    handleSetCart: () => { },
    removeItem: () => { },
    paymentProviders: paymentProviders,
})

export const CartProvider = ({ children }: CoffeDeliveryProviderProps) => {
    const [coffeCart, setCoffeCart] = useState<Coffee[]>([])

    const handleSetCart = (coffe: Coffee): void => {
        setCoffeCart([...coffeCart, coffe])
    }

    const removeItem = (coffee: Coffee): void => {
        const hasCoffee = coffeCart.find((item): boolean => item === coffee)

        if (!hasCoffee) {
            return
        }
    }

    return (
        <CartContext.Provider value={{ 
            coffeCart,
            handleSetCart, 
            removeItem,
            paymentProviders 
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => React.useContext(CartContext)