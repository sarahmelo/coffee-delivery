import { Minus, Plus } from "@phosphor-icons/react";
import { Text } from "../Text/style";
import { ActionButton, CounterButtonContainer } from "./style";

export function CounterButton() {
    return (
        <CounterButtonContainer>
            <ActionButton>
                <Minus size={14} weight={'light'}/>
            </ActionButton>
            <Text color="base-text" fontSize="xs">1</Text>
            <ActionButton>
                <Plus size={14} weight={'light'}/>
            </ActionButton>
        </CounterButtonContainer>
    )
}