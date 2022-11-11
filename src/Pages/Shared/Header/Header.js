import React from 'react';
import { FaFacebookF, FaInstagram, FaSearch, FaTwitter, FaYoutube, FaAngleDown } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import './Header.css';

const Header = () => {
    return (
        <header>

            <section id="top_banner" className="text-center" style={{ backgroundColor: '#e5e8ec' }}>
                <img src="http://localhost/cartpro/public/images/storefront/logo/Hu3IDzXoRU.gif" alt="" />
                <a className="button sm" href='/' id="bannerSlideUp"><i className="las la-times"></i></a>
            </section>

            <section id="header-top" className="header-top">
                <div className="container">
                    <div className="d-lg-flex d-xl-flex justify-content-between">
                        <div className="header-top-left d-none d-lg-flex d-xl-flex">
                            <ul className="header-top-social menu">
                                <li><a href="/"> <FaFacebookF className='text-dark' /></a></li>
                                <li><a href="/"> <FaTwitter className='text-dark' /></a></li>
                                <li><a href="/"> <FaInstagram className='text-dark' /></a></li>
                                <li><a href="/"> <FaYoutube className='text-dark' /></a></li>
                            </ul>
                        </div>
                        <div className="header-top-middle d-none d-lg-flex d-xl-flex">
                            <span className="announcement">
                                Welcome to CartPro
                            </span>
                        </div>
                        <div className="header-top-right">
                            <ul>
                                <li><a href="/" className='text-dark'>Order Tracking</a></li>
                                <li className="has-dropdown"><a href="/" className='text-dark'><i className="las la-language"></i>&nbsp; English</a>
                                    <ul className="dropdown p-0">
                                        <li><a href="/" className='text-dark'>Bangla</a></li>
                                        <li><a href="/">Hindi</a></li>
                                    </ul>
                                </li>
                                <li className="has-dropdown"><a href="/" className='text-dark'><i className="las la-money-bill"></i>&nbsp; USD</a>
                                    <ul className="dropdown p-0">
                                        <li><a href="/" className='text-dark'>BDT</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div >
                </div >
            </section >

            <section id="header-middle" class="header-middle">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-7">
                            <div class="mobile-menu-icon d-lg-none"><i class="ti-menu"></i></div>
                            <div class="logo">
                                <a href="/">
                                    <img src="http://localhost/cartpro/public/images/storefront/logo/0dhZQlZtZI.png" alt="Brand logo" />
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-6 d-none d-lg-flex d-xl-flex middle-column justify-content-center">
                            <form id="KeyWordHit" class="header-search" >
                                <input type="text" list="browsers" id="searchText" placeholder="Search Products" name="search" />
                                <button type="submit" class="btn btn-search"> <FaSearch /> </button>
                                {/* <div class="row" id="search_field">
                                    <ul id="result"></ul>
                                </div> */}
                            </form>
                        </div>
                        <div class="col-lg-3 col-5">
                            <ul class="offset-menu-wrapper p-0">
                                <li class="d-lg-none">
                                    <a href='/'><i class="las la-search" data-bs-toggle="collapse" href="#mobile-search" role="button" aria-expanded="false" aria-controls="mobile-search"></i></a>
                                </li>
                                {/* <li>
                                    <a href="/"><i class="las la-user" data-bs-toggle="tooltip" data-bs-placement="bottom" title="My Account"></i></a>
                                </li> */}
                                <li>
                                    <a href="/"><i class="las la-user-lock" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Login"></i></a>
                                </li>


                                <li class="wishlist__menu d-none d-lg-inline-block d-xl-inline-block">
                                    <a href="/">
                                        <i class="lar la-heart" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Wishlist"></i>
                                    </a>
                                    <span class="badge badge-light wishlist_count">5</span>
                                </li>

                                <li class="cart__menu">
                                    <i class="las la-shopping-cart" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Cart"></i>
                                    <span class="badge badge-light cart_count">10</span>
                                    <span class="total">
                                        <span class="cart_total">100.00</span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="header-bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-3 col-md-4 d-none d-lg-flex d-xl-flex">
                            <div class="category-list">
                                <ul class="pl-0">
                                    <li class="has-dropdown"><a class="category-button" href="/"> <FiMenu /> Shop By Category</a>
                                        <ul id="cat_menu" class="dropdown p-0" >
                                            <li class="has-dropdown"><a href="/"><i class="/"></i> Mobile (8)</a>
                                                <ul class="dropdown">
                                                    <li><a href="/"><i class="/"></i>Android (8) </a></li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-9 col-md-8">
                            <div class="main-header-inner">
                                <div id="main-menu" class="main-menu">
                                    <nav id="mobile-nav">

                                        <ul class="nav nav-tabs" id="menu_tab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <a class="nav-link active" data-toggle="tab" href="#mobile_menu" role="tab" aria-controls="mobile_menu" aria-selected="true">Menu</a>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <a class="nav-link" data-toggle="tab" href="#mobile_cat" role="tab" aria-controls="mobile_cat" aria-selected="false">Categories</a>
                                            </li>
                                        </ul>

                                        <div class="tab-content" id="menu_tab_content">
                                            <div class="tab-pane fade show active" id="mobile_menu" role="tabpanel" aria-labelledby="menu-tab">
                                                <ul class="pl-0">


                                                    <li class="/"><a href="/">Home</a></li>

                                                    <li class="/"><a href="/">All Categories</a></li>


                                                    <li class="deal-menu-item"><a href="/"><i class="las la-tag d-none d-md-inline-block"></i>Daily Deals</a></li>
                                                </ul>
                                            </div>
                                            <div class="tab-pane fade" id="mobile_cat" role="tabpanel" aria-labelledby="category-tab">

                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header >

    );
};

export default Header;