import React, { createContext, ReactNode, useState } from "react";
import { Bank, CreditCard, Money } from "@phosphor-icons/react";
import { Coffee, CoffeeName } from "./menu";

type Payment = 'cartão de crédito' | 'cartão de débito' | 'dinheiro'
type PaymentProviderProps = {
    name: Payment,
    icon: ReactNode,   
}

type CoffeeGroup = { [name: string]: Coffee[] }

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
    shoppingCart: CoffeeGroup,
    addCoffee: (coffee: Coffee) => void,
    removeCoffee: (coffee: Coffee) => void,
    removeAllCoffee: (coffee: Coffee) => void,
    paymentProviders: PaymentProviderProps[],
}


export const CartContext = createContext<CoffeDeliveryContextData>({
    shoppingCart: { },
    addCoffee: () => { },
    removeCoffee: () => { },
    removeAllCoffee: () => { },
    paymentProviders: paymentProviders,
})

export const CartProvider = ({ children }: CoffeDeliveryProviderProps) => {
    const [shoppingCart, setShoppingCart] = useState<CoffeeGroup>({ })
    
    const removeCoffee = (coffee: Coffee): void => {
        let updatedShoppingCart: CoffeeGroup = { ...shoppingCart };
        updatedShoppingCart[coffee.name] = updatedShoppingCart[coffee.name].filter((item) => item.uuid !== coffee.uuid)

        if (updatedShoppingCart[coffee.name].length === 0) {
            delete updatedShoppingCart[coffee.name]
        }

        setShoppingCart(updatedShoppingCart)
    }

    const removeAllCoffee = (coffee: Coffee): void => {
        let updatedShoppingCart: CoffeeGroup = { ...shoppingCart };
        delete updatedShoppingCart[coffee.name]

        setShoppingCart(updatedShoppingCart)
    }

    const addCoffee = (coffee: Coffee): void => {
        let updatedGroup = { ...shoppingCart };
        let updatedCoffee: Coffee = {
            ...coffee,
            uuid: Math.random()
        }

        if (!shoppingCart[updatedCoffee.name]) {
            updatedGroup[updatedCoffee.name] = [updatedCoffee]

            setShoppingCart(updatedGroup)

            return
        }
       
        updatedGroup[updatedCoffee.name] = [
            ...updatedGroup[updatedCoffee.name],
            updatedCoffee
        ]

        setShoppingCart(updatedGroup)
    };

    return (
        <CartContext.Provider value={{ 
            shoppingCart,
            addCoffee,
            removeCoffee,
            removeAllCoffee,
            paymentProviders 
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => React.useContext(CartContext)