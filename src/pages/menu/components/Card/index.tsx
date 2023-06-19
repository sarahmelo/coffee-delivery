import { ActionsButtons, Add, BottomActions, CardContainer, CoffeeImage, Count, CounterContainer, FlagContainer, Price, Remove, SquareButton, Subtitle, Tag, Title } from "./style";
import { ShoppingCartSimple } from "@phosphor-icons/react";
import { useCart } from "../../../../contexts/CartContext";
import { CounterButton } from "../../../../libs/CounterButton";
import { useState } from "react";
import { Coffee, Flag } from "../../../../contexts/type/coffee.types";

type CardProps = { coffee: Coffee }

export function Card({ coffee }: CardProps) {
    const { addAmountOfCoffee } = useCart();
    const [counter, setCounter] = useState(1);

    const add = (): void => {
        let newCounter = counter + 1;

        setCounter(newCounter)
    }

    const decrease = (): void => {
        if (counter === 1) {
            return
        }

        let newCounter = counter - 1;

        setCounter(newCounter)
    }

    return (
        <CardContainer>
            <CoffeeImage src={coffee.image}>
                
            </CoffeeImage>
            <FlagContainer>
                {coffee.tag.map((flag: Flag) => {
                    return (
                        <Tag key={flag}>{flag}</Tag>
                    )
                })}
            </FlagContainer>
            <Title>{coffee.name}</Title>
            <Subtitle>{coffee.description}</Subtitle>
            <BottomActions>
                <Price>
                    {coffee.price}
                </Price>
                <ActionsButtons>
                {
                    <CounterButton
                        key={coffee.uuid}
                        addCoffee={() => add()}
                        removeCoffee={() => decrease()}
                        quantity={counter}
                    ></CounterButton>
                }
                    <SquareButton onClick={(e) => addAmountOfCoffee(coffee, counter)}>
                        <ShoppingCartSimple size={22} weight={"fill"}/>
                    </SquareButton>
                </ActionsButtons>
            </BottomActions>
        </CardContainer>
    )
}  