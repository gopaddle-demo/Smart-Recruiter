import React from 'react'
import Base from '../../Base';
import { Link } from 'react-router-dom';

export default function CompetitiveCodingIndex() {
    return (
        <Base>
            <div className="header bg-main pb-6">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row align-items-center pt-4">
                            <div className="col-lg-6 col-7">
                                <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                    <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                        <li className="breadcrumb-item"><Link to="/RoadmapsHome">Roadmaps</Link> / Competitive Programming</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-md-6">
                                <Link to="/CompetitiveProgramming/Basic">
                                    <div className="mycard card-stats">
                                        <div className="card-body">
                                            <div className="row">
                                                <button className="col-md-12">
                                                    <h4 className="card-title text-uppercase text-muted mb-0">First Learn Basic</h4>
                                                    <span className="h2 font-weight-bold mb-0">Basic of C.P.</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-xl-4 col-md-6">
                                <Link to="/CompetitiveProgramming/Roadmap">
                                    <div className="mycard card-stats">
                                        <div className="card-body">
                                            <div className="row">
                                                <button className="col-md-12">
                                                    <h4 className="card-title text-uppercase text-muted mb-0">First Learn Basic</h4>
                                                    <span className="h2 font-weight-bold mb-0">roadmaps</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}
