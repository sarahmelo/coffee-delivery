import { Form } from "../../../../libs/Form";
import { CreditCard, CurrencyDollar } from "@phosphor-icons/react";
import { PaymentMethodContent } from "./style";
import { ToggleButton } from "../../../../libs/ToggleButton";

export function PaymentMethod() {
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
                <ToggleButton 
                    icon={<CreditCard/>}
                    label="Cartão de crédito"
                    key={1}
                    id="creditCard"
                ></ToggleButton>
            </PaymentMethodContent>
        </Form>
    )
}