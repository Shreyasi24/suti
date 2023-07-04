import React from 'react'

const Newsletter = () => {
    return (
        <div>
            <section className="newsletter cmn_pdding">
                <div className="container">
                    <div className="parent_newsletter">
                        <div className="nleter_box" data-aos="fade-down" data-aos-duration="1500">
                            <img src={require("../../assets/images/nletter_img1.png")} alt="nleter_img_1" />
                        </div>
                        <div className="nleter_box" data-aos="fade-up" data-aos-duration="1500">
                            <div className="nletter_logo">
                                <img src={require("../../assets/images/newsletter_logo.png")} alt="logo" />
                            </div>
                            <div className="cmn_hdr wht">
                                <h2>COMPLETELY SAFE AND <br /> SECURE PAYMENT METHOD</h2>
                                <h6>
                                    We accept Netbanking, all major credit cards. We also accept
                                    orders with cash payment
                                </h6>
                                <h5>
                                    SIGN UP TO GET EXCLUSIVE STYLE TIPS, NEW ARRIVAL UPDATES AND A
                                    SPECIAL DISCOUNT CODE
                                </h5>
                            </div>
                            <div className="input_group">
                                <form action="" className="newsletter_input">
                                    <input type="email" placeholder="Email id" required />
                                    <input type="submit" value="Sign up" />
                                </form>
                            </div>
                            <a href="tel:+91 8905997435" className="nletter_whatsapp" data-aos="fade-down" data-aos-duration="1000">
                                <img src={require("../../assets/images/cart-4.png")} alt="whatsapp" />
                                <span>+91-8905997435</span>
                            </a>
                        </div>
                        <div className="nleter_box" data-aos="fade-down" data-aos-duration="1500">
                            <img src={require("../../assets/images/nletter_img2.png")} alt="nleter_img_2" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Newsletter