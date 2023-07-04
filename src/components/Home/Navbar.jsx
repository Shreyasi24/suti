import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div className="nav_area">
          <div className="right_nav">
            <div className="navbar-header">
              <nav className="navbar navbar-expand-lg">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="nav_toggler_open">
                    <i className="fa-solid fa-bars"></i>
                  </span>
                  <span className="nav_toggler_close">
                    <i className="fa-solid fa-xmark"></i>
                  </span>
                </button>
                <div
                  className="collapse navbar-collapse main_nav"
                  id="navbarNav"
                >
                  <ul className="navbar-nav line-outr">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        New Arrivals
                      </a>
                    </li>

                    <li className="nav-item mega-item">
                      <a className="nav-link" href="#">
                        Clothing
                      </a>

                      <div className="mega_menu">
                        <div className="dropdown-inner">
                          <div className="columns">
                            <a href="#">
                              <img src="https://www.sutionline.com/assets/image/menu_kurta.jpg" />
                              <span>
                                Get upto <big>40% off</big> on Kurtis
                              </span>
                            </a>
                          </div>

                          <div className="columns">
                            <ul className="list-unstyled">
                              <li>
                                <strong>
                                  <a href="#">Kurtas &amp; Kurtis</a>
                                </strong>
                              </li>
                              <li>
                                <a href="#">A Line</a>
                              </li>
                              <li>
                                <a href="#">P Line</a>
                              </li>
                              <li>
                                <a href="#">Straight</a>
                              </li>
                              <li>
                                <a href="#">Comfort Fit</a>
                              </li>
                              <li>
                                <a href="#">Slim Fit</a>
                              </li>
                              <li>
                                <a href="#">Flared</a>
                              </li>
                            </ul>
                            <ul className="list-unstyled">
                              <lh>
                                <strong>
                                  <a href="https://www.sutionline.com/collections/womens-kurta-sets/10">
                                    Kurta Sets
                                  </a>
                                </strong>
                              </lh>
                              <li>
                                <a href="https://www.sutionline.com/collections/womens-kurta-sets/2-pcs-kurta-set/35">
                                  2 Pcs Kurta Set
                                </a>
                              </li>
                              <li>
                                <a href="https://www.sutionline.com/collections/womens-kurta-sets/3-pcs-kurta-set/47">
                                  3 Pcs Kurta Set
                                </a>
                              </li>
                            </ul>
                            <ul className="list-unstyled">
                              <lh>
                                <strong>
                                  <a href="https://www.sutionline.com/collections/dresses/11">
                                    Dresses
                                  </a>
                                </strong>
                              </lh>
                              <li>
                                <a href="https://www.sutionline.com/collections/dresses/womens-dresses-long-dresses/59">
                                  Long Dress
                                </a>
                              </li>
                              <li>
                                <a href="https://www.sutionline.com/collections/dresses/womens-dresses-short-dresses/81">
                                  Short Dress
                                </a>
                              </li>
                              <li>
                                <a href="https://www.sutionline.com/collections/dresses/womens-dresses-kaftans/90">
                                  Kaftan
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div className="columns">
                            <ul className="list-unstyled">
                              <li>
                                <strong>
                                  <a href="#">Bottoms</a>
                                </strong>
                              </li>
                              <li>
                                <a href="#">Capri Pants</a>
                              </li>
                              <li>
                                <a href="#">Culottes</a>
                              </li>
                              <li>
                                <a href="#">Dhoti Patiyala</a>
                              </li>
                              <li>
                                <a href="#">Leggings</a>
                              </li>
                              <li>
                                <a href="#">Narrow Pant</a>
                              </li>
                              <li>
                                <a href="#">Palazzos</a>
                              </li>
                              <li>
                                <a href="#">Patiyala</a>
                              </li>
                              <li>
                                <a href="#">Skirt</a>
                              </li>
                              <li>
                                <a href="#">Straight Pant</a>
                              </li>
                            </ul>
                            <ul className="list-unstyled childs_3">
                              <lh>
                                <strong>
                                  <a href="#">Tops and Tunics</a>
                                </strong>
                              </lh>
                              <li>
                                <a href="#">Top</a>
                              </li>
                              <li>
                                <a href="#">Tunic</a>
                              </li>
                            </ul>
                          </div>

                          <div className="columns">
                            <ul className="list-unstyled childs_3">
                              <li>
                                <strong>
                                  <a href="#">Jackets</a>
                                </strong>
                              </li>
                              <li>
                                <a href="#">Embroidered Jacket</a>
                              </li>
                              <li>
                                <a href="#">Fancy Jacket</a>
                              </li>
                              <li>
                                <a href="#">Printed Jackets</a>
                              </li>
                              <li>
                                <a href="#">Quilted Jackets</a>
                              </li>
                            </ul>
                            <ul className="list-unstyled childs_3">
                              <lh>
                                <strong>
                                  <a href="#">Stole N Scarves</a>
                                </strong>
                              </lh>
                              <li>
                                <a href="#">Chiffon Dupatta</a>
                              </li>
                              <li>
                                <a href="#">Cotton Dupatta</a>
                              </li>
                              <li>
                                <a href="#">Scarves</a>
                              </li>
                              <li>
                                <a href="#">Stole</a>
                              </li>
                            </ul>
                            <ul className="list-unstyled childs_3">
                              <lh>
                                <strong>
                                  <a href="#">Sleepwear</a>
                                </strong>
                              </lh>
                            </ul>
                          </div>

                          <div className="columns">
                            <ul className="list-unstyled childs_3">
                              <li>
                                <strong>
                                  <a href="javascript:;">Shop By Fabric</a>
                                </strong>
                              </li>
                              <li>
                                <a href="#">Cotton</a>
                              </li>
                              <li>
                                <a href="#">Rayon</a>
                              </li>
                              <li>
                                <a href="#">Silk</a>
                              </li>
                              <li>
                                <a href="#">Polyster</a>
                              </li>
                              <li>
                                <a href="#">Woollen</a>
                              </li>
                            </ul>
                            <ul className="list-unstyled childs_4">
                              <lh>
                                <strong>
                                  <a href="javascript:;">Shop By Occasion</a>
                                </strong>
                              </lh>
                              <li>
                                <a href="#">Daily Wear</a>
                              </li>
                              <li>
                                <a href="#">Party Wear</a>
                              </li>
                              <li>
                                <a href="#">Office Wear</a>
                              </li>
                              <li>
                                <a href="#">Festive Wear</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Winter Wear
                      </a>
                    </li>

                    <li className="nav-item mega-item mi-sml">
                      <a className="nav-link" href="#">
                        Accessories
                      </a>

                      <div className="mega_menu">
                        <div className="dropdown-inner">
                          <div className="columns">
                            <ul className="list-unstyled">
                              <li>
                                <a href="#">Card Holder</a>
                              </li>
                              <li>
                                <a href="#">Hot Pot Holder</a>
                              </li>
                              <li>
                                <a href="#">Key Chain</a>
                              </li>
                              <li>
                                <a href="#">Mask</a>
                              </li>
                              <li>
                                <a href="#">Napkin Set</a>
                              </li>
                              <li>
                                <a href="#">Organizer</a>
                              </li>
                              <li>
                                <a href="#">Sling Bag</a>
                              </li>
                              <li>
                                <a href="#">Tea Coaster Set</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Jewellery
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Bestseller
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Plus Size
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Sale
                      </a>
                    </li>

                    <li className="nav-item">
                      <div className="sl_btns">
                        <a className="sl_of" href="#">
                          UPTO 50%
                        </a>
                        <a className="snd_str" href="#">
                          find store
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
