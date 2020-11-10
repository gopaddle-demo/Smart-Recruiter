import React from 'react'
import Navigation from './Navigation';

const Base = ({
    children
}) => {

    return (
        <div>
            <nav className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
                <div className="scrollbar-inner">
                    <div className="sidenav-header  align-items-center">
                        <span className="navbar-brand">
                            <h1>Smart Recruiter</h1>
                        </span>
                    </div>
                    <Navigation />
                </div>
            </nav>
            <div className="main-content" id="panel">
                <nav className="navbar navbar-top navbar-expand navbar-dark bg-main border-bottom">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="navbar-search navbar-search-light form-inline mr-sm-3" id="navbar-search-main">
                                <div className="form-group mb-0">
                                    <div className="input-group input-group-alternative input-group-merge">
                                        <input className="form-control" placeholder="Search" type="text" />
                                    </div>
                                </div>
                                <button type="button" className="close" data-action="search-close" data-target="#navbar-search-main"
                                    aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </form>
                            <ul className="navbar-nav align-items-center  ml-md-auto ">
                                <li className="nav-item d-xl-none">
                                    <div className="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin"
                                        data-target="#sidenav-main">
                                        <div className="sidenav-toggler-inner">
                                            <i className="sidenav-toggler-line"></i>
                                            <i className="sidenav-toggler-line"></i>
                                            <i className="sidenav-toggler-line"></i>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul class="navbar-nav align-items-center  ml-auto ml-md-0 ">
                                <li class="nav-item dropdown">
                                    <button class="nav-link pr-0" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        <div class="media align-items-center">
                                            <div class="media-body  ml-2  d-none d-lg-block">
                                                <span class="mb-0 text-sm  font-weight-bold">Nayan</span>
                                            </div>
                                        </div>
                                    </button>
                                    <div class="dropdown-menu  dropdown-menu-right ">
                                        <div class="dropdown-header noti-title">
                                            <h6 class="text-overflow m-0">Welcome!</h6>
                                        </div>
                                        <a href="pages/profile.html" class="dropdown-item">
                                            <i class="ni ni-single-02"></i>
                                            <span>My profile</span>
                                        </a>
                                        <div class="dropdown-divider"></div>
                                        <a href="#!" class="dropdown-item">
                                            <i class="ni ni-user-run"></i>
                                            <span>Logout</span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div>{children}</div>
            </div>
        </div>
    )
}

export default Base;
