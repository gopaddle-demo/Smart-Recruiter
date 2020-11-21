import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const currenttab = (history, path) => {
    if (history.location.pathname === path) {
        return { background: "#edf1f4"}
    }
}

const Navigation = ({ history, path }) => {
    return (
        <div className="navbar-inner">
            <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <div className="nav-link" style={currenttab(history, "/dashboard")}>
                            <i className="ni ni-tv-2 text-primary"></i>
                            <span className="nav-link-text"><Link to="/dashboard">Dashboard</Link></span>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" style={currenttab(history, "/company")}>
                            <i className="ni ni-circle-08 text-default"></i>
                            <span className="nav-link-text"><Link to="/company">Company</Link></span>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" style={currenttab(history, "/student")}>
                            <i className="ni ni-circle-08 text-default"></i>
                            <span className="nav-link-text"><Link to="/student">Student</Link></span>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" style={currenttab(history, "/alumni")}>
                            <i className="ni ni-circle-08 text-default"></i>
                            <span className="nav-link-text"><Link to="/alumni">Alumni</Link></span>
                        </div>
                    </li>
                </ul>
                <hr className="my-3" />
            </div>
        </div>
    )
}

export default withRouter(Navigation);
