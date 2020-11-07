import React from 'react'
import Header from './Header';
import Footer from './Footer';

import main from '../images/main.png';
import shakshi from '../images/team/shakshi.png';
import nayan from '../images/team/nayan.png';
import manmeet from '../images/team/manmeet.PNG';
import sarwesh from '../images/team/sarwesh.PNG';
import { Link, withRouter } from 'react-router-dom';

const Index = () => {
    return (
        <div>
            <Header />
            {/* *************************************************************
            -------------------- main section start -------------------------
            ****************************************************************/}
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                            data-aos="fade-up" data-aos-delay="200">
                            <h1>Prepare yourself for better future</h1>
                            <h2>Here to get infomation of placement, Roadmap, campus drive</h2>
                            <div className="d-lg-flex">
                                <Link to="/StudentLogin"><button className="btn-get-started scrollto">Get Started</button></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                            <img src={main} className="img-fluid animated" alt="text" />
                        </div>
                    </div>
                </div>
            </section>

            {/* *************************************************************
            -------------------------- Company Name -------------------------
            ****************************************************************/}
            <section id="cliens" className="cliens section-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-6 d-flex align-items-center justify-content-center">
                            <h2>WitMates</h2>
                        </div>
                        <div className="col-md-2 col-6 d-flex align-items-center justify-content-center">
                            <h2>TCS</h2>
                        </div>
                        <div className="col-md-2 col-6 d-flex align-items-center justify-content-center">
                            <h2>JARO</h2>
                        </div>
                        <div className="col-md-2 col-6 d-flex align-items-center justify-content-center">
                            <h2>Impetus</h2>
                        </div>
                        <div className="col-md-2 col-6 d-flex align-items-center justify-content-center">
                            <h2>Virim</h2>
                        </div>
                        <div className="col-md-2 col-6 d-flex align-items-center justify-content-center">
                            <h2>Yash</h2>
                        </div>
                    </div>
                </div>
            </section>
            {/* *************************************************************
            -------------------------- About Us -------------------------
            *****************************************************************/}
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>About Us</h2>
                    </div>
                    <div className="row content">
                        <div className="col-lg-6">
                            <p>
                                Smart Recruiter is a Svvv plateform where you gets knowlegde of lastest technologies, roadmaps in the
                                field of web development, mobile development etc.
                            </p>
                            <ul>
                                <li><i class='bx bx-right-arrow-alt bx-fade-left' ></i> Get campus drive infomation from smart recruiter website</li>
                                <li><i class='bx bx-right-arrow-alt bx-fade-left' ></i> Improve your knowlegde and learn lastest technologies </li>
                                <li><i class='bx bx-right-arrow-alt bx-fade-left' ></i> Get yearwise Roadmaps which help you to place in your dream
                            company</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <p>
                                Shri Vaishnav Vidyapeeth Vishwavidyalaya is a private university established under Madhya Pradesh Niji
                                Vishwavidyalaya ( Sthapana Avam Sanchalan) Adhiniyam in 2015 at Indore MP(India). The University has been
                                established with a vision to be leader in shaping better future for mankind through quality education,
                                training and research.
                            </p>
                            <a href="http://www.svvv.edu.in/" className="btn-learn-more">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* *************************************************************
            -------------------------- Features -----------------------------
            *****************************************************************/}
            <section id="services" class="services section-bg">
                <div class="container" data-aos="fade-up">
                    <div class="section-title">
                        <h2>Features</h2>
                        <p>Year wise roadmaps please select your year and prepare for your better future</p>
                    </div>
                    <div class="row">
                        <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div class="icon-box">
                                <div class="icon"><i class='bx bx-code'></i></div>
                                <h4>First Year</h4>
                                <p>get knowlegde of programming languages which programming language is best for you</p>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="icon-box">
                                <div class="icon"><i class='bx bxs-terminal'></i></div>
                                <h4>Second Year</h4>
                                <p>Learn what is Competitive programming and which website is best to do Competitive programming</p>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in"
                            data-aos-delay="300">
                            <div class="icon-box">
                                <div class="icon"><i class='bx bxs-data'></i></div>
                                <h4>Third Year</h4>
                                <p>Get prepare for your placement and interview tips</p>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in"
                            data-aos-delay="400">
                            <div class="icon-box">
                                <div class="icon"><i class='bx bxl-javascript'></i></div>
                                <h4>Fourth Year</h4>
                                <p>Learn about internship and get best website to get best internship for you</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* *************************************************************
            -------------------------- Roadmaps -------------------------
            *****************************************************************/}
            <section id="roadmaps" class="why-us">
                <div class="container-fluid" data-aos="fade-up">
                    <div class="section-title">
                        <h2>Roadmaps</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                            <div class="content">
                                <h3>Web Development <br /><strong> learn how to build websites</strong></h3>
                                <p>
                                    Roadmap to learn web development. Here you learn about the web technologies which are use in industries
                                    and get basic idea of how to build quality websites.
                                 </p>
                            </div>
                            <div class="accordion-list">
                                <ul>
                                    <li>
                                        <a data-toggle="collapse" class="collapse" href="#accordion-list-1"><span>01</span> What is front-end?
                                        <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-1" class="collapse show" data-parent=".accordion-list">
                                            <p>
                                                The frontend of a software program or website is everything with which the user interacts. From a user standpoint, the frontend is synonymous with the user interface. ... Websites must work well on multiple devices and screen sizes, which is why modern web development typically involves responsive design.
                                            </p>
                                        </div>
                                    </li>

                                    <li>
                                        <a data-toggle="collapse" href="#accordion-list-2" class="collapsed"><span>02</span> What is Back-end?
                                        <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-2" class="collapse" data-parent=".accordion-list">
                                            <p>

                                                Back end Development refers to the server side of development where you are primarily focused on how the site works. ... This type of web development usually consists of three parts: a server, an application, and a database.
                                            </p>
                                        </div>
                                    </li>

                                    <li>
                                        <a data-toggle="collapse" href="#accordion-list-3" class="collapsed"><span>03</span> What is server API?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-3" class="collapse" data-parent=".accordion-list">
                                            <p>
                                                API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-5 align-items-stretch order-1 order-lg-2 img" data-aos="zoom-in" data-aos-delay="150">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-5 align-items-stretch order-2 order-lg-1 img" data-aos="zoom-in" data-aos-delay="150"></div>
                        <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-1 order-lg-2">
                            <div class="content">
                                <h3>Competitive Programming <br /><strong> learn about C.P. </strong></h3>
                                <p>
                                    Roadmap to learn Competative programming. Here you learn about data structures & algorithm. Get knowlegde of Hackerrank, Hackerearth, codechef etc.
                                </p>
                            </div>

                            <div class="accordion-list">
                                <ul>
                                    <li>
                                        <a data-toggle="collapse" class="collapse" href="#cp1"><span>01</span>What is the use of competitive programming?
                                        <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                        <div id="cp1" class="collapse show" data-parent=".accordion-list">
                                            <p>

                                                Competitive Programming teaches you to find the easiest solution in the quickest possible way. CP enhances your problem-solving and debugging skills giving you the real-time fun. It's brain-sport.
                                            </p>
                                        </div>
                                    </li>

                                    <li>
                                        <a data-toggle="collapse" href="#cp2" class="collapsed"><span>02</span> How do I prepare for competitive programming?
                                        <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                        <div id="cp2" class="collapse" data-parent=".accordion-list">
                                            <p>
                                                Competitive programming can only be improved by “PRACTICE, PRACTICE AND PRACTICE”.
                                            </p>
                                        </div>
                                    </li>

                                    <li>
                                        <a data-toggle="collapse" href="#cp3" class="collapsed"><span>03</span> What is the best language for competitive programming?
                                        <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                        <div id="cp3" class="collapse" data-parent=".accordion-list">
                                            <p>
                                                C++ is the most preferred language for competitive programming mainly because of its STL. Short for Standard Template Library, the STL is a collection of C++ templates to help programmers quickly tackle basic data structures and functions such as lists, stacks, arrays, etc.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* *************************************************************
            -------------------------- slide --------------------------------
            *****************************************************************/}
            <section id="cta" class="cta">
                <div class="container" data-aos="zoom-in">
                    <div class="row">
                        <div class="col-lg-9 text-center text-lg-left">
                            <h3>Start learning today for your better future</h3>
                            <p>Please click on button to start learning from today and get placed</p>
                        </div>
                        <div class="col-lg-3 cta-btn-container text-center">
                            <Link to="/StudentLogin"><button class="cta-btn align-middle">Get Started</button></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* *************************************************************
            -------------------------- Team --------------------------------
            *****************************************************************/}
            <section id="team" class="team section-bg">
                <div class="container" data-aos="fade-up">
                    <div class="section-title">
                        <h2>Team</h2>
                        <p>We are a Team of experienced students of college.</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
                                <div class="pic"><img src={nayan} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Nayan Pal</h4>
                                    <span>Chief Executive Officer</span>
                                    <p></p>
                                    <div class="social">
                                        <a href="#link"><i class='bx bxl-instagram-alt'></i></a>
                                        <a href="#link"><i class='bx bxl-linkedin-square'></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mt-4 mt-lg-0">
                            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
                                <div class="pic"><img src={manmeet} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Manmeet Juneja</h4>
                                    <span>Product Manager</span>
                                    <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                                    <div class="social">
                                        <a href="#link"><i class='bx bxl-instagram-alt'></i></a>
                                        <a href="#link"><i class='bx bxl-linkedin-square'></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mt-4">
                            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
                                <div class="pic"><img src={sarwesh} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Sarwesh Chitambre</h4>
                                    <span>CTO</span>
                                    <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                                    <div class="social">
                                        <a href="#link"><i class='bx bxl-instagram-alt'></i></a>
                                        <a href="#link"><i class='bx bxl-linkedin-square'></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mt-4">
                            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
                                <div class="pic"><img src={shakshi} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Shakshi Maheshwari</h4>
                                    <span>CTO</span>
                                    <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                                    <div class="social">
                                        <a href="#link"><i class='bx bxl-instagram-alt'></i></a>
                                        <a href="#link"><i class='bx bxl-linkedin-square'></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default withRouter(Index);