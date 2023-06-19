import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import arrow from "../../../assets/arrow_right.svg";
import {
  NextButton,
  PrevButton,
  CarouselSlide,
  CarouselContainer,
  Arrow,
  SlideImage,
} from "./style";
import { slides } from "./constants";

SwiperCore.use([Navigation]);

const Carousel: React.FC = () => {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper) {
      swiper.navigation.update();
    }
  }, []);

  const goNextSlide = () => {
    const swiper = swiperRef.current;
    if (swiper) {
      swiper.slideNext();
    }
  };

  const goPrevSlide = () => {
    const swiper = swiperRef.current;
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <CarouselContainer>
      <Swiper
        spaceBetween={24}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {slides.map((data, index) => {
          console.log(data);
          return (
            <div key={index}>
              <SwiperSlide>
                <CarouselSlide>
                  <SlideImage src={data} alt="images" />
                </CarouselSlide>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
      <NextButton onClick={goNextSlide}>
        <Arrow src={arrow} alt=">" />
      </NextButton>
      <PrevButton onClick={goPrevSlide}>
        <Arrow src={arrow} alt="<" />
      </PrevButton>
    </CarouselContainer>
  );
};

export default Carousel;
