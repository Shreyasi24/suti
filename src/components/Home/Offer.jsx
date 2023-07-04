import React from "react";

const Offer = () => {
  return (
    <div>
      <section className="offers">
        <div className="container">
          <div className="parent_offers">
            <div
              className="offer_box"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <img
                src={require("../../assets/images/offer_img3.png")}
                alt="offer_images"
              />
              <div className="offer_cntnt">
                <h4>plus size</h4>
                <h5>Look glamorous in every size!</h5>
                <a href="#" className="cmn_btn">
                  {" "}
                  shop now{" "}
                </a>
              </div>
            </div>
            <div
              className="offer_box"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <img
                src={require("../../assets/images/offer_img4.png")}
                alt="offer_images"
              />
              <div className="offer_cntnt">
                <h4>winter fashion</h4>
                <h5>Enjoy this winter in style!</h5>
                <a href="#" className="cmn_btn">
                  {" "}
                  shop now{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offer;
