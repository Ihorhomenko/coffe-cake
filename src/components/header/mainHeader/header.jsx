import Container from "../container/container";
import Nav from "../nav/nav";
import IconsTel from "../iconsTel/iconsTel";
import { NavLink } from "react-router-dom";

import "./header.css"
import logo from "../../../image/logo.png"


const Header = () => {
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


            </div>
        </Container>
    )
}

export default Header;