import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const PopularStyle = () => {
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
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/popular_img1.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>PRINTED A LINE LONG DRESS</h5>
                              <h6>
                                <del>₹1999</del>₹1,599.20
                              </h6>
                              <p>
                                <del>₹1,599.20</del>
                                <span>₹1,519.24</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/popular_img2.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>embroidered kurta set</h5>
                              <h6>
                                <del>₹4899</del>₹3,919.20
                              </h6>
                              <p>
                                <del>₹3,919.20</del>
                                <span>₹3,324.34</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/popular_img3.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>
                                Block Printed Kurta Set with Kota Doria Dupatta
                              </h5>
                              <h6>
                                <del>₹4999</del>₹3,499.30
                              </h6>
                              <p>
                                <del>₹3,499.30</del>
                                <span>₹3,324.34</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
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
                    <div className="pplr_sld_otr">
                      <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/popular_img2.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>PRINTED A LINE LONG DRESS</h5>
                              <h6>
                                <del>₹1999</del>₹1,599.20
                              </h6>
                              <p>
                                <del>₹1,599.20</del>
                                <span>₹1,519.24</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/popular_img3.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>embroidered kurta set</h5>
                              <h6>
                                <del>₹4899</del>₹3,919.20
                              </h6>
                              <p>
                                <del>₹3,919.20</del>
                                <span>₹3,324.34</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/popular_img1.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>
                                Block Printed Kurta Set with Kota Doria Dupatta
                              </h5>
                              <h6>
                                <del>₹4999</del>₹3,499.30
                              </h6>
                              <p>
                                <del>₹3,499.30</del>
                                <span>₹3,324.34</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
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
                    <div className="pplr_sld_otr">
                      <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/popular_img3.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>PRINTED A LINE LONG DRESS</h5>
                              <h6>
                                <del>₹1999</del>₹1,599.20
                              </h6>
                              <p>
                                <del>₹1,599.20</del>
                                <span>₹1,519.24</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/popular_img1.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>embroidered kurta set</h5>
                              <h6>
                                <del>₹4899</del>₹3,919.20
                              </h6>
                              <p>
                                <del>₹3,919.20</del>
                                <span>₹3,324.34</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/popular_img2.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>
                                Block Printed Kurta Set with Kota Doria Dupatta
                              </h5>
                              <h6>
                                <del>₹4999</del>₹3,499.30
                              </h6>
                              <p>
                                <del>₹3,499.30</del>
                                <span>₹3,324.34</span> for sps members
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
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
