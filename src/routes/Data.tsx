import Home from "../pages/Home.tsx";
import Characters from "../pages/Characters.tsx";
import NotFound from "../pages/NotFound.tsx";
import * as React from "react";
import CharacterDetails from "../pages/CharacterDetails.tsx";
import NewCharacter from "../pages/NewCharacter.tsx";
import type {CharacterCardProps} from "../components/CharacterCard.tsx";

export type NavItem = {
    path: string,
    label?: string,
    element: React.ReactNode,
}
export const getNavItems = (characters: CharacterCardProps[],
                            setCharacters: React.Dispatch<React.SetStateAction<CharacterCardProps[]>>): NavItem[] => [
    {path: '/', label: 'Home', element: <Home/>},
    {path: '/characters/', label: 'Characters', element: <Characters characters={characters}/>},
    {
        path: '/characters/new',
        label: 'Create new character',
        element: <NewCharacter characters={characters} setCharacters={setCharacters}/>
    },
    {path: '/characters/:id', element: <CharacterDetails characters={characters}/>},
    {path: '*', element: <NotFound/>}
]
