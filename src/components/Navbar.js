import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
      <>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark p-2">
          <div className="container">
            <Link className="navbar-brand mb-0 h1" to="/">
              NewsWaves
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item ">
                  <Link
                    className="nav-link text-light"
                    aria-current="page"
                    to="/"
                  >
                    General
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link className="nav-link text-light" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link className="nav-link text-light" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link className="nav-link text-light" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link className="nav-link text-light" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link className="nav-link text-light" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <Link className="nav-link text-light" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  
}
