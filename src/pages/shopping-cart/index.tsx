import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { Button } from "../../libs/Button/style";
import { Headline } from "../../libs/Headline/style";
import { Text } from "../../libs/Text/style";
import { CartItems } from "./components/CartItems";
import { PaymentMethod } from "./components/PaymentMethod";
import { Registration } from "./components/Registration";
import { EmptyShoppingCart, FirstStep, PaymentRegister, SecondStep, ShoppingCartContainer } from "./styled";

export function ShoppingCart() {
    const { shoppingCart } = useCart();

    const hasItemsInShoppingCart = (): boolean => {
        return Object.keys(shoppingCart).length !== 0
    }

    return (
        <ShoppingCartContainer>
            { hasItemsInShoppingCart()
            ? <>
                <FirstStep>
                    <Headline 
                        color="base-subtitle" 
                        fontSize="xs"
                    >
                        Complete seu pedido
                    </Headline>
                    <PaymentRegister>
                        <Registration />
                        <PaymentMethod />
                    </PaymentRegister>
                </FirstStep>
                <SecondStep>
                    <Headline 
                        color="base-subtitle" 
                        fontSize="xs"
                    >
                        Cafés selectionados
                    </Headline>
                    <CartItems></CartItems>
                </SecondStep>
            </>
            : 
            <EmptyShoppingCart>
                <Headline fontSize="m" color="base-title" as={'p'}>Sua sacola está vazia ):</Headline>
                <Text color="base-text" fontSize="m" as={'p'}>Dê uma olhada em nossas deliciosas opcões de café!</Text>
                <div>
                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <Button backgroundColor="purple-light" size="sm">
                            <Text color="purple" fontSize="s">Escolher café</Text>
                        </Button>
                    </Link>
                </div>
            </EmptyShoppingCart>
            }
        </ShoppingCartContainer>
    )
}