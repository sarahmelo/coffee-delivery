import { ReactNode } from "react";

export type Border = 'semi-rounded' | 'rounded';

export type FormProps = {
    hasHeader: boolean;
    border: Border;
    title?: ReactNode;
    subtitle?: ReactNode;
    children: ReactNode;
    icon?: ReactNode;
}