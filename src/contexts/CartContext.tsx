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
    coffeCart: Coffee[], 
    shoppingCart: CoffeeGroup,
    addCoffeeInShoppingCart: (coffee: Coffee) => void,
    removeItem: (cofee: Coffee) => void,
    paymentProviders: PaymentProviderProps[],
}


export const CartContext = createContext<CoffeDeliveryContextData>({
    coffeCart: [],
    shoppingCart: { },
    addCoffeeInShoppingCart: () => { },
    removeItem: () => { },
    paymentProviders: paymentProviders,
})

export const CartProvider = ({ children }: CoffeDeliveryProviderProps) => {
    const [coffeeCart, setCoffeCart] = useState<Coffee[]>([])
    const [shoppingCart, setShoppingCart] = useState<CoffeeGroup>({ })

    const handleSetCart = (coffee: Coffee): void => {
        const newCoffe: Coffee = {
            ...coffee,
            uuid: Math.random()
        } 

        addCoffeeInShoppingCart(newCoffe)

        console.log('====>', shoppingCart)

        setCoffeCart([...coffeeCart, newCoffe])
    }
    
    const removeItemOfCart = (coffee: Coffee): void => {
        const hasCoffee = coffeeCart.find(
            (item): boolean => item.uuid === coffee.uuid
        );

        if (!hasCoffee) {
            return
        }

        const newCoffeCart = coffeeCart.filter(
            (item: Coffee) => item.uuid !== coffee.uuid
        )

        setCoffeCart(newCoffeCart)
    }


    const addCoffeeInShoppingCart = (coffee: Coffee): void => {
        let updatedGroup = { ...shoppingCart };

        if (!shoppingCart[coffee.name]) {
            updatedGroup[coffee.name] = [coffee]

            setShoppingCart(updatedGroup)

            return
        }
       
        updatedGroup[coffee.name] = [
            ...updatedGroup[coffee.name],
            coffee
        ]

        setShoppingCart(updatedGroup)

        console.log('===>', shoppingCart)
    };

    return (
        <CartContext.Provider value={{ 
            coffeCart: coffeeCart,
            shoppingCart,
            addCoffeeInShoppingCart,
            removeItem: removeItemOfCart,
            paymentProviders 
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => React.useContext(CartContext)