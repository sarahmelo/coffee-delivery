import { StringLiteral } from "typescript";
import { ActionsButtons, Add, BottomActions, CardContainer, CoffeeImage, Count, CounterContainer, FlagContainer, Price, Remove, SquareButton, Subtitle, Tag, Title } from "./style";
import coffee from '../../../../assets/menu/café-com-leite.svg'
import { Minus, Plus, ShoppingCart, ShoppingCartSimple } from "@phosphor-icons/react";

type CardProps = {
    coffeeImage: string;
    status: string;
    title: string;
    description: StringLiteral;
    value: number;
    quantity: number;
    onAddToCart: () => void;
}

export function Card() {
    return (
        <CardContainer>
            <CoffeeImage src={coffee}>
                
            </CoffeeImage>
            <FlagContainer>
                <Tag>tradicional</Tag>
                <Tag>com leite</Tag>
                <Tag>quente</Tag>
            </FlagContainer>
            <Title>Expresso Tradicional</Title>
            <Subtitle>O tradicional café feito com água quente e grãos moídos</Subtitle>
            <BottomActions>
                <Price>
                    9,90
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
                    <SquareButton>
                        <ShoppingCartSimple size={22} weight={"fill"}/>
                    </SquareButton>
                </ActionsButtons>
            </BottomActions>
        </CardContainer>
    )
}  