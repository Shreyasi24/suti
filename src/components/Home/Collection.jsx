import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import axios from "axios";

const Collection = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/data")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <section className="bnr_sld_sec ">
        <div className="container">
          <div className="bnr_sld_otr aftr_bnr_sldr">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={5}
              loop={true}
              autoplay={true}
              navigation={{
                nextEl: ".arrow-next",
                prevEl: ".arrow-prev",
              }}
            >
              {data &&
                data.map(({ name, image }) => (
                  <div>
                    {image.map((img) => (
                      <SwiperSlide>
                        <img src={img} alt="/" />
                        <h6>{name}</h6>
                      </SwiperSlide>
                    ))}
                  </div>
                ))}
            </Swiper>
            <div className="swpr_arrws">
              <div className="arrow-next">
                <img
                  src={require("../../assets/images/right_arrow.png")}
                  alt=""
                />
              </div>
              <div className="arrow-prev">
                <img
                  src={require("../../assets/images/left_arrow.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collection;
