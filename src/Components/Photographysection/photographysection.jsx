import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.png';
import p3 from '../../assets/p3.png';   
import p4 from '../../assets/p4.png';
import p5 from '../../assets/p5.png';
import './photography.css';

const PhotographySection = () => {
  const photos = [
    { src: p1, alt: "Nature Photography 1" },
    { src: p2, alt: "Nature Photography 2" },
    { src: p3, alt: "Nature Photography 3" },
    { src: p4, alt: "Nature Photography 4" },
    { src: p5, alt: "Nature Photography 5" }
  ];
  
  return (
    <section className="photography-section">
      <div className="section-header">
        <h1 className="projects-heading">Photography</h1>
        <p>Capturing moments through my lens</p>
      </div>
      
      <div className="swiper-container">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectCards, Autoplay]}
          className="photo-swiper"
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide-content">
                <img src={photo.src} alt={photo.alt} />
                <div className="photo-info">
                  <h3>Photo {index + 1}</h3>
                  <p>Nature & Landscape</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <div className="photography-description">
        <p>
          Photography allows me to express creativity beyond code. I specialize in 
          landscape and nature photography, capturing the beauty of the world around us.
        </p>
      </div>
    </section>
  );
};

export default PhotographySection;