import { useCart } from "../CartContext";
import { Coffee, CoffeeGroup } from "../type/coffee.types";

const { setShoppingCartFn, shoppingCart } = useCart();

export const removeAllCoffee = (coffee: Coffee): void => {
    let updatedShoppingCart: CoffeeGroup = { ...shoppingCart };
    delete updatedShoppingCart[coffee.name]

    setShoppingCartFn(updatedShoppingCart)
}