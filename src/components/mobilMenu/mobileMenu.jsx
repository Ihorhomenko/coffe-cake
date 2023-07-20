// import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { IconContext } from "react-icons";
// import { IoIosMenu } from "react-icons/io"
import "./mobileMenu.css"

const MobileMenu = ({toggleMenu, isMenuOpen, handleLinkClick}) => {
    // const [isMenuOpen, setMenuOpen] = useState(false)

    // const toggleMenu = () => {
    //     setMenuOpen(!isMenuOpen);
    //   };
    // const handleLinkClick = () => {
    //     setMenuOpen(false);

    // }

    return (
        <>
        {isMenuOpen && 
        <div className="mobile-menu-container">
                <button className="but-menu" onClick={toggleMenu}>X</button>
                    <nav className="nav-mobile">
                        <NavLink to="/cofee-cake/cake" className="nav-mobile_item" onClick={handleLinkClick}>Тортики</NavLink>
                        <NavLink to="/cofee-cake/macaruns" className="nav-mobile_item" onClick={handleLinkClick}>Макаронс</NavLink>
                        <NavLink to="/cofee-cake/eklers" className="nav-mobile_item" onClick={handleLinkClick}>Еклери</NavLink>
                        <NavLink to="/cofee-cake/muskats" className="nav-mobile_item" onClick={handleLinkClick}>Мусові десерти</NavLink>
                        <NavLink to="/cofee-cake/contacts" className="nav-mobile_item" onClick={handleLinkClick}>Контакти</NavLink>
                        <a className="nav-mobile_item tel" href="tel:+380988934578" onClick={handleLinkClick}>
                        +380 (98) 893 45 78
                    </a>
                    </nav>
        </div>
        
       }
        </>
        
       
    )
}
export default MobileMenu