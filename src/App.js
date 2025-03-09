import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";
import AuctionItem from "./components/AuctionItem";
import PostAuction from "./components/PostAuction";
import Landing from "./components/Landing";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UpdateAuction from "./components/update";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is authenticated on initial load
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token); // Convert token existence to boolean
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="app">
        <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />

        <main className="container mt-4">
          <Routes>
            <Route path="/home" element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auction/:id" element={<AuctionItem />} />
            <Route path="/update-auction/:id" element={<UpdateAuction />} />

            {/* Protected Routes (only for authenticated users) */}
            {isAuthenticated ? (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/post-auction" element={<PostAuction />} />
              </>
            ) : null}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
