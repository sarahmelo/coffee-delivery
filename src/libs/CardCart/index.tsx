import { Trash } from "@phosphor-icons/react";
import { Coffee } from "../../contexts/menu";
import { Button } from "../Button";
import { CounterButton } from "../CounterButton";
import { Text } from "../Text/style";
import { ActionButtons, CardCartContainer, CoffeeInfoContainer, CounterActionsContainer, Image } from "./style";
import { ActionButton } from "../CounterButton/style";
import { Headline } from "../Headline/style";

type CardCartProps = {
    coffe: Coffee
}

export function CardCart({ coffe }: CardCartProps) {
    return (
        <CardCartContainer>
            <CoffeeInfoContainer>
                <Image src={coffe.image} />
                <CounterActionsContainer>
                    <Text color="base-text" fontSize="m">
                        {coffe.name}
                    </Text>
                    <ActionButtons>
                        <CounterButton></CounterButton>
                        <Button icon={
                            <Trash size={16} color="#8047F8"/>
                        } 
                            backgroundColor="neutral"
                            size="sm"
                        >
                            <Text 
                                color="base-text" 
                                fontSize="xs" 
                                as={'p'}
                            >Remover</Text>
                        </Button>
                    </ActionButtons>
                </CounterActionsContainer>
            </CoffeeInfoContainer>
            <Headline color="base-text" fontSize="xs">R${coffe.price}</Headline>
        </CardCartContainer>
    )
}