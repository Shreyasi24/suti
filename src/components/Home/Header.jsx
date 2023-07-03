import React from "react";
import Search from "./Search";
import { dropdown } from "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <div className="hdr_mn_otr">
        <div className="container">
          <div className="hdr_mn_inr">
            <div className="logo">
              <a href="#">
                <img src={require("../../assets/images/logo.png")} alt="logo" />
              </a>
            </div>
            <div className="hdr_content">
              <div className="hdr_crncy">
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
                        India Currency
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        USA Currency
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Search />
            <div className="hdr_icons">
              <ul>
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faUser} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faHeart} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faBagShopping} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
