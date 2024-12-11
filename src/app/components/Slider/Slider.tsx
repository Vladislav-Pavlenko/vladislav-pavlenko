import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import Snippet from "../Snippets/Snippet";
import styles from "./Slider.module.css";

export default function Slider() {
  const slides = Array.from({ length: 8 }, (_, i) => i + 1);
  return (
    <Swiper
      modules={[Autoplay, EffectCoverflow]}
      slidesPerView={3}
      spaceBetween={18}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      speed={1500}
      effect="coverflow"
      coverflowEffect={{
        rotate: 3,
        stretch: 10,
        depth: 200,
        modifier: 1.5,
        slideShadows: false,
      }}
      className={styles.swiper}
      direction={"vertical"}
      onSlideChange={(swiper) => {
        const slides = swiper.slides;
        slides.forEach((slide, index) => {
          const distance = Math.abs(swiper.activeIndex - index);
          if (distance === 0) {
            slide.style.opacity = "1";
          } else if (distance === 1) {
            slide.style.opacity = "0.7";
          } else {
            slide.style.opacity = "0.3";
          }
        });
      }}
      onSwiper={(swiper) => {
        swiper.slides.forEach((slide, index) => {
          const distance = Math.abs(swiper.activeIndex - index);
          if (distance === 0) {
            slide.style.opacity = "1";
          } else if (distance === 1) {
            slide.style.opacity = "0.7";
          } else {
            slide.style.opacity = "0.3";
          }
        });
      }}
    >
      {slides.map((src, index) => (
        <SwiperSlide key={index}>
          <Snippet />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
