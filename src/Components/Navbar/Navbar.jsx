import logo from "../../assets/3DBB0D50-1DBC-4FF5-9F95-3E9E0E770A0D.png";
import React from "react";
import { Component } from "react";

class Navbar extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarColor01">
              <ul class="navbar-nav me-auto">
                <li class = "nav-item">
                  <img src = {logo} alt = "Jungle Insurance" width={50} height={50}></img>
                </li>
                <li class="nav-item">
                  <a class="nav-link"  onClick={(event) => {this.props.setNav(1)}}>Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link"  onClick={(event) => {this.props.setNav(2)}}>FAQs
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link"  onClick={(event) => {this.props.setNav(3)}}>About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;