import React from "react";

const Landing = () => {
  return (
    <div>
      <header className="hero">
        <div className="overlay">
          <h1 className="text-white fw-bold display-4">🏆 Welcome to Auction App</h1>
          <p className="text-white lead">Bid, Win, and Sell Items in Real-Time</p>
          <a href="/signup" className="btn btn-light btn-lg mt-3">Join Now</a>
        </div>
      </header>
    </div>
  );
};

export default Landing;
