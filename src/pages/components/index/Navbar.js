// import Navbar from "./Navbar"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



import { Link, BrowserRouter as Router } from "react-router-dom";

const Navbar = () => {
    return (
        <section className='section navbar-section'>
            <div className='container-fluid'>


                <nav className="navbar navbar-expand-lg navbar-white custom-navbar" id='navbars'>
                    <div className="container  ">
                        <a className="navbar-brand" href="#"><h3>Arsha</h3></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" id='home-nav' aria-current="page" href="/">Home</a>
                                </li>
                                <Router>
                                    <li className="nav-item">
                                        <Link
                                            activeClass="active"
                                            to="about"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                            className="nav-link"
                                        >
                                            About
                                        </Link>
                                    </li>
                                </Router>
                                <li className="nav-item">
                                    <a className="nav-link" href="/services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/protfolio">Protfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/team">Team</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">Contact</a>
                                </li>
                                <li className="nav-item">

                                    <a className="nav-link " id='getstarted' href="/login">Get Started</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    );
}
export default Navbar;