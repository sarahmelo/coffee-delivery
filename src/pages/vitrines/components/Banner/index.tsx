import { BannerContainer, CoffeeIllustration, IconContainer, Item, SubTitle, Title } from "./style";
import coffeeIllustration from '../../../../assets/coffee.svg'
import { ShoppingCart } from "@phosphor-icons/react";

export function Banner() {
    return (
        <BannerContainer>
            <div>
                <Title>Encontre o café perfeito para qualquer hora do dia</Title>
                <SubTitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</SubTitle>
                <ul>
                    <Item>
                        <IconContainer backgroundColor="yellowDark">
                            <ShoppingCart size={16} weight={"fill"} color={'white'} />
                        </IconContainer>
                        Compra simples e segura
                    </Item>
                </ul>
            </div>
            <CoffeeIllustration src={coffeeIllustration}/>
        </BannerContainer>
    )
}