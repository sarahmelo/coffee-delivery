import { Trash } from "@phosphor-icons/react";
import { Coffee } from "../../contexts/menu";
import { CounterButton } from "../CounterButton";
import { Text } from "../Text/style";
import { ActionButtons, CardCartContainer, CoffeeInfoContainer, CounterActionsContainer, Image } from "./style";
import { ActionButton } from "../CounterButton/style";
import { Headline } from "../Headline/style";
import { useCart } from "../../contexts/CartContext";
import { Button } from "../Button/style";

type CardCartProps = {
    coffee: Coffee
}

export function CardCart({ coffee }: CardCartProps) {
    const { removeItem, addCoffeeInShoppingCart } = useCart();

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
                            sum={() => addCoffeeInShoppingCart(coffee)}
                            subtract={() => removeItem(coffee)}
                        ></CounterButton>
                        <Button
                            backgroundColor="neutral"
                            size="sm"
                            onClick={() => removeItem(coffee)}
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