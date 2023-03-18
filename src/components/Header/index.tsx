import { TranslucentButton, NavigationContent, Logo, HeaderApp } from "./styles";
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logo from '../../assets/logo.svg'

export function Header() {
    return (
        <HeaderApp>
            <Logo src={logo} alt="" />
            <NavigationContent>
                <TranslucentButton 
                    backgroundColor="purpleLight" 
                    textColor="purple"
                >
                    <MapPin 
                        size={22}
                        weight={"fill"}
                    />
                    Porto Alegre, RS
                </TranslucentButton>
                <TranslucentButton 
                    backgroundColor="yellowLight" 
                    textColor="yellowDark"
                >
                    <ShoppingCart 
                        size={22} 
                        weight={"fill"}
                    />
                </TranslucentButton>
            </NavigationContent>
        </HeaderApp>
    )
}