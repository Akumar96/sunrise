import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Route} from "react-router";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className="main_banner sticky-top">
      <nav className="navbar navbar-expand-lg p-3 navbar-dark transparent-nav nav-js">
        <Link to="/"className="navbar-brand" >
          ELLA
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">

            <Link to="/contact" className="nav-item nav-link">contact</Link>
        
            
            <Link to="/about" className="nav-item nav-link">about</Link>
          </div>
        </div>
      </nav>
      
    </div>
    
  );
}

export default Navbar;
