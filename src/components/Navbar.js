import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({ isAuthenticated, handleLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div >
        
       <div class="AuctionApp">
                 {/* Centered Brand Name */}
         <Link className="navbar-brand fw-bold fs-2 text-uppercase mx-auto" to="/home">  
          AUCTION APP
        </Link>

        {/* Toggle Button for Mobile */}
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
       </div>
           

       <div className="d-flex">
        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-black fw-bold me-3" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black fw-bold me-3" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black fw-bold me-3" to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Right Side Navigation (Auth Links) */}
        <div className="d-flex align-items-center">
          {!isAuthenticated ? (
            <>
              <Link className="nav-link text-black fw-bold me-3" to="/signin">Signin</Link>
              <Link className="nav-link text-black fw-bold" to="/signup">Signup</Link>
            </>
          ) : (
            <>
              <Link className="nav-link text-black fw-bold me-3" to="/dashboard">Dashboard</Link>
              <Link className="nav-link text-black fw-bold me-3" to="/post-auction">Post Auction</Link>
              {isAuthenticated && (
              <button style={{ marginLeft: '10px', background: 'red', color: 'white' }} onClick={handleLogout} className="nav-link logout-button">Logout</button>
            )}
            </>
          )}
        </div>
       </div>

      </div>
    </nav>
  );
};

export default Navbar;
