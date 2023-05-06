import expresso from '../assets/menu/americano.svg'
import americano from '../assets/menu/americano.svg'
import arabe from '../assets/menu/árabe.svg'
import cafeComLeite from '../assets/menu/café-com-leite.svg'
import cafeGelado from '../assets/menu/café-gelado.svg'
import capuccino from '../assets/menu/capuccino.svg'
import chocolateQuente from '../assets/menu/chocolate-quente.svg'
import cubano from '../assets/menu/cubano.svg'
import expressoCremoso from '../assets/menu/expresso-cremoso.svg'
import havaiano from '../assets/menu/havaiano.svg'
import irlandes from '../assets/menu/irlandês.svg'
import latte from '../assets/menu/latte.svg'
import macchiato from '../assets/menu/macchiato.svg'
import mochaccino from '../assets/menu/mochaccino.svg'

export type Coffee = {
    name: CoffeeName;
    tag: Flag[];
    description: string;
    price: string;
    id: number;
    image: string;
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

export type Flag = "quente" | "gelado" | "tradicional" | "com leite" | "especial" | "alcoólico"

export const menuCoffee: Coffee[] = [
    {
        name: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        id: 1,
        price: '9.90',
        tag: [
            "tradicional",
            "quente",
        ],
        image: expresso
    },
    {
        name: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        id: 2,
        price: '9.90',
        tag: [
            "tradicional",
            "quente",
        ],
        image: americano
    },
    {
        name: "Expresso Cremoso",
        description: "Café expresso tradicional com cremosa",
        id: 3,
        price: '9.90',
        tag: [
            "tradicional",
            "quente",
        ],
        image: expressoCremoso
    },
    {
        name: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        id: 4,
        price: '9.90',
        tag: [
            "tradicional",
            "gelado",
        ],
        image: cafeGelado
    },
    {
        name: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        id: 5,
        price: '9.90',
        tag: [
            "tradicional",
            "com leite",
            "quente",
        ],
        image: cafeComLeite
    },
    {
        name: "Latte",
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        id: 6,
        price: '9.90',
        tag: [
            "tradicional",
            "com leite",
            "quente",
        ],
        image: latte
    },
    {
        name: "Capuccino",
        description: "Bebida com canela feita de oses iguais de café, leite e espuma",
        id: 7,
        price: '9.90',
        tag: [
            "tradicional",
            "com leite",
            "quente",
        ],
        image: capuccino
    },
    {
        name: "Macchiato",
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        id: 8,
        price: '9.90',
        tag: [
            "tradicional",
            "com leite",
            "quente",
        ],
        image: macchiato
    },
    {
        name: "Mocaccino",
        description: "Café espresso com calda de chocolate, pouco leite e espuma",
        id: 9,
        price: '9.90',
        tag: [
            "tradicional",
            "com leite",
            "quente",
        ],
        image: mochaccino
    },
    {
        name: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        id: 10,
        price: '9.90',
        tag: [
            "especial",
            "com leite",
            "quente",
        ],
        image: chocolateQuente
    },
    {
        name: "Cubano",
        description: "Drink gelado de café expresso com rum, creme de leite hortelã",
        id: 11,
        price: '9.90',
        tag: [
            "especial",
            "alcoólico",  
            "gelado"    
        ],
        image: cubano
    },
    {
        name: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        id: 12,
        price: '9.90',
        tag: [
            "especial",
            "quente"    
        ],
        image: havaiano
    },
    {
        name: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiaras",
        id: 13,
        price: '9.90',
        tag: [
            "especial",
            "quente",
        ],
        image: arabe
    },
    {
        name: "Irlandês",
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        id: 14,
        price: '9.90',
        tag: [
            "especial",
            "alcoólico",  
            "quente"
        ],
        image: irlandes
    },
]
