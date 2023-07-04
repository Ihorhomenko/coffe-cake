import "./gallaryProducts.css"
import firstimg from "../../image/1g-min.jpeg"
import secondimg from "../../image/2g-min.jpeg"
import thirdimd from "../../image/3g-min.jpeg"
import forthimg from "../../image/4g-min.jpeg"
import fifthimg from "../../image/5g-min.jpeg"
import sixthimg from "../../image/6g-min.jpeg"
import seventhing from "../../image/7g-min.jpeg"
import eaghthimg from "../../image/8g-min.jpeg"


const GallaryProducts = () => {
    return (
        <div className="gallary-container">
            <h2 className="gallary-products-title">Наші роботи</h2>
            <ul className="gallary-products-list">
                <li className="gallary-producrs-item">
                    
                    <img src={firstimg} alt="cake" className="gallary-products-img"></img>
                </li>
                <li className="gallary-producrs-item">
                    <img src={secondimg} alt="cake" className="gallary-products-img"></img>
                </li>
                <li className="gallary-producrs-item">
                    <img src={thirdimd} alt="cake" className="gallary-products-img"></img>
                </li>
                <li className="gallary-producrs-item">
                    <img src={forthimg} alt="cake" className="gallary-products-img"></img>
                </li>
                <li className="gallary-producrs-item">
                    <img src={fifthimg} alt="cake" className="gallary-products-img"></img>
                </li>
                <li className="gallary-producrs-item">
                    <img src={sixthimg} alt="cake" className="gallary-products-img"></img>
                </li>
                <li className="gallary-producrs-item">
                    <img src={seventhing} alt="cake" className="gallary-products-img"></img>
                </li>
                <li className="gallary-producrs-item">
                    <img src={eaghthimg} alt="cake" className="gallary-products-img"></img>
                </li>
            </ul>
        </div>
    )
}

export default GallaryProducts