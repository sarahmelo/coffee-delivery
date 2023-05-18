import { useCart } from "../../../../contexts/CartContext";
import { Coffee } from "../../../../contexts/menu";
import { Button } from "../../../../libs/Button/style";
import { CardCart } from "../../../../libs/CardCart";
import { Form } from "../../../../libs/Form";
import { Headline } from "../../../../libs/Headline/style";
import { Text } from "../../../../libs/Text/style";
import { CartItemsContainer, Divider, Footer, ListItems, PaymentNote, PaymentNoteInfo } from "./style";

export function CartItems() {
    const { coffeCart } = useCart()

    const sumSelectedItems = (): number => {
        let sum: number = 0;

        coffeCart.map((coffe: Coffee) => {
            const coffePrice: number = parseFloat(coffe.price.replace(',', '.'));
            
            sum += coffePrice;
        })

        return sum
    }

    const sumTotal = (): number => {
        return sumSelectedItems() + 3.50
    }

    return (
        <CartItemsContainer>
            <Form 
                border="semi-rounded"
                hasHeader={false}
            >
                <ListItems>
                    {
                        coffeCart.map((coffee) => {
                            return (
                                <>
                                    <CardCart coffee={coffee} />
                                    <Divider/>
                                </>
                            )
                        })
                    }
                </ListItems>
                <Footer>
                    <PaymentNote>
                        <PaymentNoteInfo>
                            <Text fontSize="xs" color="base-text">Total de items</Text>
                            <Text fontSize="xs" color="base-text" as={'p'}>R$ {sumSelectedItems()}</Text>
                        </PaymentNoteInfo>
                        <PaymentNoteInfo>
                            <Text fontSize="xs" color="base-text">Entrega</Text>
                            <Text fontSize="xs" color="base-text">R$ 3,50</Text>
                        </PaymentNoteInfo>
                        <PaymentNoteInfo>
                            <Headline fontSize="xs" color="base-text">Total</Headline>
                            <Headline fontSize="m" color="base-text">R$ {sumTotal()}</Headline>
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