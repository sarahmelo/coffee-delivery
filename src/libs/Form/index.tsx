import { FormContainer, HeaderForm, TextContainer } from "./style";
import { Text } from "../Text/style";
import { FormProps } from "./form.types";

export function Form({
    border,
    hasHeader,
    children,
    icon,
    title,
    subtitle,
}: FormProps ) {
    return (
        <FormContainer 
            backgroundColor="base-card" 
            border={border}
        >
            {
                hasHeader ? (
                    <HeaderForm>
                        {icon}
                        <TextContainer>
                            <Text color="base-subtitle" fontSize="m"> 
                                {title}
                            </Text>
                            <Text color="base-text" fontSize="s">
                                {subtitle}
                            </Text>
                        </TextContainer>
                    </HeaderForm>
                ) : ''
            }
            {children}
        </FormContainer>
    )
}