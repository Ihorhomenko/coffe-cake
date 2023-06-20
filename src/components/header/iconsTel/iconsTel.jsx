import { IconContext } from "react-icons";
import { VscCallOutgoing } from "react-icons/vsc";
import "./iconsTel.css"

const IconsTel = () => {
    return (
            
        <a className="telNumber" href="tel:+380631111111">
            <IconContext.Provider value={{ className: 'react-icons-tel' }}>
                <VscCallOutgoing/>
            </IconContext.Provider>
                +380631111111
        </a>
        
    )
}

export default IconsTel;