import { Icon, IconBase } from "@phosphor-icons/react"

export type Payment = 'cartão de crédito' | 'cartão de débito' | 'dinheiro'
export type PaymentProviderProps = {
    name: Payment,
    icon: JSX.Element
}