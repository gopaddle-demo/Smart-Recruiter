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
                        <div className="nav-link" style={currenttab(history, "/StudentHome")}>
                            <i className="ni ni-tv-2 text-primary"></i>
                            <span className="nav-link-text"><Link to="/StudentHome">Dashboard</Link></span>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" style={currenttab(history, "/RoadmapsHome")}>
                            <i className="ni ni-circle-08 text-default"></i>
                            <span className="nav-link-text"><Link to="/RoadmapsHome">Roadmaps</Link></span>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" style={currenttab(history, "/StudentAlumni")}>
                            <i className="ni ni-circle-08 text-default"></i>
                            <span className="nav-link-text"><Link to="/StudentAlumni">Alumni</Link></span>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" style={currenttab(history, "/YearHome")}>
                            <i className="ni ni-circle-08 text-default"></i>
                            <span className="nav-link-text"><Link to="/YearHome">Select Year</Link></span>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" style={currenttab(history, "/OffCampus")}>
                            <i className="ni ni-circle-08 text-default"></i>
                            <span className="nav-link-text"><Link to="/OffCampus">Off Campus</Link></span>
                        </div>
                    </li>
                </ul>
                <hr className="my-3" />
            </div>
        </div>
    )
}

export default withRouter(Navigation);
