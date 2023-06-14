import { ActionsButtons, Add, BottomActions, CardContainer, CoffeeImage, Count, CounterContainer, FlagContainer, Price, Remove, SquareButton, Subtitle, Tag, Title } from "./style";
import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import { Coffee, Flag } from "../../../../contexts/menu";
import { useCart } from "../../../../contexts/CartContext";
import { CounterButton } from "../../../../libs/CounterButton";
import { useState } from "react";

type CardProps = { coffee: Coffee }

export function Card({ coffee }: CardProps) {
    const { addCoffee, addQuantityCoffee } = useCart();
    const [counter, setCounter] = useState(1);

    const addQuantityOfCoffee = (): void => {
        let newCounter = counter + 1;

        setCounter(newCounter)
    }

    const removeQuantityOfCoffee = (): void => {
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
                        addCoffee={() => addQuantityOfCoffee()}
                        removeCoffee={() => removeQuantityOfCoffee()}
                        quantity={counter}
                    ></CounterButton>
                }
                    <SquareButton onClick={(e) => addQuantityCoffee(coffee, counter)}>
                        <ShoppingCartSimple size={22} weight={"fill"}/>
                    </SquareButton>
                </ActionsButtons>
            </BottomActions>
        </CardContainer>
    )
}  