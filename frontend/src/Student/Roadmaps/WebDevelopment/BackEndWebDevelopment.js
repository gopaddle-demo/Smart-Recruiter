import React from 'react'
import Base from '../../Base'
import '../../css/StudentDashBoard.css';
import { Link } from 'react-router-dom'
import python from '../../../images/roadmaps/webDevelopment/BackEnd/python.png';

export default function BackEndWebDevelopment() {
    return (
        <Base>
            <div className="basic_webDev pb-6">
                <div className="container-fluid">
                    <div className="row align-items-center pt-4">
                        <div className="col-lg-6 col-7">
                            <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                    <li className="breadcrumb-item"><Link to="/RoadmapsHome">Roadmaps</Link> / <Link to="/WebDevelopment">Web Development</Link> / Back End Web Development</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <h3 className="text-center"><u><span className="blink">(Step - 1)</span> Before Learning Back End Development get familier with back end terminologies</u></h3>
                    <div className="row mt-2">
                        <div className="col-md-6 col-12 mt-2">
                            <div className="collaspebtn" data-toggle="collapse" href="#backcollapse1" aria-expanded="false" aria-controls="backcollapse1">
                                What is web server ?
                                </div>
                            <div className="collapse" id="backcollapse1">
                                <div className="customcard">
                                    A web server is server software, or hardware dedicated to running this software, that can satisfy client requests on the World Wide Web. A web server can, in general, contain one or more websites. A web server processes incoming network requests over HTTP and several other related protocols.
                                    <br />
                                    <a href="https://www.youtube.com/watch?v=cxdsNQXFFDk" target="blank">Know More by watching video</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-2">
                            <div className="collaspebtn" data-toggle="collapse" href="#backcollapse2" aria-expanded="false" aria-controls="backcollapse2">
                                What is RESTful API's ?
                                </div>
                            <div className="collapse" id="backcollapse2">
                                <div className="customcard">

                                    The term REST stands for REpresentational State Transfer. It is an architectural style that defines a set of rules in order to create Web Services. In a client-server communication, REST suggests to create an object of the data requested by the client and send the values of the object in response to the user. For example, if the user is requesting for a movie in Bangalore at a certain place and time, then you can create an object on the server-side.
                                    <br />
                                    <a href="https://www.youtube.com/watch?v=qVTAB8Z2VmA" target="blank">Know More by watching video</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" href="#backcollapse3" aria-expanded="false" aria-controls="backcollapse3">
                                What is MVC ?
                                </div>
                            <div className="collapse" id="backcollapse3">
                                <div className="customcard">
                                    The Model-View-Controller (MVC) is an architectural pattern that separates an application into three main logical components: the model, the view, and the controller. Each of these components are built to handle specific development aspects of an application. MVC is one of the most frequently used industry-standard web development framework to create scalable and extensible projects.
                                    <br />
                                    <a href="https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.htm" target="blank">Learn more about MVC</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" href="#backcollapse4" aria-expanded="false" aria-controls="backcollapse4">
                                What is oAuth 2.0 ?
                                </div>
                            <div className="collapse" id="backcollapse4">
                                <div className="customcard">
                                    OAuth is an open standard for access delegation, commonly used as a way for Internet users to grant websites or applications access to their information on other websites but without giving them the passwords.
                                    <br />
                                    <a href="https://www.youtube.com/watch?v=xdiLXCYab7g" target="blank">Learn more about MVC</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" href="#backcollapse5" aria-expanded="false" aria-controls="backcollapse5">
                                What is Database and different b/w Relational and Nosql DB ?
                                </div>
                            <div className="collapse" id="backcollapse5">
                                <div className="customcard">
                                    A database is an organized collection of data, generally stored and accessed electronically from a computer system. Where databases are more complex they are often developed using formal design and modeling techniques.      <br />
                                    <a href="https://www.javatpoint.com/what-is-database" target="blank">Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" href="#backcollapse6" aria-expanded="false" aria-controls="backcollapse6">
                                Back end langauages and framework ?
                                </div>
                            <div className="collapse" id="backcollapse6">
                                <div className="customcard">
                                    <ul>
                                        <li> Spring (Java framework) </li>
                                        <li> Expressjs (NodeJs framework) </li>
                                        <li> Django (python framework) </li>
                                        <li> Laravel (PHP framework) </li>
                                        <li> ASP.Net (.Net framework) </li>
                                    </ul>
                                    <a href="https://www.decipherzone.com/blog-detail/top-10-best-backend-frameworks-for-web-development-in-2020" target="blank">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 className="text-center mt-5"><u><span className="blink">(Step - 2)</span> Choose one langauage from the list (Java, Python, NodeJs, PHP, Ruby)</u></h3>
                    <div className="row align-items-center pt-4">
                        <div className="col-lg-6 col-7">
                            <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                    <li className="breadcrumb-item"> Roadmap for python </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="row mb-4 mt-4">
                        <div className="col-md-9">
                            <div className="frontEndBasicimg">
                                <img className="img-responsive" src={python} alt="Back End python img" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="heading text-center">
                                <h3><u>First learn basic front end languages</u></h3>
                            </div>
                            <div className="collaspebtn">
                                <a href="https://www.w3schools.com/html/default.asp" target="blank">Learn HTML</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.w3schools.com/css/default.asp" target="blank">Learn CSS</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.w3schools.com/js/default.asp" target="blank">Learn JavaScript</a>
                            </div>
                            <div className="collaspebtn mt-3">
                                <a href="https://www.w3schools.com/jquery/default.asp" target="blank">Learn Jquery</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}
