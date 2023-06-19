import { TranslucentButton, NavigationContent, Logo, HeaderApp, Chip } from "./styles";
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useCart } from "../../contexts/CartContext";
import { Text } from "../../libs/Text/style";

export function Header() {
    const { shoppingCart } = useCart()

    const hasItemInShoppingCart = (): number => {
        const coffeeGroup = Object.keys(shoppingCart);
        let quantity: number = 0;

        for(let index = 0; index < coffeeGroup.length; index++) {
            const coffeeKey = coffeeGroup[index];
            const coffee = shoppingCart[coffeeKey];

            quantity += Object.values(coffee).length
        }

        return quantity
    }

    useEffect(() => {
        hasItemInShoppingCart()
    }, [shoppingCart])
    
    return (
        <HeaderApp>
            <Link to={'/'}>
                <Logo src={logo} alt=""/>
            </Link>
            <NavigationContent>
                <Link to={'https://github.com/sarahmelo'} >
                    <TranslucentButton 
                        backgroundColor="purple-light" 
                        color="purple"
                    >
                        <MapPin 
                            size={22}
                            weight={"fill"}
                        />
                        <Text color="purple" fontSize="xs" as={'a'}>
                            github.com/sarahmelo
                        </Text>
                    </TranslucentButton>
                </Link>
                {
                    hasItemInShoppingCart() ?
                    <Link to={'/shopping-cart'}>
                        <TranslucentButton 
                            backgroundColor="yellow-light" 
                            color="yellow-dark"
                        >
                            <Chip
                                color="white" 
                                backgroundColor="yellow-dark"
                            >
                                {hasItemInShoppingCart()}
                            </Chip>
                            <ShoppingCart 
                                size={22} 
                                weight={"fill"}
                            />
                        </TranslucentButton>
                    </Link>
                    :
                    <TranslucentButton 
                            backgroundColor="yellow-light" 
                            color="yellow-dark"
                        >
                        <ShoppingCart 
                            size={22} 
                            weight={"fill"}
                        />
                    </TranslucentButton>
                }
            </NavigationContent>
        </HeaderApp>
    )
}