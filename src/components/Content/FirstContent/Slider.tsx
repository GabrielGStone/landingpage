import { Box, CustomSwiper } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Slider = () => {
  const a = ["a", "b", "c", "d", "a", "b", "c", "d", "a", "b", "c", "d"];
  const swiper = useSwiper();
  return (
    <Box>
      {a.map((data) => (
        <SwiperSlide>{data}</SwiperSlide>
      ))}
      <div
        style={{
          cursor: "pointer",
          display: "flex",
          backgroundColor: "#dadce0",
          width: 24,
          height: 24,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
        }}
        onClick={() => swiper.slideNext()}
      >
        {">"}
      </div>
    </Box>
  );
};

export default Slider;
