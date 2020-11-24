import React from 'react'
import Base from '../Base';
import { Link } from 'react-router-dom';

export default function FirstYear() {
    return (
        <Base>
            <div className="pb-6">
                <div className="container-fluid">
                    <div className="row align-items-center pt-4">
                        <div className="col-md-12 col-6">
                            <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                    <li className="breadcrumb-item"> <Link to="/YearHome">Year</Link> / First Year</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <h2 className="text-center"><span className="blink">(Step) </span> Follow the following Pointers</h2>
                    <hr class="roadmapHR"></hr>
                    <div className="row" id="cpbasicgroup">
                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#firstyear1" aria-expanded="false" aria-controls="#firstyear1">
                                Follow the DataStructure Roadmaps given below
                                </div>
                            <div className="collapse show" id="firstyear1">
                                <div className="customcard">
                                    <ul>
                                        <li>You have learned a programming language with the basics of Data Structures. Now it's time to use those skills.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#firstyear2" aria-expanded="false" aria-controls="#firstyear2">
                                Follow the DataStructure Roadmaps given below
                                </div>
                            <div className="collapse" id="firstyear2">
                                <div className="customcard">
                                    <ul>
                                        <li>You have learned a programming language with the basics of Data Structures. Now it's time to use those skills.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#firstyear3" aria-expanded="false" aria-controls="#firstyear3">
                                Follow the DataStructure Roadmaps given below
                                </div>
                            <div className="collapse" id="firstyear3">
                                <div className="customcard">
                                    <ul>
                                        <li>You have learned a programming language with the basics of Data Structures. Now it's time to use those skills.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#firstyear4" aria-expanded="false" aria-controls="#firstyear4">
                                Follow the DataStructure Roadmaps given below
                                </div>
                            <div className="collapse" id="firstyear4">
                                <div className="customcard">
                                    <ul>
                                        <li>You have learned a programming language with the basics of Data Structures. Now it's time to use those skills.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#firstyear5" aria-expanded="false" aria-controls="#firstyear5">
                                Follow the DataStructure Roadmaps given below
                                </div>
                            <div className="collapse" id="firstyear5">
                                <div className="customcard">
                                    <ul>
                                        <li>You have learned a programming language with the basics of Data Structures. Now it's time to use those skills.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </Base>
    )
}
