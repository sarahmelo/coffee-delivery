import { Headline } from "../../libs/Headline/style";
import { Text } from "../../libs/Text/style";
import { CartItems } from "./components/CartItems";
import { PaymentMethod } from "./components/PaymentMethod";
import { Registration } from "./components/Registration";
import { FirstStep, PaymentRegister, SecondStep, ShoppingCartContainer } from "./styled";

export function ShoppingCart() {
    return (
        <ShoppingCartContainer>
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
        </ShoppingCartContainer>
    )
}