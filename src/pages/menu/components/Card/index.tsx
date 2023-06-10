import { ActionsButtons, Add, BottomActions, CardContainer, CoffeeImage, Count, CounterContainer, FlagContainer, Price, Remove, SquareButton, Subtitle, Tag, Title } from "./style";
import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import { Coffee, Flag } from "../../../../contexts/menu";
import { useCart } from "../../../../contexts/CartContext";

type CardProps = { coffe: Coffee }

export function Card({ coffe }: CardProps) {
    const { addCoffee: handleSetCart } = useCart()

    return (
        <CardContainer>
            <CoffeeImage src={coffe.image}>
                
            </CoffeeImage>
            <FlagContainer>
                {coffe.tag.map((flag: Flag) => {
                    return (
                        <Tag key={flag}>{flag}</Tag>
                    )
                })}
            </FlagContainer>
            <Title>{coffe.name}</Title>
            <Subtitle>{coffe.description}</Subtitle>
            <BottomActions>
                <Price>
                    {coffe.price}
                </Price>
                <ActionsButtons>
                    <CounterContainer>
                        <Remove>
                            <Minus size={14} weight={'light'}/>
                        </Remove>
                        <Count>1</Count>
                        <Add>
                            <Plus size={14} weight={'light'}/>
                        </Add>
                    </CounterContainer>
                    <SquareButton onClick={(e) => handleSetCart(coffe)}>
                        <ShoppingCartSimple size={22} weight={"fill"}/>
                    </SquareButton>
                </ActionsButtons>
            </BottomActions>
        </CardContainer>
    )
}  