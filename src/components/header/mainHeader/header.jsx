import Container from "../container/container";
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


                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nostrum.</p>

            </div>
        </Container>
    )
}

export default Header;