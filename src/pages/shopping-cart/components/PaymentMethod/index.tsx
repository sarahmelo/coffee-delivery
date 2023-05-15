import { Form } from "../../../../libs/Form";
import { CreditCard, CurrencyDollar } from "@phosphor-icons/react";
import { PaymentMethodContent } from "./style";
import { ToggleButton } from "../../../../libs/ToggleButton";
import { useCart } from "../../../../contexts/CartContext";

export function PaymentMethod() {
    const { paymentProviders } = useCart();
    return (
        <Form 
            border="semi-rounded" 
            hasHeader={true} 
            icon={
                <CurrencyDollar 
                    size={22} 
                    color="#8047F8"
                />
            }
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        >
            <PaymentMethodContent>
                {
                    paymentProviders.map((payment) => {
                        return (
                            <ToggleButton 
                                icon={payment.icon}
                                label={payment.name}
                                key={payment.name}
                                id={payment.name}
                            ></ToggleButton>
                        )
                    })
                }       
            </PaymentMethodContent>
        </Form>
    )
}