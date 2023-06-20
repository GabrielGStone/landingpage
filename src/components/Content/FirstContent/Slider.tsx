import React, { useEffect, useRef, useState } from "react";
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
  Title,
  Text,
  Buttons,
} from "./style";
import { slides } from "./constants";

SwiperCore.use([Navigation]);

const Carousel: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const swiperRef = useRef<any>(1);

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
      {screenWidth > 1000 && (
        <Buttons>
          <PrevButton onClick={goPrevSlide}>
            <Arrow src={arrow} alt="<" />
          </PrevButton>
          <NextButton onClick={goNextSlide}>
            <Arrow src={arrow} alt=">" />
          </NextButton>
        </Buttons>
      )}
      {screenWidth < 1000 && (
        <PrevButton onClick={goPrevSlide}>
          <Arrow src={arrow} alt="<" />
        </PrevButton>
      )}
      <Swiper
        spaceBetween={24}
        slidesPerView={screenWidth > 1000 ? 3 : 1}
        centeredSlides={true}
        loop={true}
        slidesPerGroupSkip={3}
        slidesPerGroup={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {slides.map(
          (data: { image: string; title: string; text: string }, index) => {
            console.log(data.image);
            return (
              <div key={index}>
                <SwiperSlide>
                  <CarouselSlide>
                    <SlideImage src={data.image} alt={data.title} />
                    <Title>{data.title}</Title>
                    <Text>{data.text}</Text>
                  </CarouselSlide>
                </SwiperSlide>
              </div>
            );
          }
        )}
      </Swiper>
      {screenWidth < 1000 && (
        <NextButton onClick={goNextSlide}>
          <Arrow src={arrow} alt=">" />
        </NextButton>
      )}
    </CarouselContainer>
  );
};

export default Carousel;
