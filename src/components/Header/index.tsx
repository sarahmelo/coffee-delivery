import { TranslucentButton, NavigationContent, Logo, HeaderApp, Chip } from "./styles";
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";
import React from "react";
import { useCart } from "../../contexts/CartContext";

export function Header() {
    const { coffeCart } = useCart()

    return (
        <HeaderApp>
            <Link to={'/'}>
                <Logo src={logo} alt=""/>
            </Link>
            <NavigationContent>
                <TranslucentButton 
                    backgroundColor="purple-light" 
                    color="purple"
                >
                    <MapPin 
                        size={22}
                        weight={"fill"}
                    />
                    Porto Alegre, RS
                </TranslucentButton>
                <Link to={'/shopping-cart'}>
                    <TranslucentButton 
                        backgroundColor="yellow-light" 
                        color="yellow-dark"
                    >
                        <Chip
                            color="white" 
                            backgroundColor="yellow-dark"
                        >
                            {coffeCart.length}
                        </Chip>
                        <ShoppingCart 
                            size={22} 
                            weight={"fill"}
                        />
                    </TranslucentButton>
                </Link>
            </NavigationContent>
        </HeaderApp>
    )
}