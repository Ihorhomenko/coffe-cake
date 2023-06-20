import Container from "../container/container";
import Nav from "../nav/nav";
import IconsTel from "../iconsTel/iconsTel";

import "./header.css"
import logo from "../../../image/logo.png"


const Header = () => {
    return (
        <Container>
            <div className="header">
                

                <a href="./#" className="logo">
                    <img 
                    src={logo}
                    alt="logo"
                    className="logoImg"/>
                </a>


                <Nav/>
                
                <IconsTel/>


            </div>
        </Container>
    )
}

export default Header;