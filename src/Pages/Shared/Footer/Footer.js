import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div id="footer-section" >
            <section className="mb-3">
                <div className="container">

                </div>
            </section>

            <div className="newsletter-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-6">
                            <div className="d-flex align-items-center">
                                <div>
                                    <i className="las la-paper-plane me-3"></i>
                                </div>
                                <div>
                                    <h3 className="mb-0">Subscribe to our Newsletter</h3>
                                    <p>Subscribe and get notification about discounts</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <form className="newsletter" id="newsLatterSubmitForm">
                                <input type="email" placeholder="Enter your email" name="email" required />
                                <button type="submit" className="button style1 btn-search">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <a href="/" id="scrolltotop"><i className="ti-arrow-up"></i></a>

            <div className="footer-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="footer-logo">
                                <a href="/"><img className="lazy" src="http://localhost/cartpro/public/images/storefront/logo/0dhZQlZtZI.png" alt="" /></a>
                                
                            </div>
                            <div className="footer-text">
                                <h5 className="text-grey mb-0">Got Question? Call us</h5>
                                <h4>+880 192 4756 759</h4>
                            </div>
                            <div className="footer-text">
                                <h6 className="text-grey mb-0">Contact Info</h6>
                                <p className="mb-1"><i className="las la-envelope"></i> &nbsp; <span>irfanchowdhury434@gmail.com</span></p>
                                <p className="mb-1"><i className="las la-map-marker"></i> &nbsp; <span>Dewanhat, Chittagong</span></p>
                            </div>
                            <ul className="footer-social mt-3 p-0 text-dark">
                                <li><a href="/"> <FaFacebookF className='text-dark' /></a></li>
                                <li><a href="/"> <FaTwitter  className='text-dark'/></a></li>
                                <li><a href="/"> <FaInstagram  className='text-dark'/></a></li>
                                <li><a href="/"> <FaYoutube className='text-dark'/></a></li>
                            </ul>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="footer-widget style1">
                                        <h3>QUICK SHOP</h3>
                                        <div className="d-flex justify-content-between">
                                            <ul className="footer-menu p-0">
                                                <li><a href="/">Computer Accessories</a></li>
                                                <li><a href="/">Tille-2</a></li>
                                                <li><a href="/">Tille-3</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="footer-widget style1">
                                        <h3>HELP CENTER</h3>
                                        <ul className="footer-menu p-0">
                                            <li><a className="" href="/">Terms & Condition</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-6">
                                    <div className="footer-widget style1">
                                        <h3>OTHERS</h3>
                                        <ul className="footer-menu p-0">
                                            <li><a className="" href="/">About Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <hr />
                    <div className="mt-3 mb-3">
                        <div className="item-tags"><a href="/">Headphone</a></div>
                        <div className="item-tags"><a href="/">Laptop</a></div>
                    </div>

                    <div className="row footer-bottom mt-0">
                        <div className="col-md-6">
                            <p>© CartPro 2021. All rights reserved</p>
                        </div>
                        <div className="col-md-6">
                            <div className="footer-payment-options">
                                <img className="lazy" src="http://localhost/cartpro/public/images/storefront/payment_method/zQt1rHnU8L.jpg" alt="" width="342px" height="30px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade newsletter-modal" id="newsletter-modal" tabindex="-1" role="dialog" aria-labelledby="newsletter-modal" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="las la-times"></i></span>
                            </button>
                            <div className="row">
                                <div className="col-lg-8">
                                    <h3 className="h2 semi-bold">Subscribe and get notification about discounts</h3>
                                    <p className="lead mb-5">file.Subscribe to our mailing list to receive updates on new arrivals, special offers and our promotions.</p>
                                    <form></form>

                                    <input className="" type="email" placeholder="Enter your email" name="email" required />
                                    <input type="hidden" name="disable_newslatter" value="0" id="disable_popup_newslatter" />
                                    <button type="submit" className="button style1 btn-search" type="submit">Subscribe</button>


                                    <div className="form-check custom-control custom-checkbox mt-1">
                                        <input className="custom-control-input" id="newslatterPopup" type="checkbox" value="1" />
                                        <label className="custom-control-label" for="newslatterPopup">
                                            Got it! Do not show this popup again.
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Footer;