import { useCart } from "../CartContext";
import { Coffee } from "../type/coffee.types";

const { shoppingCart, setShoppingCartFn } = useCart();

export const addAmountOfCoffee = (coffee: Coffee, counter: number): void => {
    let updatedGroup = { ...shoppingCart };
   
    for (let i: number = 0; i < counter; i++) {
        let updatedCoffee: Coffee = {
            ...coffee,
            uuid: Math.random()
        }

        if (!updatedGroup[updatedCoffee.name]) {
            updatedGroup[updatedCoffee.name] = [];
        }

        updatedGroup[updatedCoffee.name] = [
            ...updatedGroup[updatedCoffee.name],
            updatedCoffee
        ]

        setShoppingCartFn(updatedGroup)
    }
}
