import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from "axios";
import { url } from "./Url";
import { Navigation } from "swiper/modules";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SeasonalProduct = () => {
  const [data, setData] = useState("");
  axios
    .get(url)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));
  return (
    <div>
      <section className="ssnl_prdct_sec">
        <div className="container">
          <div className="cmn_hdr">
            <h3>seasonal product</h3>
          </div>

          <div className="tab_otr">
            <div id="SeasonalTab">
              <Tabs>
                <TabList className="resp-tabs-list tab_list">
                  <Tab>All</Tab>
                  <Tab>Long</Tab>
                  <Tab>Straight</Tab>
                  <Tab>Tunic</Tab>
                  <Tab>Woolen</Tab>
                </TabList>
                {/* all tab content */}
                <TabPanel>
                  <div className="snl_tab_cntnt">
                    <div className="ssnl_sld_otr ssnl_sldr btm_itm_dtls">
                      <Swiper
                        spaceBetween={20}
                        slidesPerView={4}
                        modules={[Navigation]}
                        loop={true}
                        autoplay={true}
                        navigation={{
                          nextEl: ".ssnl-arrow-next",
                          prevEl: ".ssnl-arrow-prev",
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
                      <div className="ssnl_swpr_arrws">
                        <div className="ssnl-arrow-next">
                          <img
                            src={require("../../assets/images/seasonal_arrow_rght.png")}
                            alt=""
                          />
                        </div>
                        <div className="ssnl-arrow-prev">
                          <img
                            src={require("../../assets/images/seasonal_arrow_left.png")}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                {/* long tab content */}
                <TabPanel>
                  <div className="snl_tab_cntnt">
                    <div className="ssnl_sld_otr ssnl_sldr btm_itm_dtls">
                      <Swiper
                        spaceBetween={20}
                        slidesPerView={4}
                        modules={[Navigation]}
                        loop={true}
                        autoplay={true}
                        navigation={{
                          nextEl: ".ssnl-arrow-next",
                          prevEl: ".ssnl-arrow-prev",
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
                      <div className="ssnl_swpr_arrws">
                        <div className="ssnl-arrow-next">
                          <img
                            src={require("../../assets/images/seasonal_arrow_rght.png")}
                            alt=""
                          />
                        </div>
                        <div className="ssnl-arrow-prev">
                          <img
                            src={require("../../assets/images/seasonal_arrow_left.png")}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                {/* straight tab content */}
                <TabPanel>
                  <div className="snl_tab_cntnt">
                    <div className="ssnl_sld_otr ssnl_sldr btm_itm_dtls">
                      <Swiper
                        spaceBetween={20}
                        slidesPerView={4}
                        modules={[Navigation]}
                        loop={true}
                        autoplay={true}
                        navigation={{
                          nextEl: ".ssnl-arrow-next",
                          prevEl: ".ssnl-arrow-prev",
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
                      <div className="ssnl_swpr_arrws">
                        <div className="ssnl-arrow-next">
                          <img
                            src={require("../../assets/images/seasonal_arrow_rght.png")}
                            alt=""
                          />
                        </div>
                        <div className="ssnl-arrow-prev">
                          <img
                            src={require("../../assets/images/seasonal_arrow_left.png")}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                {/* tunic tab content */}
                <TabPanel>
                  <div className="snl_tab_cntnt">
                    <div className="ssnl_sld_otr ssnl_sldr btm_itm_dtls">
                      <Swiper
                        spaceBetween={20}
                        slidesPerView={4}
                        modules={[Navigation]}
                        loop={true}
                        autoplay={true}
                        navigation={{
                          nextEl: ".ssnl-arrow-next",
                          prevEl: ".ssnl-arrow-prev",
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
                      <div className="ssnl_swpr_arrws">
                        <div className="ssnl-arrow-next">
                          <img
                            src={require("../../assets/images/seasonal_arrow_rght.png")}
                            alt=""
                          />
                        </div>
                        <div className="ssnl-arrow-prev">
                          <img
                            src={require("../../assets/images/seasonal_arrow_left.png")}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                {/* woolen tab content */}
                <TabPanel>
                  <div className="snl_tab_cntnt">
                    <div className="ssnl_sld_otr ssnl_sldr btm_itm_dtls">
                      <Swiper
                        spaceBetween={20}
                        slidesPerView={4}
                        modules={[Navigation]}
                        loop={true}
                        autoplay={true}
                        navigation={{
                          nextEl: ".ssnl-arrow-next",
                          prevEl: ".ssnl-arrow-prev",
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
                      <div className="ssnl_swpr_arrws">
                        <div className="ssnl-arrow-next">
                          <img
                            src={require("../../assets/images/seasonal_arrow_rght.png")}
                            alt=""
                          />
                        </div>
                        <div className="ssnl-arrow-prev">
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

export default SeasonalProduct;
