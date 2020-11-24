import React from 'react'
import Base from '../../Base'
import '../../css/StudentDashBoard.css';
import { Link } from 'react-router-dom';

export default function BasicWebDevelopment() {
    return (
        <Base>
            <div className="basic_webDev pb-6">
                <div className="container-fluid">
                    <div className="row align-items-center pt-4">
                        <div className="col-md-12 col-6">
                            <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                    <li className="breadcrumb-item"> <Link to="/RoadmapsHome">Roadmaps</Link> / <Link to="/WebDevelopment">Web Development</Link> / Basic of Web Development</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="row" id="basicwebgroup">
                        <div className="col-md-6 col-12">
<<<<<<< HEAD
                            <div className="collaspebtn" data-toggle="collapse" href="#internet" aria-expanded="false" aria-controls="#internet">
=======
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#basicwebgroup" href="#internet" aria-expanded="false" aria-controls="internet">
>>>>>>> 5fb070765dd3f1d40e06447ffabe96af3a65ddb3
                                What is Internet?
                                </div>
                            <div className="collapse show" id="internet">
                                <div className="customcard">
                                    The Internet is a global computer network for communication – actually nothing more than a basic computer network. The Internet simply moves data from one place to another, so that we can chat, browse and share. There are millions upon millions of servers on the Internet.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
<<<<<<< HEAD
                            <div className="collaspebtn" data-toggle="collapse" href="#http" aria-expanded="false" aria-controls="#http">
=======
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#basicwebgroup" href="#http" aria-expanded="false" aria-controls="internet">
>>>>>>> 5fb070765dd3f1d40e06447ffabe96af3a65ddb3
                                How does the Internet work?
                                </div>
                            <div className="collapse" id="http">
                                <div className="customcard">
                                    The Internet is a network of networks. It works by using a technique called packet switching, and by relying on standardized networking protocols that all computers can interpret.
                                        <br />
                                    <a href="https://www.youtube.com/watch?v=6epiGBMXBDs" target="blank">Know More by Watching video</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#basicwebgroup" href="#dns" aria-expanded="false" aria-controls="internet">
                                What is HTTP?
                                </div>
                            <div className="collapse" id="dns">
                                <div className="customcard">
                                    <ul>
                                        <li>HTTP stands for Hyper Text Transfer Protocol</li>
                                        <li>WWW is about communication between web clients and servers</li>
                                        <li>Communication between client computers and web servers is done by sending HTTP Requests and receiving HTTP Responses</li>
                                    </ul>
                                    <a href="https://www.youtube.com/watch?v=H7bDwI5nUl8" target="blank">Know More by Watching video</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" data-parent="#basicwebgroup" href="#browser" aria-expanded="false" aria-controls="internet">
                                How browser works step by step?
                                </div>
                            <div className="collapse" id="browser">
                                <div className="customcard">
                                    <ul>
                                        <li>Process HTML markup and build the DOM tree.</li>
                                        <li>Process CSS markup and build the CSSOM tree.</li>
                                        <li>Combine the DOM and CSSOM into a render tree.</li>
                                        <li>Run layout on the render tree to compute geometry of each node.</li>
                                        <li>Paint the individual nodes to the screen.</li>
                                    </ul>
                                    <a href="https://www.youtube.com/watch?v=5VEDjg9zGEk" target="blank">Know More by Watching video</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="collaspebtn" data-toggle="collapse" href="#http" aria-expanded="false" aria-controls="internet">
                            what is domain ?
                                </div>
                            <div className="collapse" id="http">
                                <div className="customcard">
                                Domain names are used to identify one or more IP addresses. For example, the domain name microsoft.com represents about a dozen IP addresses. Domain names are used in URLs to identify particular Web pages. For example, in the URL http://www.pcwebopedia.com/index.html, the domain name is pcwebopedia.com
                                        <br />
                                    <a href="https://www.youtube.com/watch?v=6epiGBMXBDs" target="blank">Know More by Watching video</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="collaspebtn" data-toggle="collapse" href="#hosting" aria-expanded="false" aria-controls="#hosting">
                            what is web hosting ?
                                </div>
                            <div className="collapse" id="hosting">
                                <div className="customcard">
                                When a hosting provider allocates space on a web server for a website to store its files, they are hosting a website. Web hosting makes the files that comprise a website (code, images, etc.) available for viewing online. Every website you’ve ever visited is hosted on a server. The amount of space allocated on a server to a website depends on the type of hosting. The main types of hosting are shared, dedicated, VPS and reseller. They are differentiated by the kind of technology used for the server, the level of management provided and the additional services on offer.
                                        <br />
                                    <a href="https://www.youtube.com/watch?v=6epiGBMXBDs" target="blank">Know More by Watching video</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="collaspebtn" data-toggle="collapse" href="#http" aria-expanded="false" aria-controls="internet">
                            what is web hosting ?
                                </div>
                            <div className="collapse" id="http">
                                <div className="customcard">
                                When a hosting provider allocates space on a web server for a website to store its files, they are hosting a website. Web hosting makes the files that comprise a website (code, images, etc.) available for viewing online. Every website you’ve ever visited is hosted on a server. The amount of space allocated on a server to a website depends on the type of hosting. The main types of hosting are shared, dedicated, VPS and reseller. They are differentiated by the kind of technology used for the server, the level of management provided and the additional services on offer.
                                        <br />
                                    <a href="https://www.youtube.com/watch?v=6epiGBMXBDs" target="blank">Know More by Watching video</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="collaspebtn" data-toggle="collapse" href="#http" aria-expanded="false" aria-controls="internet">
                            what is cloud computing ?
                                </div>
                            <div className="collapse" id="http">
                                <div className="customcard">
                                Cloud computing is the on-demand availability of computer system resources, especially data storage (cloud storage) and computing power, without direct active management by the user. The term is generally used to describe data centers available to many users over the Internet.[1] Large clouds, predominant today, often have functions distributed over multiple locations from central servers. If the connection to the user is relatively close, it may be designated an edge server.
                                        <br />
                                    <a href="https://www.youtube.com/watch?v=6epiGBMXBDs" target="blank">Know More by Watching video</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-3">
                            <div className="collaspebtn" data-toggle="collapse" href="#browser" aria-expanded="false" aria-controls="internet">
                                Technology used in WebDevelopment
                                </div>
                            <div className="collapse" id="browser">
                                <div className="customcard">
                                    <ul>
                                        <li>HTML (HyperText Markup Language).</li>
                                        <li>CSS (Cascading Style Sheets).</li>
                                        <li>JavaScript.</li>
                                        <li>Ajax (Asynchronous JavaScript and XML).</li>
                                        <li>jQuery (JavaScript Framework Library - commonly used in Ajax development).</li>
                                        <li>MooTools (JavaScript Framework Library - commonly used in Ajax development).</li>
                                        <li>Dojo Toolkit (JavaScript Framework Library - commonly used in Ajax development).</li>
                                     
                                    </ul>
                                    <a href="https://www.youtube.com/watch?v=5VEDjg9zGEk" target="blank">Know More by Watching video</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="collaspebtn" data-toggle="collapse" href="#http" aria-expanded="false" aria-controls="internet">
                            what is ip address ?
                                </div>
                            <div className="collapse" id="http">
                                <div className="customcard">
                                An Internet Protocol address (IP address) is a numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication.[1][2] An IP address serves two main functions: host or network interface identification and location addressing.
                                        <br />
                                    <a href="https://www.youtube.com/watch?v=6epiGBMXBDs" target="blank">Know More by Watching video</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}
