import { BannerContainer, CoffeeIllustration, IconContainer, Item, ListItems, SubTitle, Title } from "./style";
import coffeeIllustration from '../../../../assets/coffee.svg'
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

export function Banner() {
    const getWindowSize = (): { innerHeight: number; innerWidth: number; } => {
        const { innerWidth, innerHeight } = window;
        return { innerHeight, innerWidth }
    }
    
    const [windowSize, setWindowSize] = useState(getWindowSize())

    useEffect(() => {
        handleWindowResize();

        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    const handleWindowResize = (): void => {
        setWindowSize(getWindowSize())
    }

    return (
        <BannerContainer>
            <div>
                <Title>Encontre o café perfeito para qualquer hora do dia</Title>
                <SubTitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</SubTitle>
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