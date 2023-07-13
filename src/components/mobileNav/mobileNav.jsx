import { NavLink } from "react-router-dom";
import "./mobileNav.css"

const MobileNav = () => {
    return (
        <nav className="nav-mobile">
            <NavLink to="/cofee-cake/cake" className="nav-mobile_item">Тортики</NavLink>
            <NavLink to="/cofee-cake/macaruns" className="nav-mobile_item">Макаронс</NavLink>
            <NavLink to="/cofee-cake/eklers" className="nav_item">Еклери</NavLink>
            <NavLink to="/cofee-cake/muskats" className="nav-mobile_item">Мусові десерти</NavLink>
            <NavLink to="/cofee-cake/contacts" className="nav-mobile_item">Контакти</NavLink>
        </nav>
        
    )
}

export default MobileNav;