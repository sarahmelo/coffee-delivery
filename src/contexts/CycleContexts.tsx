import { createContext, ReactNode } from "react";

export interface Coffee {
    name: CoffeeName;
    tag: TagName[];
    description: string;
    price: number;
    id: number;
}

export type CoffeeName = 
    "Expresso Tradicional" | 
    "Expresso Americano" | 
    "Expresso Cremoso" |
    "Expresso Gelado" |
    "Café com Leite" |
    "Latte" | 
    "Capuccino" |
    "Macchiato" |
    "Mocaccino" |
    "Chocolate Quente" |
    "Cubano" |
    "Havaiano" |
    "Árabe" |
    "Irlandês"

export type TagName = "quente" | "gelado" | "tradicional" | "com leite" | "especial" | "alcoólico"

export const menuCoffee: Coffee[] = [
    {
        name: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        id: 1,
        price: 9.90,
        tag: [
            "tradicional",
            "quente",
        ]
    },
    {
        name: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        id: 2,
        price: 9.90,
        tag: [
            "tradicional",
            "quente",
        ]
    },
    {
        name: "Expresso Cremoso",
        description: "Café expresso tradicional com cremosa",
        id: 3,
        price: 9.90,
        tag: [
            "tradicional",
            "quente",
        ]
    },
    {
        name: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        id: 4,
        price: 9.90,
        tag: [
            "tradicional",
            "gelado",
        ]
    },
    {
        name: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        id: 5,
        price: 9.90,
        tag: [
            "tradicional",
            "quente",
            "com leite",
        ]
    },
    {
        name: "Latte",
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        id: 6,
        price: 9.90,
        tag: [
            "tradicional",
            "quente",
            "com leite",
        ]
    },
    {
        name: "Capuccino",
        description: "Bebida com canela feita de oses iguais de café, leite e espuma",
        id: 7,
        price: 9.90,
        tag: [
            "tradicional",
            "quente",
            "com leite",
        ]
    },
    {
        name: "Macchiato",
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        id: 8,
        price: 9.90,
        tag: [
            "tradicional",
            "quente",
            "com leite",
        ]
    },
    {
        name: "Mocaccino",
        description: "Café espresso com calda de chocolate, pouco leite e espuma",
        id: 9,
        price: 9.90,
        tag: [
            "tradicional",
            "quente",
            "com leite",
        ]
    },
    {
        name: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        id: 10,
        price: 9.90,
        tag: [
            "especial",
            "quente",
            "com leite",
        ]
    },
    {
        name: "Cubano",
        description: "Drink gelado de café expresso com rum, creme de leite hortelã",
        id: 11,
        price: 9.90,
        tag: [
            "especial",
            "gelado"    
        ]
    },
    {
        name: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        id: 12,
        price: 9.90,
        tag: [
            "especial",
            "quente"    
        ]
    },
    {
        name: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiaras",
        id: 13,
        price: 9.90,
        tag: [
            "especial",
            "quente",
            "alcoólico"   
        ]
    },
]

export interface CycleContextsProps {
    addItemsToCart: () => void
    addItems: () => void
    removeItems: () => void
    amountCounter: number
    menu: Coffee[]
}

export const CyclesContext = createContext({ } as CycleContextsProps)

interface CyclesContextProviderProps {
    children: ReactNode
}

export function CyclesContextProvider({
    children,
}: CyclesContextProviderProps) {

}