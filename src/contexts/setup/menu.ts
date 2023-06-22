import expresso from '../../assets/menu/americano.svg'
import americano from '../../assets/menu/americano.svg'
import arabe from '../../assets/menu/árabe.svg'
import cafeComLeite from '../../assets/menu/café-com-leite.svg'
import cafeGelado from '../../assets/menu/café-gelado.svg'
import capuccino from '../../assets/menu/capuccino.svg'
import chocolateQuente from '../../assets/menu/chocolate-quente.svg'
import cubano from '../../assets/menu/cubano.svg'
import expressoCremoso from '../../assets/menu/expresso-cremoso.svg'
import havaiano from '../../assets/menu/havaiano.svg'
import irlandes from '../../assets/menu/irlandês.svg'
import latte from '../../assets/menu/latte.svg'
import macchiato from '../../assets/menu/macchiato.svg'
import mochaccino from '../../assets/menu/macchiato.svg'
import { Coffee } from '../types/coffee.types'

export const menuCoffee: Coffee[] = [
    {
        name: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        id: Math.random(),
        price: '9.90',
        tag: [
            "tradicional",
            "quente",
        ],
        image: expresso,
        quantity: 1,
    },
    {
        name: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        id: Math.random(),
        price: '9.90',
        tag: [
            "tradicional",
            "quente",
        ],
        image: americano,
        quantity: 1
    },
    {
        name: "Expresso Cremoso",
        description: "Café expresso tradicional com cremosa",
        id: Math.random(),
        price: '9.90',
        tag: [
            "tradicional",
            "quente",
        ],
        image: expressoCremoso,
        quantity: 1
    },
    {
        name: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        id: Math.random(),
        price: '9.90',
        tag: [
            "tradicional",
            "gelado",
        ],
        image: cafeGelado,
        quantity: 1
    },
    {
        name: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        id: Math.random(),
        price: '9.90',
        tag: [
            "tradicional",
            "com leite",
            "quente",
        ],
        image: cafeComLeite,
        quantity: 1
    },
    {
        name: "Latte",
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        id: Math.random(),
        price: '9.90',
        tag: [
            "tradicional",
            "com leite",
            "quente",
        ],
        image: latte,
        quantity: 1
    },
    {
        name: "Capuccino",
        description: "Bebida com canela feita de oses iguais de café, leite e espuma",
        id: Math.random(),
        price: '9.90',
        tag: [
            "tradicional",
            "com leite",
            "quente",
        ],
        image: capuccino,
        quantity: 1
    },
    {
        name: "Macchiato",
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        id: Math.random(),
        price: '9.90',
        tag: [
            "tradicional",
            "com leite",
            "quente",
        ],
        image: macchiato,
        quantity: 1
    },
    {
        name: "Mocaccino",
        description: "Café espresso com calda de chocolate, pouco leite e espuma",
        id: Math.random(),
        price: '9.90',
        tag: [
            "tradicional",
            "com leite",
            "quente",
        ],
        image: mochaccino,
        quantity: 1
    },
    {
        name: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        id: Math.random(),
        price: '9.90',
        tag: [
            "especial",
            "com leite",
            "quente",
        ],
        image: chocolateQuente,
        quantity: 1
    },
    {
        name: "Cubano",
        description: "Drink gelado de café expresso com rum, creme de leite hortelã",
        id: Math.random(),
        price: '9.90',
        tag: [
            "especial",
            "alcoólico",  
            "gelado"    
        ],
        image: cubano,
        quantity: 1
    },
    {
        name: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        id: Math.random(),
        price: '9.90',
        tag: [
            "especial",
            "quente"    
        ],
        image: havaiano,
        quantity: 1
    },
    {
        name: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiaras",
        id: Math.random(),
        price: '9.90',
        tag: [
            "especial",
            "quente",
        ],
        image: arabe,
        quantity: 1
    },
    {
        name: "Irlandês",
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        id: Math.random(),
        price: '9.90',
        tag: [
            "especial",
            "alcoólico",  
            "quente"
        ],
        image: irlandes,
        quantity: 1
    },
]
