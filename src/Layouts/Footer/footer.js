import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <span>
        <Link to="/">Home</Link>
      </span>
      <span>
        <Link to="/">Contact</Link>
      </span>
      <span>
        <Link to="/">About</Link>
      </span>
    </div>
  );
}

export default Footer;
