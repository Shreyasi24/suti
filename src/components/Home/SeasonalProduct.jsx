import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const SeasonalProduct = () => {
  const [data, setData] = useState("");
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
                    <div className="ssnl_sld_otr ssnl_sldr ">
                      <Swiper
                        spaceBetween={20}
                        slidesPerView={4}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        {data &&
                          data.map(({ name, price, desc, image }) => {
                            <div>
                              {image.map((img) => (
                                <SwiperSlide>
                                  <img src={img} alt="/" />
                                  <h5>{name}</h5>
                                  <h6>{price}</h6>
                                </SwiperSlide>
                              ))}
                            </div>;
                          })}
                        <SwiperSlide>
                          <div className="swpr_cntnt ">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/seasonal-slide-1.jpg")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>woolen embroidered straight long kurti</h5>
                              <h6>
                                <del>₹2199</del>₹1,099.50
                              </h6>
                              <p>
                                <del>₹1,099.50</del>
                                <span>₹1,044.53</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/seasonal-slide-2.jpg")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>woolen printed straight kurti</h5>
                              <h6>
                                <del>₹1999</del>₹999.50
                              </h6>
                              <p>
                                <del>₹999.50</del>
                                <span>₹949.53</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/seasonal-slide-3.jpg")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>woolen printed tunic with belt</h5>
                              <h6>
                                <del>₹1999</del>₹999.50
                              </h6>
                              <p>
                                <del>₹999.50</del>
                                <span>₹949.53</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/seasonal-slide-4.jpg")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>printed woolen kurta</h5>
                              <h6>
                                <del>₹1999</del>₹999.50
                              </h6>
                              <p>
                                <del>₹999.50</del>
                                <span>₹999.53</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
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
                    <div className="ssnl_sld_otr">
                      <Swiper
                        spaceBetween={20}
                        slidesPerView={4}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/seasonal-slide-2.jpg")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>woolen embroidered straight long kurti</h5>
                              <h6>
                                <del>₹2199</del>₹1,099.50
                              </h6>
                              <p>
                                <del>₹1,099.50</del>
                                <span>₹1,044.53</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/seasonal-slide-3.jpg")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>woolen printed straight kurti</h5>
                              <h6>
                                <del>₹1999</del>₹999.50
                              </h6>
                              <p>
                                <del>₹999.50</del>
                                <span>₹949.53</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/seasonal-slide-4.jpg")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>woolen printed tunic with belt</h5>
                              <h6>
                                <del>₹1999</del>₹999.50
                              </h6>
                              <p>
                                <del>₹999.50</del>
                                <span>₹949.53</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/seasonal-slide-1.jpg")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>printed woolen kurta</h5>
                              <h6>
                                <del>₹1999</del>₹999.50
                              </h6>
                              <p>
                                <del>₹999.50</del>
                                <span>₹999.53</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
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
                    <div className="ssnl_sld_otr">
                      <Swiper
                        spaceBetween={20}
                        slidesPerView={4}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/seasonal-slide-3.jpg")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>woolen embroidered straight long kurti</h5>
                              <h6>
                                <del>₹2199</del>₹1,099.50
                              </h6>
                              <p>
                                <del>₹1,099.50</del>
                                <span>₹1,044.53</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/seasonal-slide-4.jpg")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>woolen printed straight kurti</h5>
                              <h6>
                                <del>₹1999</del>₹999.50
                              </h6>
                              <p>
                                <del>₹999.50</del>
                                <span>₹949.53</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/seasonal-slide-1.jpg")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>woolen printed tunic with belt</h5>
                              <h6>
                                <del>₹1999</del>₹999.50
                              </h6>
                              <p>
                                <del>₹999.50</del>
                                <span>₹949.53</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/seasonal-slide-2.jpg")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>printed woolen kurta</h5>
                              <h6>
                                <del>₹1999</del>₹999.50
                              </h6>
                              <p>
                                <del>₹999.50</del>
                                <span>₹999.53</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
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
                    <div className="ssnl_sld_otr">
                      <Swiper
                        spaceBetween={20}
                        slidesPerView={4}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/seasonal-slide-3.jpg")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>woolen embroidered straight long kurti</h5>
                              <h6>
                                <del>₹2199</del>₹1,099.50
                              </h6>
                              <p>
                                <del>₹1,099.50</del>
                                <span>₹1,044.53</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/seasonal-slide-1.jpg")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>woolen printed straight kurti</h5>
                              <h6>
                                <del>₹1999</del>₹999.50
                              </h6>
                              <p>
                                <del>₹999.50</del>
                                <span>₹949.53</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/seasonal-slide-2.jpg")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>woolen printed tunic with belt</h5>
                              <h6>
                                <del>₹1999</del>₹999.50
                              </h6>
                              <p>
                                <del>₹999.50</del>
                                <span>₹949.53</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/seasonal-slide-1.jpg")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>printed woolen kurta</h5>
                              <h6>
                                <del>₹1999</del>₹999.50
                              </h6>
                              <p>
                                <del>₹999.50</del>
                                <span>₹999.53</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
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
                    <div className="ssnl_sld_otr">
                      <Swiper
                        spaceBetween={20}
                        slidesPerView={4}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/seasonal-slide-4.jpg")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>woolen embroidered straight long kurti</h5>
                              <h6>
                                <del>₹2199</del>₹1,099.50
                              </h6>
                              <p>
                                <del>₹1,099.50</del>
                                <span>₹1,044.53</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/seasonal-slide-1.jpg")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>woolen printed straight kurti</h5>
                              <h6>
                                <del>₹1999</del>₹999.50
                              </h6>
                              <p>
                                <del>₹999.50</del>
                                <span>₹949.53</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/seasonal-slide-2.jpg")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>woolen printed tunic with belt</h5>
                              <h6>
                                <del>₹1999</del>₹999.50
                              </h6>
                              <p>
                                <del>₹999.50</del>
                                <span>₹949.53</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/seasonal-slide-3.jpg")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>printed woolen kurta</h5>
                              <h6>
                                <del>₹1999</del>₹999.50
                              </h6>
                              <p>
                                <del>₹999.50</del>
                                <span>₹999.53</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
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
