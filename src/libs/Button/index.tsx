import { DefaultTheme } from "styled-components";
import { ButtonContainer } from "./style";
import { ReactNode } from "react";
import { SizeButton } from './type/size-button.type'

type ButtonProps = {
    size: keyof SizeButton,
    icon?: ReactNode,
    backgroundColor: keyof DefaultTheme['brand'],
    children: ReactNode,
}

export function Button({
    size,
    icon,
    backgroundColor,
    children
}: ButtonProps) {
    return (
        <ButtonContainer 
            size={size} 
            backgroundColor={backgroundColor}
        >
            {icon}
            {children}
        </ButtonContainer>
    )
}