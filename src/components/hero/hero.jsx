import { Swiper, SwiperSlide } from "swiper/react";
// import cake from "../../image/photo1687287726.jpeg"
// import macaruns from "../../image/macaruns.jpeg"
// import ecllers from "../../image/eklers.jpeg"
// import muscat from "../../image/muscat.jpeg"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./hero.css"


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
          <div className="cake">
            <div className="hero_title">
              <p className="hero_title-text">Торти на замовлення</p>
              <button type="button" className="hero_title-but">ЗАМОВИТИ</button>
            </div>
          </div>
          
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={macaruns} alt="macaruns" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ecllers} alt="cklers" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={muscat} alt="muscat"/>
        </SwiperSlide> */}
      </Swiper>
    </>
    )
}

export default Hero