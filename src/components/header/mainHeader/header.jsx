import Container from "../container/container";
import Nav from "../nav/nav";
import IconsTel from "../iconsTel/iconsTel";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { IoIosMenu } from "react-icons/io"

import "./header.css"
import logo from "../../../image/logo.png"


const Header = ({toggleMenu, isMenuOpen}) => {
    return (
        <Container>
            <div className="header">
                

                <NavLink to="/coffe-cake">
                    <img 
                    src={logo}
                    alt="logo"
                    className="logoImg"/>
                </NavLink>
                    
                


                <Nav/>

                <IconsTel/>
                <button className="but-menu" onClick={toggleMenu}>
                    <IconContext.Provider value={{ className: 'react-icons-menu' }}>
                        <IoIosMenu/>
                    </IconContext.Provider>
                    </button>


            </div>
        </Container>
    )
}

export default Header;