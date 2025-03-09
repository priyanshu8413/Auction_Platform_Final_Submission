import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-4">
      <p>&copy; {new Date().getFullYear()} Auction App. All Rights Reserved.</p>
      <p>🌟 Experience the thrill of bidding today!</p>
    </footer>
  );
};

export default Footer;
