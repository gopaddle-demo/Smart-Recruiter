import React from 'react'
import Base from '../../Base'
import { Link } from 'react-router-dom';

export default function Algorithms() {
    return (
        <Base>

            <div className="basic_cp pb-6">
                <div className="container-fluid">
                    {/* ---------------------------------------- First section start -------------------------------- */}

                    <div className="row align-items-center pt-4">
                        <div className="col-md-12 col-6">
                            <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                    <li className="breadcrumb-item"> <Link to="/RoadmapsHome">Roadmaps</Link> / <Link to="/CompetitiveProgramming">Competitive Programming </Link> / Roadmap of Algorithms</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
        
    )
}
