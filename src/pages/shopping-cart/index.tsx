import { PaymentMethod } from "./components/PaymentMethod";
import { Registration } from "./components/Registration";
import { PaymentRegister, ShoppingCartContainer } from "./styled";

export function ShoppingCart() {
    return (
        <ShoppingCartContainer>
            <PaymentRegister>
                <Registration />
                <PaymentMethod />
            </PaymentRegister>
        </ShoppingCartContainer>
    )
}