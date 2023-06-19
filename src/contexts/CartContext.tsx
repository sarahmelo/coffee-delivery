import React, { createContext, ReactNode, useState } from "react";
import { Bank, CreditCard, Money } from "@phosphor-icons/react";
import { FormikProps } from 'formik'
import { formBuild, FormBuildProps } from "./setup/form";
import { Coffee, CoffeeGroup } from "./type/coffee.types";
import { addCoffee } from "./features/add-one-coffee";
import { removeCoffee } from "./features/remove-coffee";
import { removeAllCoffee } from "./features/remove-all-coffee-group";
import { addAmountOfCoffee } from "./features/add-amount-of-coffee";
import { PaymentProviderProps } from "./type/payment-providers.types";
import { paymentProviders } from "./setup/payment-provider";

type CoffeDeliveryProviderProps = {
    children: ReactNode,
}

type CoffeDeliveryContextData = {
    shoppingCart: CoffeeGroup,
    setShoppingCartFn: (group: CoffeeGroup) => void;
    addCoffee: (coffee: Coffee) => void,
    removeCoffee: (coffee: Coffee) => void,
    removeAllCoffee: (coffee: Coffee) => void,
    addAmountOfCoffee: (coffee: Coffee, counter: number) => void,
    paymentProviders: PaymentProviderProps[],
    formBuild: FormikProps<FormBuildProps>,
}


export const CartContext = createContext<CoffeDeliveryContextData>({
    shoppingCart: { },
    setShoppingCartFn: () => { },
    addCoffee: () => { },
    removeCoffee: () => { },
    removeAllCoffee: () => { },
    addAmountOfCoffee: () => { },
    paymentProviders: [],
    formBuild: { } as FormikProps<FormBuildProps>,
})

export const CartProvider = ({ children }: CoffeDeliveryProviderProps) => {
    const [shoppingCart, setShoppingCart] = useState<CoffeeGroup>({ })

    const setShoppingCartFn = (group: CoffeeGroup) => setShoppingCart(group)

    return (
        <CartContext.Provider value={{ 
            shoppingCart,
            setShoppingCartFn,
            addCoffee,
            removeCoffee,
            removeAllCoffee,
            paymentProviders,
            addAmountOfCoffee,
            formBuild,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => React.useContext(CartContext)