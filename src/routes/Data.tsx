import Home from "../pages/Home.tsx";
import Characters from "../pages/Characters.tsx";
import NotFound from "../pages/NotFound.tsx";
import * as React from "react";
import CharacterDetails from "../pages/CharacterDetails.tsx";

export type NavItem = {
    path: string,
    label?: string,
    element: React.ReactNode,
}
export const navItems: NavItem[] = [
    {path: '/', label: 'Home', element: <Home/>},
    {path: '/characters/', label: 'Characters', element: <Characters/>},
    {path: '/characters/:id', element: <CharacterDetails/>},
    {path: '*', element: <NotFound/>}
]
