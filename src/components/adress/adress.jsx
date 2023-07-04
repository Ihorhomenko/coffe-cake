import "./adress.css"
import holosivskiy from "../../image/holosivskiy-min.jpeg"
import maksimovicha from "../../image/maksimovicha-min.jpeg"
import vilyams from "../../image/vilyams-min.jpeg"

const Adress = () => {
    return (
        <div>
            <h2 className="adress-title">Наші адреси</h2>
            <ul className="adress-list">
                <li className="adress-item">             
                    <a href="https://www.google.com/maps/place/%D0%93%D0%BE%D0%BB%D0%BE%D1%81%D0%B5%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D0%BF%D1%80%D0%BE%D1%81%D0%BF.,+58%D0%90,+%D0%9A%D0%B8%D0%B5%D0%B2,+03039/@50.4006296,30.5123382,21z/data=!4m6!3m5!1s0x40d4cf34db96fba5:0x2dd43c5afab1aff0!8m2!3d50.4006793!4d30.5124825!16s%2Fg%2F11c5mgw45_?entry=ttu" target="_blank" rel="noreferrer">
                        <img src={vilyams} alt="vilyams" className="adress-img"/>
                        <p>м.Київ, Голосіївський проспект, 58а</p>
                    </a>
                </li>
                <li className="adress-item">                    
                    <a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%B0+%D0%9C%D0%B0%D0%BA%D1%81%D0%B8%D0%BC%D0%BE%D0%B2%D0%B8%D1%87%D0%B0,+24%D0%B0,+%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.3927983,30.4740154,19.08z/data=!4m6!3m5!1s0x40d4c8ded6d00001:0x69b42822fd045e4f!8m2!3d50.392923!4d30.4750276!16s%2Fg%2F11t41_pml_?entry=ttu" target="_blank" rel="noreferrer">
                    <img src={maksimovicha} alt="maksimovicha" className="adress-img"/>
                        <p>м.Київ, вул.Максимовича, 24а</p>
                    </a>
                </li>
                <li className="adress-item">
                    <a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%90%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D0%BA%D0%B0+%D0%92%D0%B8%D0%BB%D1%8C%D1%8F%D0%BC%D1%81%D0%B0,+19%2F14,+%D0%9A%D0%B8%D0%B5%D0%B2,+03189/@50.3842807,30.4561888,20.12z/data=!4m7!3m6!1s0x40d4c91d0ef891cb:0x206d6260058f011d!8m2!3d50.3843665!4d30.4560308!10e3!16s%2Fg%2F11cnd7lmz2?entry=ttu" target="_blank" rel="noreferrer">
                        <img src={holosivskiy} alt="holosivskiy" className="adress-img"/>
                        <p>м.Київ, вул.Академіка Вільямса, 19/1</p>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Adress