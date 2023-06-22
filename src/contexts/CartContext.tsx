import React, { createContext, ReactNode, useState } from "react";
import { Coffee, CoffeeGroup } from "./types/coffee.types";
import { PaymentProviderProps } from "./types/payment-providers.types";
import { paymentProviders } from "./setup/payment-provider";

type CoffeDeliveryProviderProps = {
    children: ReactNode,
}

type CoffeDeliveryContextData = {
    shoppingCart: CoffeeGroup,
    setShoppingCartFn: (group: CoffeeGroup) => void;
    addCoffee: (coffee: Coffee, count?: number) => void,
    removeCoffee: (coffee: Coffee) => void,
    removeAllCoffee: (coffee: Coffee) => void,
    paymentProviders: PaymentProviderProps[],
}


export const CartContext = createContext<CoffeDeliveryContextData>({
    shoppingCart: { },
    setShoppingCartFn: () => { },
    addCoffee: () => { },
    removeCoffee: () => { },
    removeAllCoffee: () => { },
    paymentProviders: [],
})

export const CartProvider = ({ children }: CoffeDeliveryProviderProps) => {
    const [shoppingCart, setShoppingCart] = useState<CoffeeGroup>({ })

    const setShoppingCartFn = (group: CoffeeGroup) => setShoppingCart(group)

    const addCoffee = (coffee: Coffee, count: number = 1): void => {        
        let updatedGroup = { ...shoppingCart };
        let coffeeWithUuid: Coffee = {
            ...coffee,
            uuid: Math.random()
        }
    
        for (let i: number = 0; i < count; i++) {
            if (!updatedGroup[coffeeWithUuid.name]) {
                updatedGroup[coffeeWithUuid.name] = [];
            }
    
            updatedGroup[coffeeWithUuid.name] = [
                ...updatedGroup[coffeeWithUuid.name],
                coffeeWithUuid
            ]
    
            setShoppingCartFn(updatedGroup)
        }
    };

    const removeAllCoffee = (coffee: Coffee): void => {
        let updatedShoppingCart: CoffeeGroup = { ...shoppingCart };
        
        delete updatedShoppingCart[coffee.name]
    
        setShoppingCartFn(updatedShoppingCart)
    }

    const removeCoffee = (coffee: Coffee): void => {
        let updatedShoppingCart: CoffeeGroup = { ...shoppingCart };
        
        updatedShoppingCart[coffee.name] = updatedShoppingCart[coffee.name].filter((item) => item.uuid !== coffee.uuid)
    
        if (updatedShoppingCart[coffee.name].length === 0) {
            delete updatedShoppingCart[coffee.name]
        }
    
        setShoppingCartFn(updatedShoppingCart)
    }

    return (
        <CartContext.Provider value={{ 
            shoppingCart,
            setShoppingCartFn,
            addCoffee,
            removeCoffee,
            removeAllCoffee,
            paymentProviders,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => React.useContext(CartContext)