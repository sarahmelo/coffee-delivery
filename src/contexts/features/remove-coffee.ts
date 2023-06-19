import { useCart } from "../CartContext";
import { Coffee, CoffeeGroup } from "../type/coffee.types";

const { shoppingCart, setShoppingCartFn } = useCart();

export const removeCoffee = (coffee: Coffee): void => {
    let updatedShoppingCart: CoffeeGroup = { ...shoppingCart };
    updatedShoppingCart[coffee.name] = updatedShoppingCart[coffee.name].filter((item) => item.uuid !== coffee.uuid)

    if (updatedShoppingCart[coffee.name].length === 0) {
        delete updatedShoppingCart[coffee.name]
    }

    setShoppingCartFn(updatedShoppingCart)
}