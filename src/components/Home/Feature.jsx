import React from "react";

const Feature = () => {
  return (
    <div>
      <section className="feature">
        <div className="container">
          <div className="parent_feature">
            <div className="feature_box">
              <div className="f_box_img_box animate__animated animate__pulse animate__infinite">
                <img
                  src={require("../../assets/images/features_img1.png")}
                  alt="Features"
                />
              </div>
              <div className="cmn_hdr">
                <h4>Free shipping</h4>
              </div>
            </div>
            <div className="feature_box">
              <div className="f_box_img_box animate__animated animate__pulse animate__infinite">
                <img
                  src={require("../../assets/images/features_img2.png")}
                  alt="Features"
                />
              </div>
              <div className="cmn_hdr">
                <h4>Cash on delivery</h4>
              </div>
            </div>
            <div className="feature_box">
              <div className="f_box_img_box animate__animated animate__pulse animate__infinite">
                <img
                  src={require("../../assets/images/features_img3.png")}
                  alt="Features"
                />
              </div>
              <div className="cmn_hdr">
                <h4>Easy returns</h4>
              </div>
            </div>
            <div className="feature_box">
              <div className="f_box_img_box animate__animated animate__pulse animate__infinite">
                <img
                  src={require("../../assets/images/features_img4.png")}
                  alt="Features"
                />
              </div>
              <div className="cmn_hdr">
                <h4>Assured quality</h4>
              </div>
            </div>
            <div className="feature_box">
              <div className="f_box_img_box animate__animated animate__pulse animate__infinite">
                <img
                  src={require("../../assets/images/features_img5.png")}
                  alt="Features"
                />
              </div>
              <div className="cmn_hdr">
                <h4>Make in india</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
