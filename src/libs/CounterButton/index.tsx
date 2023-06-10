import { Minus, Plus } from "@phosphor-icons/react";
import { Text } from "../Text/style";
import { ActionButton, CounterButtonContainer } from "./style";
import { Coffee } from "../../contexts/menu";

export type CounterButtonProps = {
    removeCoffee: () => void;
    addCoffee: () => void;
    quantity: number;
}

export function CounterButton({
    removeCoffee,
    addCoffee,
    quantity,
}: CounterButtonProps) {
    return (
        <CounterButtonContainer>
            <ActionButton
                onClick={removeCoffee}
            >
                <Minus size={14} weight={'light'}/>
            </ActionButton>
            <Text color="base-text" fontSize="xs">{quantity}</Text>
            <ActionButton
                onClick={addCoffee}
            >
                <Plus size={14} weight={'light'}/>
            </ActionButton>
        </CounterButtonContainer>
    )
}