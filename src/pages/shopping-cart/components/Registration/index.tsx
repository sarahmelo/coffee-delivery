import { MapPinLine } from "@phosphor-icons/react";
import { Fields, Input, InputContainer } from "./style";
import { FormCard } from "../../../../libs/Form";
import { useCart } from "../../../../contexts/CartContext";

export function Registration() {
    const title: string = 'Endereço de Entrega'
    const subtitle: string = 'Informe o endereço onde deseja receber seu pedido'

    return (
        <>
            <FormCard 
                border="rounded"
                hasHeader={true}
                icon={
                    <MapPinLine color="#C47F17" size={22}/>
                }
                title={title}
                subtitle={subtitle}
            >
                <form>
                    <Fields>
                        <Input name="cep" placeholder="CEP" inputSize="md" />
                        <Input name="road" placeholder="Rua" inputSize="lg"/>
                        <InputContainer>
                            <Input name="houseNumber" placeholder="Número" inputSize="md"/>
                            <Input name="complement" placeholder="Complemento" inputSize="lg"/>
                        </InputContainer>
                        <InputContainer>
                            <Input name="neighborhood" placeholder="Bairro" inputSize="md"/>
                            <Input name="city" placeholder="Cidade" inputSize="lg"/>
                            <Input name="uf" placeholder="UF" inputSize="sm"/>
                        </InputContainer>
                    </Fields>
                </form>
            </FormCard>
        </>
    )
}