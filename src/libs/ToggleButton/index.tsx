import { ReactNode, useState } from "react";
import { InvisableInput, ToggleButtonContainer } from "./styled";
import { Text } from "../Text/style";

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
    const [isActive, setIsActive] = useState<boolean>(false)

    return (
        <>
            <ToggleButtonContainer htmlFor={id}>
                {icon}
                <Text color="base-text" fontSize="xxs" as={'p'}>{label}</Text>
            </ToggleButtonContainer>
            <InvisableInput type="radio" id={id} onChange={(e) => console.log(e)}/>
        </>
    )
}