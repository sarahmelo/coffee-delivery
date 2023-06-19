import { FormCard } from "../../../../libs/Form";
import { CreditCard, CurrencyDollar } from "@phosphor-icons/react";
import { PaymentMethodForm } from "./style";
import { ToggleButton } from "../../../../libs/ToggleButton";
import { useCart } from "../../../../contexts/CartContext";
import { useState } from "react";

export function PaymentMethod() {
    const [selectedOption, setSelectedOption] = useState('');


    const handleCheckInput = (
       option: string
    ) => {
        setSelectedOption(option)
    }

    const enum paymentMade {
        CREDIT_CARD = 'cartão de crédito',
        DEBIT_CARD = 'cartão de debito',
        MONEY = 'dinheiro',
    }
    

    return (
        <FormCard 
            border="rounded" 
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
            <PaymentMethodForm>
                <ToggleButton 
                    name='payment'
                    icon={<CreditCard/>}
                    payment={paymentMade.CREDIT_CARD}
                    key={paymentMade.CREDIT_CARD}
                    isChecked={selectedOption === paymentMade.CREDIT_CARD}
                    onChangeEvent={() => handleCheckInput(paymentMade.CREDIT_CARD)}
                ></ToggleButton>     
                <ToggleButton 
                    name='payment'
                    icon={<CreditCard/>}
                    payment={paymentMade.DEBIT_CARD}
                    key={paymentMade.DEBIT_CARD}
                    isChecked={selectedOption === paymentMade.DEBIT_CARD}
                    onChangeEvent={() => handleCheckInput(paymentMade.DEBIT_CARD)}
                ></ToggleButton> 
                <ToggleButton 
                    name='payment'
                    icon={<CreditCard/>}
                    payment={paymentMade.MONEY}
                    key={paymentMade.MONEY}
                    isChecked={selectedOption === paymentMade.MONEY}
                    onChangeEvent={() => handleCheckInput(paymentMade.MONEY)}
                ></ToggleButton>   
            </PaymentMethodForm>
        </FormCard>
    )
}