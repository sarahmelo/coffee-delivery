import { BannerContainer, CoffeeIllustration, IconContainer, Item, ListItems, SubTitle, Title } from "./style";
import coffeeIllustration from '../../../../assets/coffee.svg'
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

export function Banner() {
    return (
        <BannerContainer>
            <div>
                <Title>Encontre o café perfeito para qualquer hora do dia</Title>
                <SubTitle>Com o Coffee Delivery você rec ebe seu café onde estiver, a qualquer hora</SubTitle>
                <ListItems>
                    <Item>
                        <IconContainer backgroundColor="yellowDark">
                            <ShoppingCart size={16} weight={"fill"} color={'white'} />
                        </IconContainer>
                        Compra simples e segura
                    </Item>
                    <Item>
                        <IconContainer backgroundColor="baseText">
                            <Package size={16} weight={"fill"} color={'white'} />
                        </IconContainer>
                        Embalagem mantém o café intacto
                    </Item>
                    <Item>
                        <IconContainer backgroundColor="yellow">
                            <Timer size={16} weight={"fill"} color={'white'} />
                        </IconContainer>
                        Entrega rápida e rastreada
                    </Item>
                    <Item>
                        <IconContainer backgroundColor="purple">
                            <Coffee size={16} weight={"fill"} color={'white'} />
                        </IconContainer>
                        O café chega fresquinho até você
                    </Item>
                </ListItems>
            </div>
        </BannerContainer>
    )
}