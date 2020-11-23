import React from 'react'
import Base from '../Base';
import { Link } from 'react-router-dom';

export default function FourthYear() {
    return (
        <Base>
            <div className="pb-6">
                <div className="container-fluid">
                    <div className="row align-items-center pt-4">
                        <div className="col-md-12 col-6">
                            <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                    <li className="breadcrumb-item"> <Link to="/YearHome">Year</Link> / Fourth Year</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <h2 className="text-center"><span className="blink">(Step) </span> Follow the following Pointers</h2>
                    <hr class="roadmapHR"></hr>
                    <div className="row" id="cpbasicgroup">
                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#fourthyear1" aria-expanded="false" aria-controls="#fourthyear1">
                                Follow the DataStructure Roadmaps given below
                                </div>
                            <div className="collapse show" id="fourthyear1">
                                <div className="customcard">
                                    <ul>
                                        <li>You have learned a programming language with the basics of Data Structures. Now it's time to use those skills.</li>
                                    </ul>
                                    <li><Link to="/CompetitiveProgramming/DataStruture">Roadmaps For DSA Beginner</Link></li>
                                    <li><Link to="/CompetitiveProgramming/Algorithms">Roadmaps For DSA Advanced</Link></li>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#fourthyear2" aria-expanded="false" aria-controls="#fourthyear2">
                                Follow the DataStructure Roadmaps given below
                        </div>
                            <div className="collapse" id="fourthyear2">
                                <div className="customcard">
                                    <ul>
                                        <li>You have learned a programming language with the basics of Data Structures. Now it's time to use those skills.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#fourthyear3" aria-expanded="false" aria-controls="#fourthyear3">
                                Follow the DataStructure Roadmaps given below
                                </div>
                            <div className="collapse" id="fourthyear3">
                                <div className="customcard">
                                    <ul>
                                        <li>You have learned a programming language with the basics of Data Structures. Now it's time to use those skills.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#fourthyear4" aria-expanded="false" aria-controls="#fourthyear4">
                                Follow the DataStructure Roadmaps given below
                                </div>
                            <div className="collapse" id="fourthyear4">
                                <div className="customcard">
                                    <ul>
                                        <li>You have learned a programming language with the basics of Data Structures. Now it's time to use those skills.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#fourthyear5" aria-expanded="false" aria-controls="#fourthyear5">
                                Follow the DataStructure Roadmaps given below
                                </div>
                            <div className="collapse" id="fourthyear5">
                                <div className="customcard">
                                    <ul>
                                        <li>You have learned a programming language with the basics of Data Structures. Now it's time to use those skills.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#cpbasicgroup" href="#fourthyear6" aria-expanded="false" aria-controls="#fourthyear6">
                                Follow the DataStructure Roadmaps given below
                                </div>
                            <div className="collapse" id="fourthyear6">
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
