import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";
import { url } from "./Url";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const PopularStyle = () => {
  const [data, setData] = useState("");
  axios
    .get(url)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));
  return (
    <div>
      <section className="ssnl_prdct_sec pplr_styl_sec">
        <div className="container">
          <div className="cmn_hdr">
            <h3>Popular styles</h3>
          </div>

          <div className="tab_otr">
            <div id="PopularTab">
              <Tabs>
                <TabList className="resp-tabs-list tab_list">
                  <Tab>All</Tab>
                  <Tab>Long</Tab>
                  <Tab>Kurta Set</Tab>
                </TabList>

                <TabPanel>
                  <div className="pplr_tab_cntnt">
                    <div className="pplr_sld_otr pplr_sldr">
                      <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        modules={[Navigation]}
                        loop={true}
                        autoplay={true}
                        navigation={{
                          nextEl: ".pplr-arrow-next",
                          prevEl: ".pplr-arrow-prev",
                        }}
                      >
                        {data &&
                          data.map(({ name, price, desc, image }) => {
                            return (
                              <div>
                                {image.map((img) => (
                                  <SwiperSlide>
                                    <div className="swpr_cntnt">
                                      <div className="img_otr">
                                        <img src={img} alt="/" />
                                        <div className="heart">
                                          <FontAwesomeIcon icon={faHeart} />
                                        </div>
                                      </div>
                                      <div className="btm_itm_dtls">
                                        <h5>{name}</h5>
                                        <h6>{price}</h6>
                                        <p>{desc}</p>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                ))}
                              </div>
                            );
                          })}
                      </Swiper>
                      <div className="pplr_swpr_arrws">
                        <div className="pplr-arrow-next">
                          <img
                            src={require("../../assets/images/seasonal_arrow_rght.png")}
                            alt=""
                          />
                        </div>
                        <div className="pplr-arrow-prev">
                          <img
                            src={require("../../assets/images/seasonal_arrow_left.png")}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="pplr_tab_cntnt">
                    <div className="pplr_sld_otr pplr_sldr">
                      <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        modules={[Navigation]}
                        loop={true}
                        autoplay={true}
                        navigation={{
                          nextEl: ".pplr-arrow-next",
                          prevEl: ".pplr-arrow-prev",
                        }}
                      >
                        {data &&
                          data.map(({ name, price, desc, image }) => {
                            return (
                              <div>
                                {image.map((img) => (
                                  <SwiperSlide>
                                    <div className="swpr_cntnt">
                                      <div className="img_otr">
                                        <img src={img} alt="/" />
                                        <div className="heart">
                                          <FontAwesomeIcon icon={faHeart} />
                                        </div>
                                      </div>
                                      <div className="btm_itm_dtls">
                                        <h5>{name}</h5>
                                        <h6>{price}</h6>
                                        <p>{desc}</p>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                ))}
                              </div>
                            );
                          })}
                      </Swiper>
                      <div className="pplr_swpr_arrws">
                        <div className="pplr-arrow-next">
                          <img
                            src={require("../../assets/images/seasonal_arrow_rght.png")}
                            alt=""
                          />
                        </div>
                        <div className="pplr-arrow-prev">
                          <img
                            src={require("../../assets/images/seasonal_arrow_left.png")}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="pplr_tab_cntnt">
                    <div className="pplr_sld_otr pplr_sldr">
                      <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        modules={[Navigation]}
                        loop={true}
                        autoplay={true}
                        navigation={{
                          nextEl: ".pplr-arrow-next",
                          prevEl: ".pplr-arrow-prev",
                        }}
                      >
                        {data &&
                          data.map(({ name, price, desc, image }) => {
                            return (
                              <div>
                                {image.map((img) => (
                                  <SwiperSlide>
                                    <div className="swpr_cntnt">
                                      <div className="img_otr">
                                        <img src={img} alt="/" />
                                        <div className="heart">
                                          <FontAwesomeIcon icon={faHeart} />
                                        </div>
                                      </div>
                                      <div className="btm_itm_dtls">
                                        <h5>{name}</h5>
                                        <h6>{price}</h6>
                                        <p>{desc}</p>
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                ))}
                              </div>
                            );
                          })}
                      </Swiper>
                      <div className="pplr_swpr_arrws">
                        <div className="pplr-arrow-next">
                          <img
                            src={require("../../assets/images/seasonal_arrow_rght.png")}
                            alt=""
                          />
                        </div>
                        <div className="pplr-arrow-prev">
                          <img
                            src={require("../../assets/images/seasonal_arrow_left.png")}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularStyle;
