import { NavLink } from "react-router-dom";
import "./nav.css"

const Nav = () => {
    return (
        <nav className="nav">
            <NavLink to="/cofee-cake/cake" className="nav_item">Тортики</NavLink>
            <NavLink to="/cofee-cake/macaruns" className="nav_item">Макаронс</NavLink>
            <NavLink to="/cofee-cake/eklers" className="nav_item">Еклери</NavLink>
            <NavLink to="/cofee-cake/muskats" className="nav_item">Мусові десерти</NavLink>
            <NavLink to="/cofee-cake/contacts" className="nav_item">Контакти</NavLink>
        </nav>
    )
}

export default Nav;