import { Minus, Plus } from "@phosphor-icons/react";
import { Text } from "../Text/style";
import { ActionButton, CounterButtonContainer } from "./style";
import { Coffee } from "../../contexts/menu";

export type CounterButtonProps = {
    subtract: () => void;
    sum: () => void;
}

export function CounterButton({
    subtract,
    sum,
}: CounterButtonProps) {
    return (
        <CounterButtonContainer>
            <ActionButton
                onClick={subtract}
            >
                <Minus size={14} weight={'light'}/>
            </ActionButton>
            <Text color="base-text" fontSize="xs">1</Text>
            <ActionButton
                onClick={sum}
            >
                <Plus size={14} weight={'light'}/>
            </ActionButton>
        </CounterButtonContainer>
    )
}