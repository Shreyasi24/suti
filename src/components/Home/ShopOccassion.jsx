import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ShopOccassion = () => {
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
                  <Tab>All</Tab>
                  <Tab>Office</Tab>
                  <Tab>Daily</Tab>
                  <Tab>Party</Tab>
                  <Tab>Festiv</Tab>
                </TabList>

                <TabPanel>
                  <div className="occsn_tab_cntnt">
                    <div className="occsn_sld_otr occsn_sldr ">
                      <Swiper
                        spaceBetween={50}
                        slidesPerView={4}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/s_occasion_img1.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>SOLID STRAIGHT KURTI</h5>
                              <h6>₹799</h6>
                              <p>₹719.10 for sps members</p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/s_occasion_img2.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>
                                BEAUTIFUL PRINTED DRESS EMBELLISHED WITH...
                              </h5>
                              <h6>₹1999</h6>
                              <p>₹1,799.10 for sps members</p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/s_occasion_img3.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>
                                FESTIVE WEAR KALIDAR LONG KURTI LAHARIYA ...
                              </h5>
                              <h6>₹7,606.65</h6>
                              <p>₹7,226.32 for sps members</p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/s_occasion_img4.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>PARTY WEAR LONG KURTI WITH MIRROR...</h5>
                              <h6>₹2799.30</h6>
                              <p>₹2,659.34 for sps members</p>
                            </div>
                          </div>
                        </SwiperSlide>
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
                        spaceBetween={50}
                        slidesPerView={4}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/s_occasion_img2.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>SOLID STRAIGHT KURTI</h5>
                              <h6>₹799</h6>
                              <p>₹719.10 for sps members</p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/s_occasion_img1.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>
                                BEAUTIFUL PRINTED DRESS EMBELLISHED WITH...
                              </h5>
                              <h6>₹1999</h6>
                              <p>₹1,799.10 for sps members</p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/s_occasion_img4.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>
                                FESTIVE WEAR KALIDAR LONG KURTI LAHARIYA ...
                              </h5>
                              <h6>₹7,606.65</h6>
                              <p>₹7,226.32 for sps members</p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/s_occasion_img3.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>PARTY WEAR LONG KURTI WITH MIRROR...</h5>
                              <h6>₹2799.30</h6>
                              <p>₹2,659.34 for sps members</p>
                            </div>
                          </div>
                        </SwiperSlide>
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
                        spaceBetween={50}
                        slidesPerView={4}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/s_occasion_img4.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>SOLID STRAIGHT KURTI</h5>
                              <h6>₹799</h6>
                              <p>₹719.10 for sps members</p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/s_occasion_img1.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>
                                BEAUTIFUL PRINTED DRESS EMBELLISHED WITH...
                              </h5>
                              <h6>₹1999</h6>
                              <p>₹1,799.10 for sps members</p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/s_occasion_img2.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>
                                FESTIVE WEAR KALIDAR LONG KURTI LAHARIYA ...
                              </h5>
                              <h6>₹7,606.65</h6>
                              <p>₹7,226.32 for sps members</p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/s_occasion_img3.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>PARTY WEAR LONG KURTI WITH MIRROR...</h5>
                              <h6>₹2799.30</h6>
                              <p>₹2,659.34 for sps members</p>
                            </div>
                          </div>
                        </SwiperSlide>
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
                        spaceBetween={50}
                        slidesPerView={4}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/s_occasion_img4.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>SOLID STRAIGHT KURTI</h5>
                              <h6>₹799</h6>
                              <p>₹719.10 for sps members</p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/s_occasion_img3.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>
                                BEAUTIFUL PRINTED DRESS EMBELLISHED WITH...
                              </h5>
                              <h6>₹1999</h6>
                              <p>₹1,799.10 for sps members</p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/s_occasion_img1.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>
                                FESTIVE WEAR KALIDAR LONG KURTI LAHARIYA ...
                              </h5>
                              <h6>₹7,606.65</h6>
                              <p>₹7,226.32 for sps members</p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/s_occasion_img2.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>PARTY WEAR LONG KURTI WITH MIRROR...</h5>
                              <h6>₹2799.30</h6>
                              <p>₹2,659.34 for sps members</p>
                            </div>
                          </div>
                        </SwiperSlide>
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
                        spaceBetween={50}
                        slidesPerView={4}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/s_occasion_img2.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>SOLID STRAIGHT KURTI</h5>
                              <h6>₹799</h6>
                              <p>₹719.10 for sps members</p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/s_occasion_img4.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>
                                BEAUTIFUL PRINTED DRESS EMBELLISHED WITH...
                              </h5>
                              <h6>₹1999</h6>
                              <p>₹1,799.10 for sps members</p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/s_occasion_img1.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>
                                FESTIVE WEAR KALIDAR LONG KURTI LAHARIYA ...
                              </h5>
                              <h6>₹7,606.65</h6>
                              <p>₹7,226.32 for sps members</p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          {" "}
                          <div className="swpr_cntnt">
                            <div className="img_otr">
                              <img
                                src={require("../../assets/images/s_occasion_img3.png")}
                                alt=""
                              />
                              <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                              </div>
                            </div>
                            <div className="btm_itm_dtls">
                              <h5>PARTY WEAR LONG KURTI WITH MIRROR...</h5>
                              <h6>₹2799.30</h6>
                              <p>₹2,659.34 for sps members</p>
                            </div>
                          </div>
                        </SwiperSlide>
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
