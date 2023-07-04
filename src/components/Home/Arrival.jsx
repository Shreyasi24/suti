import React from "react";

const Arrival = () => {
  return (
    <div>
      <section className="nw_arrvl cmn_pdding">
        <div className="container">
          <div className="nw_arrvl_otr">
            <div
              className="nw_arrvl_inr"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="img_otr">
                <img
                  src={require("../../assets/images/new_arrvl.png")}
                  alt="New-Arrrival"
                />
              </div>
            </div>

            <div className="nw_arrvl_inr">
              <div
                className="cmn_hdr"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <h2>new arrivals</h2>
                <h3>New styles this way!</h3>
              </div>
              <div
                className="arrvl_btn"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <a href="#" className="cmn_btn">
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Arrival;
