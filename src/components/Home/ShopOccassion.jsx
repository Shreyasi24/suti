import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import axios from "axios";
import { url } from "./Url";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const ShopOccassion = () => {
  const [data, setData] = useState("");
  const [tabdata, setTabdata] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [filteroptions, setFilterOptions] = useState([]);
  axios
    .get("http://localhost:6000/data")
    .then((res) => console.log(res.data, "info"))
    .catch((err) => console.log(err));
  axios
    .get(url)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err));
  const handleChange = (index) => {
    setActiveTab(index);
  };
  return (
    <div>
      <section className="ssnl_prdct_sec occsn_tab_sec">
        <div className="container">
          <div className="cmn_hdr">
            <h3>shop by occasion</h3>
          </div>

          <div className="tab_otr">
            <div id="OccasnTab">
              <Tabs>
                <TabList className="resp-tabs-list tab_list">
                  {data &&
                    data.map(({ title }) => {
                      return <Tab onClick={() => handleChange()}>{title}</Tab>;
                    })}

                  {/* <Tab>All</Tab>
                  <Tab>Office</Tab>
                  <Tab>Daily</Tab>
                  <Tab>Party</Tab>
                  <Tab>Festiv</Tab> */}
                </TabList>

                <TabPanel>
                  <div className="occsn_tab_cntnt">
                    <div className="occsn_sld_otr occsn_sldr ">
                      <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={4}
                        navigation={{
                          nextEl: ".occsn-arrow-next",
                          prevEl: ".occsn-arrow-prev",
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
                      <div className="occsn_swpr_arrws">
                        <div className="occsn-arrow-next">
                          <img
                            src={require("../../assets/images/seasonal_arrow_rght.png")}
                            alt=""
                          />
                        </div>
                        <div className="occsn-arrow-prev">
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
                  <div className="occsn_tab_cntnt">
                    <div className="occsn_sld_otr occsn_sldr ">
                      <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={4}
                        navigation={{
                          nextEl: ".occsn-arrow-next",
                          prevEl: ".occsn-arrow-prev",
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
                      <div className="occsn_swpr_arrws">
                        <div className="occsn-arrow-next">
                          <img
                            src={require("../../assets/images/seasonal_arrow_rght.png")}
                            alt=""
                          />
                        </div>
                        <div className="occsn-arrow-prev">
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
                  <div className="occsn_tab_cntnt">
                    <div className="occsn_sld_otr occsn_sldr ">
                      <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={4}
                        navigation={{
                          nextEl: ".occsn-arrow-next",
                          prevEl: ".occsn-arrow-prev",
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
                      <div className="occsn_swpr_arrws">
                        <div className="occsn-arrow-next">
                          <img
                            src={require("../../assets/images/seasonal_arrow_rght.png")}
                            alt=""
                          />
                        </div>
                        <div className="occsn-arrow-prev">
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
                  <div className="occsn_tab_cntnt">
                    <div className="occsn_sld_otr occsn_sldr ">
                      <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={4}
                        navigation={{
                          nextEl: ".occsn-arrow-next",
                          prevEl: ".occsn-arrow-prev",
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
                      <div className="occsn_swpr_arrws">
                        <div className="occsn-arrow-next">
                          <img
                            src={require("../../assets/images/seasonal_arrow_rght.png")}
                            alt=""
                          />
                        </div>
                        <div className="occsn-arrow-prev">
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
                  <div className="occsn_tab_cntnt">
                    <div className="occsn_sld_otr occsn_sldr ">
                      <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={4}
                        navigation={{
                          prevEl: ".occsn-arrow-prev",
                          nextEl: ".occsn-arrow-next",
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
                      <div className="occsn_swpr_arrws">
                        <div className="occsn-arrow-next">
                          <img
                            src={require("../../assets/images/seasonal_arrow_rght.png")}
                            alt=""
                          />
                        </div>
                        <div className="occsn-arrow-prev">
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

export default ShopOccassion;
