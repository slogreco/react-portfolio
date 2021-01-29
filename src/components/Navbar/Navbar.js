import {Link} from "react-router-dom"
import React from "react";
import "./style.css";

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg nav-background" >
            <Link className="navbar-brand nav-title" to="/">Shoshanah Lo Greco</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link nav-text" to="/about">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav-text" to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link nav-text" to="/contact">Contact Me</Link>
                    </li>
                </ul>
            </div>
        </nav>

        
    )
}

export default Navbar;