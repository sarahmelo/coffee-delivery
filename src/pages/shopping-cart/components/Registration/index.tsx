import { MapPinLine } from "@phosphor-icons/react";
import { Fields, Input, InputContainer } from "./style";
import { FormCard } from "../../../../libs/Form";
import { useCart } from "../../../../contexts/CartContext";
import { DeliveryAddress } from "../../../../contexts/types/delivery-address";

export function Registration() {
    const { setDeliveryAddressFn, deliveryAddress } = useCart();

    const addNewValue = (name: keyof DeliveryAddress, value: string): void => {
        const deliveryAddressWithNewValue: DeliveryAddress = {
            ...deliveryAddress,
            [name]: value
        }

        setDeliveryAddressFn(deliveryAddressWithNewValue)
    }

    return (
        <>
            <FormCard 
                border="rounded"
                hasHeader={true}
                icon={
                    <MapPinLine color="#C47F17" size={22}/>
                }
                title={
                    'Endereço de Entrega'
                }
                subtitle={
                    'Informe o endereço onde deseja receber seu pedido'
                }
            >
                <form>
                    <Fields>
                        <Input
                            type="number" 
                            name="cep" 
                            placeholder="CEP" 
                            inputSize="md" 
                            onChange={(e) => addNewValue('cep',e.target.value)}
                        />
                        <Input 
                            type="text" 
                            name="roal" 
                            placeholder="Rua" 
                            inputSize="lg"
                            onChange={(e) => addNewValue('roal',e.target.value)}
                        />
                        <InputContainer>
                            <Input 
                                type="number" 
                                name="number" 
                                placeholder="Número" 
                                inputSize="md"
                                onChange={(e) => addNewValue('number',e.target.value)}
                            />
                            <Input 
                                type="text" 
                                name="complement" 
                                placeholder="Complemento" 
                                inputSize="lg"
                                onChange={(e) => addNewValue('complement',e.target.value)}
                            />
                        </InputContainer>
                        <InputContainer>
                            <Input 
                                type="text" 
                                name="neighborhood" 
                                placeholder="Bairro" 
                                inputSize="md"
                                onChange={(e) => addNewValue('neighborhood',e.target.value)}
                            />
                            <Input
                                type="text" 
                                name="city" 
                                placeholder="Cidade" 
                                inputSize="lg"
                                onChange={(e) => addNewValue('city',e.target.value)}
                            />
                            <Input 
                                type="text" 
                                name="uf" 
                                placeholder="UF" 
                                inputSize="sm"
                                onChange={(e) => addNewValue('uf',e.target.value)}
                            />
                        </InputContainer>
                    </Fields>
                </form>
            </FormCard>
        </>
    )
}