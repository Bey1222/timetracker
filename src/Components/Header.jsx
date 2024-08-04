import React from "react";

const Header = ({ image }) => {
  return (
    <header className="header">
      <h1>Personal Ticket Tracking Dashboard</h1>
      <img src={image} alt="Profile" />
    </header>
  );
};

export default Header;
