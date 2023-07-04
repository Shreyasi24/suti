import React from 'react'

const BestSeller = () => {
  return (
    <div>
           <section className="nw_arrvl bst_slrs cmn_pdding">
                <div className="container">
                    <div className="nw_arrvl_otr">
                        <div className="nw_arrvl_inr" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000">
                            <div className="cmn_hdr">
                                <h2>Best Sellers</h2>
                                <h3>Shop your faves now</h3>
                            </div>
                            <div className="arrvl_btn">
                                <a href="#" className="cmn_btn">SHOP NOW</a>
                            </div>
                        </div>

                        <div className="nw_arrvl_inr" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000">
                            <div className="img_otr">
                                <img src={require("../../assets/images/best-seller.jpg")} alt="New-Arrrival" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default BestSeller