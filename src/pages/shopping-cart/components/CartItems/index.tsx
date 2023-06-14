import React from "react";
import { useCart } from "../../../../contexts/CartContext";
import { Coffee } from "../../../../contexts/menu";
import { Button } from "../../../../libs/Button/style";
import { CardCart } from "../../../../libs/CardCart";
import { Form } from "../../../../libs/Form";
import { Headline } from "../../../../libs/Headline/style";
import { Text } from "../../../../libs/Text/style";
import { CartItemsContainer, Divider, Footer, ListItems, PaymentNote, PaymentNoteInfo } from "./style";

export function CartItems() {
    const { shoppingCart } = useCart();

    const renderCoffeeList = (): React.ReactNode => {
        const keys = Object.keys(shoppingCart)
        const list = [];

        for (let key of keys) {
            const coffees: Coffee[] = shoppingCart[key]

            list.push(
                <CardCart 
                    coffee={coffees[0]}
                    key={coffees[0].id}  
                    quantity={coffees.length}  
                />
            )
        }

        return list
    }

    const getTotal = (): number => {
        let price: number = 0;

        for (let coffeeGroup in shoppingCart) {
            const coffeeGroupQuantity: number = Object.values(
                shoppingCart[coffeeGroup]
            ).length;

            price += coffeeGroupQuantity
        }

        return 9.90 * price
    }

    const getTotalWithRate = (): number => {
        return getTotal() + 3.50;
    }

    return (
        <CartItemsContainer>
            <Form 
                border="semi-rounded"
                hasHeader={false}
            >
                {}
                <ListItems>
                    {renderCoffeeList()}
                </ListItems>
                <Footer>
                    <PaymentNote>
                        <PaymentNoteInfo>
                            <Text fontSize="xs" color="base-text">Total de items</Text>
                            <Text fontSize="xs" color="base-text" as={'p'}>R$ {getTotal()}</Text>
                        </PaymentNoteInfo>
                        <PaymentNoteInfo>
                            <Text fontSize="xs" color="base-text">Entrega</Text>
                            <Text fontSize="xs" color="base-text">R$ 3,50</Text>
                        </PaymentNoteInfo>
                        <PaymentNoteInfo>
                            <Headline fontSize="xs" color="base-text">Total</Headline>
                            <Headline fontSize="m" color="base-text">R$ {getTotalWithRate()}</Headline>
                        </PaymentNoteInfo>
                    </PaymentNote>
                    <Button size="lg" backgroundColor="yellow">
                        <Text color="neutral" fontSize="s">Confirmar Pedido</Text>
                    </Button>
                </Footer>
            </Form>
        </CartItemsContainer>
    )
}