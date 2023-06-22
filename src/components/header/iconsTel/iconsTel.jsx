import { IconContext } from "react-icons";
import { VscCallOutgoing } from "react-icons/vsc";
import "./iconsTel.css"

const IconsTel = () => {
    return (
            
        <a className="telNumber" href="tel:+380988934578">
            <IconContext.Provider value={{ className: 'react-icons-tel' }}>
                <VscCallOutgoing/>
            </IconContext.Provider>
            +380 (98) 893 45 78
        </a>
        
    )
}

export default IconsTel;