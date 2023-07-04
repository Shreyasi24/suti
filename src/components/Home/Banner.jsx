import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="bnr_sec">
        <div className="container">
          <div className="img_otr" data-aos="zoom-in" data-aos-duration="2000">
            <div className="bnr-img">
              <img src="../../assets/images/banner.png" alt="bnr-img" />
            </div>
            <div className="bnr_cntnt">
              <h1>
                This Festive Season <br />
                Get Upto <br /> <span>50% off</span>
              </h1>

              <div className="bnr_btn">
                <a href="#" className="cmn_btn">
                  SHOP NOW{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
