import { ReactNode } from "react";
import { Headline } from "../../libs/Headline/style";
import { InformativeItem } from "../../libs/InformativeItem";
import { Text } from "../../libs/Text/style";
import { ConfirmedOrderContainer, Illustration, Informations, InformativeCardItemContainer, TextCollumn } from "./style";
import { CurrencyCny, CurrencyDollar, MapPin, Money, Timer } from "@phosphor-icons/react";
import { Card } from "../../libs/Card/style";
import deliveryManIllustration from '../../assets/Illustration.svg'
import { useCart } from "../../contexts/CartContext";

export function ConfirmedOrder() {
    const { deliveryAddress } = useCart();

    const Address = (): ReactNode => {
        return (
            <Text color="base-subtitle" fontSize="s" as={'p'}>
                Entrega em <strong>{deliveryAddress.roal}, {deliveryAddress.number} - {deliveryAddress.complement}</strong>
            </Text>
        )
    }

    const MoreInfoByAddress = (): ReactNode => {
        return (
            <Text color="base-subtitle" fontSize="s" as={'p'}>
                { deliveryAddress.neighborhood }, {deliveryAddress.city} - {deliveryAddress.uf}
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
                <Card>
                    <InformativeCardItemContainer>
                        <InformativeItem 
                            firstText={ Address() }
                            secondText={ MoreInfoByAddress() }
                            icon={<MapPin weight="fill" size={16}></MapPin>}
                            backgroundColor="purple"
                        />
                        <InformativeItem 
                            firstText={ 
                                <Text color="base-text" fontSize="s">
                                    Previsão de entrega
                                </Text> 
                            }
                            secondText={
                                <Text color="base-text" fontSize="s">
                                    <strong>20 min - 30 min</strong>
                                </Text> 
                            }
                            icon={<Timer weight="fill" size={16}></Timer>}
                            backgroundColor="yellow"
                        />
                        <InformativeItem 
                            firstText={ 
                                <Text color="base-text" fontSize="s"> 
                                    Pagamento na entrega
                                </Text>
                            }
                            secondText={ 
                                <Text color="base-text" fontSize="s">
                                    <strong>{deliveryAddress.paymentSelected}</strong>
                                </Text> 
                            }
                            icon={<CurrencyDollar size={16}></CurrencyDollar>}
                            backgroundColor="yellow-dark"
                        />
                    </InformativeCardItemContainer>
                </Card>
            </Informations>
            <Illustration src={deliveryManIllustration} />
        </ConfirmedOrderContainer>
    )
}