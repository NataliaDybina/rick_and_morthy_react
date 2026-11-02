import './App.css'
import {Route, Routes} from "react-router";
import Navbar from "./components/Navbar.tsx";
import {getNavItems} from "./routes/Data.tsx";
import {useEffect, useState} from "react";
import axios from 'axios';
import type {CharacterCardProps} from "./components/CharacterCard.tsx";

function App() {
    const [characters, setCharacters] = useState<CharacterCardProps[]>([]);
    const navItems = getNavItems(characters, setCharacters);

    useEffect(() => {
        function getCharacters() {
            axios.get('https://rickandmortyapi.com/api/character')
                .then(res => {
                    setCharacters(res.data.results)
                })
                .catch(error => console.log(error))
        }

        getCharacters();
    }, []);

    return (
        <main style={{padding: '2rem', fontFamily: 'sans-serif'}}>
            <h1>Rick and Morty Characters</h1>
            <Navbar navItems={navItems}/>
            <Routes>
                {navItems.map((navItem) => (
                    <Route key={navItem.path} path={navItem.path} element={navItem.element}/>
                ))}
            </Routes>
        </main>
    )
}

export default App
