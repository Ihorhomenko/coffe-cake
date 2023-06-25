import CakeCards from "./cakeCards"
import cakes from "./cakes.json"
import "./cake.css"

const Cake = () => {
    return (
        <div>
            <div className="titlePage">
                <div className="blur">
                    <h2 className="pageTitle">Торти</h2>
                </div>
            </div>
            <CakeCards cakes={cakes}/>

        </div>
    )
}

export default Cake