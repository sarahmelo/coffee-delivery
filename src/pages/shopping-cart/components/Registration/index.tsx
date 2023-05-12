import { MapPinLine } from "@phosphor-icons/react";
import { Fields, Input, InputContainer } from "./style";
import { Form } from "../../../../libs/Form";
import { } from '../../../../libs/Text/style'

export function Registration() {
    const title: string = 'Endereço de Entrega'
    const subtitle: string = 'Informe o endereço onde deseja receber seu pedido'
    
    return (
        <>
            <Form 
                border="rounded"
                hasHeader={true}
                icon={
                    <MapPinLine color="#C47F17" size={22}/>
                }
                title={title}
                subtitle={subtitle}
            >
                <Fields>
                    <Input placeholder="CEP" inputSize="md" />
                    <Input placeholder="Rua" inputSize="lg"/>
                    <InputContainer>
                        <Input placeholder="Número" inputSize="md"/>
                        <Input placeholder="Complemento" inputSize="lg"/>
                    </InputContainer>
                    <InputContainer>
                        <Input placeholder="Bairro" inputSize="md"/>
                        <Input placeholder="Cidade" inputSize="lg"/>
                        <Input placeholder="UF" inputSize="sm"/>
                    </InputContainer>
                </Fields>
            </Form>
        </>
    )
}