import SweetsCards from "../../sweetsCards/sweetsCards"
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
            <SweetsCards sweets={cakes}/>

        </div>
    )
}

export default Cake