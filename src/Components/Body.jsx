import React from "react";
import { Component } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import FAQs from "./FAQs/faqs";
import { Link, Route, Routes } from "react-router-dom";
import logo from "../assets/3DBB0D50-1DBC-4FF5-9F95-3E9E0E770A0D.png";

class Body extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navComponent: 1
        }
    }

    render() {

        return (
            <div>
                <div>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="container-fluid">
                            <div class="collapse navbar-collapse" id="navbarColor01">
                                <ul class="navbar-nav me-auto">
                                    <li class="nav-item">
                                        <img src={logo} alt="Jungle Insurance" width={50} height={50}></img>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/">Home
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/faqs">FAQs
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/about">About
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/faqs" element={<FAQs />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        )
    }
}

export default Body;