import {NavLink} from "react-router";
import "./Navbar.css"
import type {NavItem} from "../routes/Data.tsx";


type NavbarProps = {
    navItems: NavItem[];
}
export default function Navbar({navItems}: NavbarProps) {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div className="navbar-header">
                    <ul className="navbar-nav" style={{display: 'flex', listStyle: 'none', gap: '1rem', padding: 0}}>
                        {navItems.map(navItem => (
                            navItem.label && <li key={navItem.path} className="nav-item">
                                <NavLink
                                    to={navItem.path} end
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