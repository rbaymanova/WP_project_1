import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "../styles/AboutPlatform.css";

const images = [
  "/image1.png",
  "/image2.png",
  "/image3.png",
];

const AboutPlatform = () => {
  return (
    <div className="about-platform">
      <h2>About the platform</h2>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}   
        loop={true}
        spaceBetween={80} 
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2, 
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="carousel"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="carousel-slide">
            <img src={image} alt={`Slide ${index}`} className="carousel-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AboutPlatform;
