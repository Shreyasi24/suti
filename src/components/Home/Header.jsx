import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";
import { Dropdown } from "bootstrap";

const Header = () => {
  return (
    <div>
      <header
        className="hdr_mn_otr"
        data-aos="zoom-out"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="container">
          <div className="logo">
            <a href="#">
              <img src={require("../../assets/images/logo.png")} alt="" />
            </a>
          </div>

          <div className="hdr_otr">
            <div className="crncy_optn">
              <div className="dropdown">
                <button
                  className="dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Choose Currency
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      <p>
                        <span>India</span>
                        <div className="crncy">
                          <i className="fa-solid fa-indian-rupee-sign"></i>
                        </div>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <p>
                        <span>USA</span>
                        <div className="crncy">
                          <i className="fa-solid fa-dollar-sign"></i>
                        </div>
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <Search />

            <div className="crt_itm">
              <a data-aos="fade-up" data-aos-duration="2000" href="#">
                <img src={require("../../assets/images/cart-1.png")} alt="" />
              </a>
              <a data-aos="fade-down" data-aos-duration="2000" href="#">
                <img src={require("../../assets/images/cart-2.png")} alt="" />
              </a>
              <a data-aos="fade-up" data-aos-duration="2000" href="#">
                <img src={require("../../assets/images/cart-3.png")} alt="" />
              </a>
              <a data-aos="fade-down" data-aos-duration="2000" href="#">
                <img src={require("../../assets/images/cart-4.png")} alt="" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
