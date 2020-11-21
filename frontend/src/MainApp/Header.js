import React from 'react'
import './css/style.css'
import { Link, withRouter } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header id="header" className="fixed-top ">
                <div className="container d-flex align-items-center">
                    <h1 className="text-white mr-auto">SMART RECRUITER</h1>
                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li className="active"><a href="#about">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Features</a></li>
                            <li><a href="#roadmaps">Roadmaps</a></li>
                            <li><a href="#team">Team</a></li>
                        </ul>
                    </nav>
                    <Link to="/StudentLogin"><button className="get-started-btn scrollto">Login</button></Link>
                </div>
            </header>
        </div>
    )
}

export default withRouter(Header);