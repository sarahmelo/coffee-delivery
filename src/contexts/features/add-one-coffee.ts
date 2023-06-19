import { useCart } from "../CartContext";
import { Coffee } from "../type/coffee.types";

const { setShoppingCartFn, shoppingCart } = useCart();

export const addCoffee = (coffee: Coffee): void => {
    let updatedGroup = { ...shoppingCart };
    let updatedCoffee: Coffee = {
        ...coffee,
        uuid: Math.random()
    }

    if (!shoppingCart[updatedCoffee.name]) {
        updatedGroup[updatedCoffee.name] = [updatedCoffee]

        setShoppingCartFn(updatedGroup)

        return
    }
   
    updatedGroup[updatedCoffee.name] = [
        ...updatedGroup[updatedCoffee.name],
        updatedCoffee
    ]

    setShoppingCartFn(updatedGroup)
};