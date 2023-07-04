import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css";

const Collection = () => {
  const slides = [];

  for (let i = 0; i < 5; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} style={{ listStyle: "none" }}>
        <div className={`slide`}>
          <h3>{i}</h3>
        </div>
      </SwiperSlide>
    );
  }

  return (
    <div>
      <section className="bnr_sld_sec ">
        <div className="container">
          <div className="bnr_sld_otr aftr_bnr_sldr">
            <Swiper
              spaceBetween={20}
              slidesPerView={5}
              navigation
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="swpr_cntnt">
                  <div className="img_otr">
                    <img
                      src={require("../../assets/images/slide_1.png")}
                      alt=""
                    />
                  </div>
                  {slides}
                </div>
              </SwiperSlide>
              {/* <SwiperSlide>
                <div className="swpr_cntnt">
                  <div className="img_otr">
                    <img
                      src={require("../../assets/images/slide_2.png")}
                      alt=""
                    />
                  </div>
                  <h6>top & tunics</h6>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swpr_cntnt">
                  <div className="img_otr">
                    <img
                      src={require("../../assets/images/slide_3.png")}
                      alt=""
                    />
                  </div>
                  <h6>Jewellery</h6>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swpr_cntnt">
                  <div className="img_otr">
                    <img
                      src={require("../../assets/images/slide_4.png")}
                      alt=""
                    />
                  </div>
                  <h6>dress</h6>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swpr_cntnt">
                  <div className="img_otr">
                    <img
                      src={require("../../assets/images/slide_5.png")}
                      alt=""
                    />
                  </div>
                  <h6>kurta set</h6>
                </div>
              </SwiperSlide> */}
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
