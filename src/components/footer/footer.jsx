import { IconContext } from "react-icons";
import { SiInstagram, SiFacebook } from "react-icons/si";

import "./footer.css"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-social">
                <ul className="footer-social-list">
                    <li className="footer-social-item">
                        <a href="https://www.instagram.com/mr.macarons1/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noreferrer">
                        <IconContext.Provider value={{ className: 'react-icons-inst' }}>
                            <SiInstagram/>
                        </IconContext.Provider>
                        </a>
                    </li>
                    <li className="footer-social-item">
                        <a href="https://www.facebook.com/people/Mr-Macarons/100063525703787/" target="_blank" rel="noreferrer">
                        <IconContext.Provider value={{ className: 'react-icons-inst' }}>
                            <SiFacebook/>
                        </IconContext.Provider>
                        </a>
                    </li>
                </ul>
                <p className="footer-social-text">Стежте за нами в соціальних мережах</p>
                <p className="footer-social-text__copyright">©Copyright Mr.Macarons</p>
            </div>
            <div className="footer-nav"></div>
        </div>
    )

}

export default Footer