import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";
import HeroMacarun from "./heroMacarun/heroMacaruns";
import Adress from "components/adress/adress";
import GallaryProducts from "components/gallaryProducts/gallaryProducts";
// import cake from "../../image/photo1687287726.jpeg"
// import macaruns from "../../image/macaruns.jpeg"
// import ecllers from "../../image/eklers.jpeg"
// import muscat from "../../image/muscat.jpeg"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./home.css"


import { Autoplay, EffectFade, Pagination} from "swiper";


const Hero = () => {
    return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}

        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-swets-container cake">
            <div className="hero_title">
              <h2 className="hero_title-text">Неперевершений смак тільки у нас</h2>
              <p className="hero_title-text">Торти на замовлення</p>
              <NavLink to="/cofee-cake/cake" className="hero_title-but">ЗАМОВИТИ</NavLink>
              {/* <button type="button" className="hero_title-but" onClick={handleClicCake}>ЗАМОВИТИ</button> */}
            </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-swets-container macaruns">
            <div className="hero_title">
              <p className="hero_title-text">Торти на замовлення</p>
              <NavLink to="/cofee-cake/macaruns" className="hero_title-but">ЗАМОВИТИ</NavLink>
              {/* <button type="button" className="hero_title-but" onClick={handleClicMacaruns}>ЗАМОВИТИ</button> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-swets-container ecllers">
            <div className="hero_title">
              <p className="hero_title-text">Торти на замовлення</p>
              <NavLink to="/cofee-cake/eklers" className="hero_title-but">ЗАМОВИТИ</NavLink>
              {/* <button type="button" className="hero_title-but" onClick={handleClicEklers}>ЗАМОВИТИ</button> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-swets-container muscat">
            <div className="hero_title">
              <p className="hero_title-text">Торти на замовлення</p>
              <NavLink to="/cofee-cake/muskats" className="hero_title-but">замовити</NavLink>
              {/* <button type="button" className="hero_title-but" onClick={handleClicMuscat}>ЗАМОВИТИ</button> */}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <HeroMacarun/>
      <GallaryProducts/>
      <Adress/>
    </>
    )
}

export default Hero