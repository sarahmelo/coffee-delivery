import React, { ReactNode, useState } from "react";
import { InvisableInput, ToggleButtonContainer } from "./styled";
import { Text } from "../Text/style";

type ToggleButtonProps = {
    name: string;
    icon: ReactNode;
    isChecked: boolean;
    onChangeEvent: () => void;
}

export const ToggleButton = ({ 
    name, 
    icon,
    isChecked,
    onChangeEvent,
}: ToggleButtonProps) => {
    return (
        <>
            <ToggleButtonContainer 
                htmlFor={name}
                isChecked={isChecked}
            >
                {icon}
                <Text 
                    color="base-text" 
                    fontSize="xs" 
                    as={'p'}
                >{name}</Text>
            </ToggleButtonContainer>
            <InvisableInput 
                type="radio" 
                id={name} 
                checked={isChecked}
                onChange={() => onChangeEvent()}
            />
        </>
    )
}