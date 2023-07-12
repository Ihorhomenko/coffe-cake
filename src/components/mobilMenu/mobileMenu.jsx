import { useState } from "react";
import Nav from "../../components/header/nav/nav";
import { IoIosMenu } from "react-icons/io"
import "./mobileMenu.css"

const MobileMenu = () => {
    const [isMenuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
      };

    return (
        <>
        {isMenuOpen ? <button className="but-menu" onClick={toggleMenu}>X</button> : <button className="but-menu" onClick={toggleMenu}><IoIosMenu/></button>}
        {isMenuOpen && <Nav/>}
        </>
        

    )
}
export default MobileMenu