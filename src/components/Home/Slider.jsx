import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import axios from "axios";
import { url } from "./Url";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Navigation } from "swiper/modules";
import slider from "../../service.json";

const Slider = () => {
  console.log(slider, "slider");
  // const [data, setData] = useState("");
  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((res) => setData(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={5}
      loop={true}
      autoplay={true}
      navigation={{
        nextEl: ".arrow-next",
        prevEl: ".arrow-prev",
      }}
    >
      {slider &&
        slider.map(({ name, image }) => (
          <div>
            {/* {image.map((img) => ( */}
            <SwiperSlide>
              {/* <img src={img} alt="/" /> */}
              <h6>{name}</h6>
            </SwiperSlide>
            {/* ))} */}
          </div>
        ))}
    </Swiper>
  );
};

export default Slider;
