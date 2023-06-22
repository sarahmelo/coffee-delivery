import { Trash } from "@phosphor-icons/react";
import { CounterButton } from "../CounterButton";
import { Text } from "../Text/style";
import { ActionButtons, CardCartContainer, CoffeeInfoContainer, CounterActionsContainer, Image } from "./style";
import { ActionButton } from "../CounterButton/style";
import { Headline } from "../Headline/style";
import { useCart } from "../../contexts/CartContext";
import { Button } from "../Button/style";
import { Coffee } from "../../contexts/types/coffee.types";

type CardCartProps = {
    coffee: Coffee,
    quantity: number,
}

export function CardCart({ 
    coffee,
    quantity,
}: CardCartProps) {
    const {
        removeCoffee, 
        removeAllCoffee, 
        addCoffee 
} = useCart();

    return (
        <CardCartContainer>
            <CoffeeInfoContainer>
                <Image src={coffee.image} />
                <CounterActionsContainer>
                    <Text 
                        color="base-text" 
                        fontSize="m"
                    >
                        {coffee.name}
                    </Text>
                    <ActionButtons>
                        <CounterButton
                            key={coffee.uuid}
                            addCoffee={() => addCoffee(coffee)}
                            removeCoffee={() => removeCoffee(coffee)}
                            quantity={quantity}
                        ></CounterButton>
                        <Button
                            backgroundColor="neutral"
                            size="sm"
                            onClick={() => removeAllCoffee(coffee)}
                        >
                            <Trash 
                                size={16} 
                                fill="#8047F8"
                            ></Trash>
                            <Text 
                                color="base-text" 
                                fontSize="xs" 
                                as={'p'}
                            >
                                Remover
                            </Text>
                        </Button>
                    </ActionButtons>
                </CounterActionsContainer>
            </CoffeeInfoContainer>
            <Headline 
                color="base-text" 
                fontSize="xs"
            >
                R${coffee.price}
            </Headline>
        </CardCartContainer>
    )
}