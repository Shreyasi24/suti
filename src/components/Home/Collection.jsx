import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import axios from "axios";
import { url } from "./Url";
import Slider from "./Slider";
import slider from "../../service.json";

const Collection = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <section className="bnr_sld_sec ">
        <div className="container">
          <div className="bnr_sld_otr aftr_bnr_sldr">
            <Slider slider={slider} />
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
