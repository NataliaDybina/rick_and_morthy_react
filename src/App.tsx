import './App.css'
import {Route, Routes} from "react-router";
import Navbar from "./components/Navbar.tsx";
import {navItems} from "./routes/Data.tsx";

function App() {


    return (
        <main style={{padding: '2rem', fontFamily: 'sans-serif'}}>
            <h1>Rick and Morty Characters</h1>
            <Navbar/>
            <Routes>
                {navItems.map((navItem) => (
                    <Route key={navItem.path} path={navItem.path} element={navItem.element}/>
                ))}
            </Routes>
        </main>
    )
}

export default App
