import { Background, BannerContainer, CoffeeIllustration, IconContainer, Item, ListItems, TextContainer } from "./style";
import coffeeIllustration from '../../../../assets/coffee.svg'
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import background from '../../../../assets/background.png'
import { Headline } from "../../../../libs/Headline/style";
import { Text } from "../../../../libs/Text/style";

export function Banner() {
    return (
        <BannerContainer>
            <Background src={background} />
            <div>
                <TextContainer>
                    <Headline 
                        color="base-title" 
                        fontSize="xl" 
                        as={'h1'} 
                        fontWeigth="800"
                        style={{ lineHeight: 1.2 }}
                    >
                        Encontre o café perfeito para qualquer hora do dia
                    </Headline>
                    <Text 
                        color="base-subtitle" 
                        fontSize="l" 
                        as={'p'}
                    >
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora!
                    </Text>
                </TextContainer>
                <ListItems>
                    <Item>
                        <IconContainer color="yellow-dark">
                            <ShoppingCart size={16} weight={"fill"} color={'white'} />
                        </IconContainer>
                        <Text color="base-text" fontSize="m">
                            Compra simples e segura
                        </Text>
                    </Item>
                    <Item>
                        <IconContainer color="base-text">
                            <Package size={16} weight={"fill"} color={'white'} />
                        </IconContainer>
                        <Text color="base-text" fontSize="m">
                            Embalagem mantém o café intacto
                        </Text>
                    </Item>
                    <Item>
                        <IconContainer color="yellow">
                            <Timer size={16} weight={"fill"} color={'white'} />
                        </IconContainer>
                        <Text color="base-text" fontSize="m">
                            Entrega rápida e rastreada
                        </Text>
                    </Item>
                    <Item>
                        <IconContainer color="purple">
                            <Coffee size={16} weight={"fill"} color={'white'} />
                        </IconContainer>
                        <Text color="base-text" fontSize="m">
                            O café chega fresquinho até você
                        </Text>
                    </Item>
                </ListItems>
            </div>
            <CoffeeIllustration src={coffeeIllustration} />
        </BannerContainer>
    )
}