import { Icon } from "@phosphor-icons/react";
import { Text } from "../Text/style";
import { IconContainer, IconContainerProps, InformativeItemContainer, TextContainer } from "./style";
import { ReactNode } from "react";

type InformativeItemProps = {
    firstText: ReactNode;
    secondText?: ReactNode;
    icon: ReactNode;
    backgroundColor: IconContainerProps['backgroundColor'];
}

export function InformativeItem({
    firstText,
    secondText = '',
    icon,
    backgroundColor,
}: InformativeItemProps) {
    return (
        <InformativeItemContainer>
            <IconContainer backgroundColor={ backgroundColor }>
                { icon }
            </IconContainer>
            <TextContainer>
                <div>
                    { firstText }
                </div>
                <div>
                    { secondText }
                </div>
            </TextContainer>
        </InformativeItemContainer>
    )
}