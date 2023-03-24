import { useEffect, useRef, useState } from "react";
import { Banner } from "./components/Banner";
import { Card } from "./components/Catalog";
import { MenuContainer, MenuItems, MenuTitle } from "./style";

export function Menu() {
    return (
        <>
            <Banner/>
            <MenuContainer>
                <MenuTitle>
                    Nossos cafés
                </MenuTitle>
                <MenuItems>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </MenuItems>
            </MenuContainer>
        </>
    )
}