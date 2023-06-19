import React, { ReactNode, useState } from "react";
import { InvisableInput, ToggleButtonContainer } from "./styled";
import { Text } from "../Text/style";

type ToggleButtonProps = {
    payment: string;
    icon: ReactNode;
    isChecked: boolean;
    name: string;
    onChangeEvent: () => void;
}

export const ToggleButton = ({ 
    payment, 
    icon,
    isChecked,
    onChangeEvent,
    name,
}: ToggleButtonProps) => {
    return (
        <>
            <ToggleButtonContainer 
                htmlFor={payment}
                isChecked={isChecked}
            >
                {icon}
                <Text 
                    color="base-text" 
                    fontSize="xs" 
                    as={'p'}
                >{payment}</Text>
            </ToggleButtonContainer>
            <InvisableInput 
                type="radio" 
                id={payment} 
                checked={isChecked}
                name={name}
                onChange={() => onChangeEvent()}
            />
        </>
    )
}