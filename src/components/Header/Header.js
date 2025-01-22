import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="movie-logo">Movie App</div>
      </Link>
      <div className="user-image">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="user"
        />
      </div>
    </div>
  );
}

export default Header;
