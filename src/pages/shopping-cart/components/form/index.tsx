import { MapPinLine } from "@phosphor-icons/react";
import { Headline } from "../../../../components/Headline/style";
import { Text } from "../../../../components/Text/style";
import { Form, Header, HeaderTextContainer } from "./style";

export function RegisterCard() {
    return (
        <>
            <Headline 
                color="base-subtitle" 
                fontSize="xs" 
                as={'h2'}
            >
                Complete seu pedido
            </Headline>
            <Form backgroundColor="base-card">
                <Header>
                    <MapPinLine fontSize={22} color="#C47F17"/>
                    <HeaderTextContainer>
                        <Text color="base-subtitle" fontSize="m">Endereço de Entrega</Text>
                        <Text color="base-text" fontSize="s">Informe o endereço onde deseja receber seu pedido</Text>
                    </HeaderTextContainer>
                </Header>
            </Form>
        </>
    )
}