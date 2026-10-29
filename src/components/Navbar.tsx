import {NavLink} from "react-router";
import "./Navbar.css"
import {navItems} from "../routes/Data.tsx";


export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div className="navbar-header">
                    <ul className="navbar-nav" style={{display: 'flex', listStyle: 'none', gap: '1rem', padding: 0}}>
                        {navItems.map(navItem => (
                            navItem.label && <li key={navItem.path} className="nav-item">
                                <NavLink
                                    to={navItem.path}
                                    className={({isActive}) => isActive ? "nav-button active" : "nav-button"}>
                                    {navItem.label}
                                </NavLink>
                            </li>

                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}