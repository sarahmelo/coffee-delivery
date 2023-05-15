import { ReactNode } from "react";

export type Border = 'semi-rounded' | 'rounded';

export const BorderRadius = {
    'semi-rounded': '6px 44px',
    'rounded': '6px'
}

export type FormProps = {
    hasHeader: boolean;
    border: keyof typeof BorderRadius;
    title?: ReactNode;
    subtitle?: ReactNode;
    children: ReactNode;
    icon?: ReactNode;
}