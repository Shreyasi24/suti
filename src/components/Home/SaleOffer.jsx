import React from "react";

const SaleOffer = () => {
  return (
    <div>
      <section className="offers cmn_pdding">
        <div className="container">
          <div className="parent_offers">
            <div
              className="offer_box"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <img
                src={require("../../assets/images/offer_img1.png")}
                alt="offer_images"
              />
              <div className="offer_cntnt">
                <h4>special sale</h4>
                <h5>Get the best offers and discounts</h5>
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
                src={require("../../assets/images/offer_img2.png")}
                alt="offer_images"
              />
              <div className="offer_cntnt">
                <h4>festive offers</h4>
                <h5>Get the best offers and discounts</h5>
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

export default SaleOffer;
