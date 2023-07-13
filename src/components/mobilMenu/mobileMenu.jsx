import { useState } from "react";
import MobileNav from "components/mobileNav/mobileNav";
import { IconContext } from "react-icons";
import { IoIosMenu } from "react-icons/io"
import "./mobileMenu.css"

const MobileMenu = () => {
    const [isMenuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
      };

    return (
        <>
        {!isMenuOpen && <button className="but-menu" onClick={toggleMenu}>
            <IconContext.Provider value={{ className: 'react-icons-menu' }}>
                <IoIosMenu/>
            </IconContext.Provider>
            </button>}
        {isMenuOpen && 
        <div className="mobile-menu-container">
            <button className="but-menu" onClick={toggleMenu}>X</button>
            <MobileNav/>
        </div>
       }
        </>
        
       
    )
}
export default MobileMenu