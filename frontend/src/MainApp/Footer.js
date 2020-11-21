import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer id="footer">
                <div class="footer-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 footer-contact">
                                <h1>Svvv <br /> Smart <br /> Recruiter</h1>
                            </div>
                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#link">Home</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#link">About us</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#link">Services</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#link">Terms of service</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Roadmaps</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#link">Web Development Track</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#link">Competitive programming Track</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#link">Placement Track</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#link">Higher Studies Track</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Our Social Networks</h4>
                                <div class="social-links mt-3">
                                    <a href="#link" class="twitter"><i class="bx bxl-twitter"></i></a>
                                    <a href="#link" class="facebook"><i class="bx bxl-facebook"></i></a>
                                    <a href="#link" class="instagram"><i class="bx bxl-instagram"></i></a>
                                    <a href="#link" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container footer-bottom clearfix">
                    <div class="copyright">
                        &copy; Copyright <strong><span>Smart Recruiter </span></strong>. All Rights Reserved
                    </div>
                    <div class="credits">
                        Designed and Develop by Nayan Pal
                    </div>
                </div>
            </footer>
            <a href="#" class="back-to-top"><i class='bx bxs-up-arrow-alt bx-fade-down'></i></a>
        </div>
    )
}

export default Footer;