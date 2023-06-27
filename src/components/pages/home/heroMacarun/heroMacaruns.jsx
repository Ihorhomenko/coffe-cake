import "./heroMacaruns.css"
import heroImg from "../../../../image/heroMacarun.jpeg"

const HeroMacarun = () => {
    return (
        <div className="hero-macarun-conteiner">
            <img className="hero-macarun-img" src={heroImg} alt="hero-macarun"></img>
            <div className="hero-macarun-content">
                <h2>Непервершені макаруни</h2>
                <p>Найсмачніші макаруни з 27 різними смаками. Ви точно зможете обрати щось до смаку. А набір макарунів - це гарний та смачний подарунок на будь-яке святою</p>
            </div>
        </div>
    )
}

export default HeroMacarun