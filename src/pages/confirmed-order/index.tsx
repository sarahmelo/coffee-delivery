import { ReactNode } from "react";
import { Headline } from "../../libs/Headline/style";
import { InformativeItem } from "../../libs/InformativeItem";
import { Text } from "../../libs/Text/style";
import { ConfirmedOrderContainer, GradientBorderBox, Informations, TextCollumn } from "./style";
import { MapPin } from "@phosphor-icons/react";

export function ConfirmedOrder() {

    const Address = (): ReactNode => {
        return (
            <Text color="base-subtitle" fontSize="s" as={'p'}>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
            </Text>
        )
    }

    const MoreInfoByAddress = (): ReactNode => {
        return (
            <Text color="base-subtitle" fontSize="s" as={'p'}>
                Farrapos, Porto Alegre - RS
            </Text>
        )
    }

    return (
        <ConfirmedOrderContainer>
            <Informations>
                <TextCollumn>
                    <Headline fontWeigth="800" color="yellow-dark" fontSize="l" as='h2'>
                        Uhu! Pedido confirmado
                    </Headline>
                    <Text color="base-subtitle" fontSize="m" as={'p'}>
                        Agora é só aguardar que logo o café chegará até você
                    </Text>
                </TextCollumn>
                <GradientBorderBox>
                    <InformativeItem 
                        firstText={ Address() }
                        secondText={ MoreInfoByAddress() }
                        icon={<MapPin weight="fill" size={16}></MapPin>}
                        backgroundColor="purple"
                    />
                </GradientBorderBox>
            </Informations>
        </ConfirmedOrderContainer>
    )
}