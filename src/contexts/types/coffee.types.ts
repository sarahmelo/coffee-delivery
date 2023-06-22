export type CoffeeGroup = { [name: string]: Coffee[] }

export type Coffee = {
    name: CoffeeName;
    tag: Flag[];
    description: string;
    price: string;
    id: number;
    image: string;
    uuid?: number;
    quantity: number;
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

export type Flag = 
    "quente" | 
    "gelado" | 
    "tradicional" | 
    "com leite" | 
    "especial" | 
    "alcoólico"
