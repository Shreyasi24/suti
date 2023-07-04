import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="cmn_footr" data-aos="zoom-in" data-aos-duration="2000">
        <div className="container">
          <div className="parent_footer">
            <div className="footer_box">
              <a href="#" className="footer_logo">
                <img
                  src={require("../../assets/images/footer_logo.png")}
                  alt="Footer_logo"
                />
              </a>
            </div>
            <div className="footer_box">
              <div className="cmn_hdr">
                <h4>BROWSE</h4>
                <ul>
                  <li>
                    <a href="#">Kurtis</a>
                  </li>
                  <li>
                    <a href="#">Kurta Sets</a>
                  </li>
                  <li>
                    <a href="#">Bottoms</a>
                  </li>
                  <li>
                    <a href="#">Dresses</a>
                  </li>
                  <li>
                    <a href="#">Tops and Tunics</a>
                  </li>
                  <li>
                    <a href="#">Jackets</a>
                  </li>
                  <li>
                    <a href="#">Stole N Scarves</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_box">
              <div className="cmn_hdr">
                <h4>INFORMATION</h4>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Shipping & Return Policy</a>
                  </li>
                  <li>
                    <a href="#">Bottoms</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Site Map</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_box">
              <div className="cmn_hdr">
                <h4>MY ACCOUNT</h4>
                <ul>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Orders</a>
                  </li>
                  <li>
                    <a href="#">Wish List</a>
                  </li>
                  <li>
                    <a href="#">Rewards & Membership</a>
                  </li>
                  <li>
                    <a href="#">Track Order</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_box">
              <div className="cmn_hdr">
                <h4>CONTACT US</h4>
                <ul>
                  <li className="address">
                    Suti, 64-65 Dharam Park, <br />
                    Near Sodhani Sweets, Purani Chungi <br />
                    Ajmer Road, Jaipur-302019
                  </li>
                  <li>
                    <a href="tel:8905997435">
                      <span>
                        <img
                          src={require("../../assets/images/footer_phone.png")}
                          alt="footer phone"
                        />
                      </span>
                      +91-8905997435
                    </a>
                  </li>
                  <li>
                    <a href="https://mail.google.com/mail" target="_blank">
                      <span>
                        <img
                          src={require("../../assets/images/footer_mail.png")}
                          alt="footer phone"
                        />
                      </span>
                      cc@sutionline.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+91-8905997435">
                      <span>
                        <img
                          src={require("../../assets/images/footer_whatsapp.png")}
                          alt="footer phone"
                        />
                      </span>
                      +91-8905997435
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <img
                          src={require("../../assets/images/footer_fb.png")}
                          alt="footer phone"
                        />
                      </span>
                      <span>
                        <img
                          src={require("../../assets/images/footer_insta.png")}
                          alt="footer phone"
                        />
                      </span>
                      follow us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="btm">
          <div className="ftr-bttm">
            <div className="ftr-btn-flx wow fadeInLeft" data-wow-delay="0.3s">
              <div className="ftr-btm-details">
                <p>
                  <span>&#169;</span> 2023
                  <a href="#">Wings Lifestyles.</a>
                  All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
