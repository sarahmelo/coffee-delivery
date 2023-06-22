import { menuCoffee } from "../../contexts/setup/menu";
import { Coffee } from "../../contexts/types/coffee.types";
import { Banner } from "./components/Banner";
import { Card } from "./components/Card";
import { MenuContainer, MenuItems, MenuTitle } from "./style";

export function Menu() {
    const menu: Coffee[] = menuCoffee

    return (
        <>
            <Banner/>
            <MenuContainer>
                <MenuTitle>
                    Nossos Cafés
                </MenuTitle>
                <MenuItems>
                    { menu.map((coffe: Coffee) => {
                        return (
                            <Card
                                key={coffe.id}
                                coffee={coffe}
                            ></Card>
                        )
                    }) }
                </MenuItems>
            </MenuContainer>
        </>
    )
}