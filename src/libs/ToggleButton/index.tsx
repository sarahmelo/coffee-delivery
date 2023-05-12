import { ReactNode } from "react";
import { InvisableInput, ToggleButtonContainer } from "./styled";

type ToggleButtonProps = {
    label: string;
    icon: ReactNode;
    id: string;
}

export const ToggleButton = ({ 
    label, 
    icon,
    id,
}: ToggleButtonProps): JSX.Element => {
    return (
        <>
            <ToggleButtonContainer htmlFor={id}>
                {icon}
                {label}
            </ToggleButtonContainer>
            <InvisableInput type="radio" id={id}/>
        </>
    )
}