import "./header.css";
import React, { useState, useEffect } from "react";
import { client } from "../../App";
import ArticlesPage from "../../Pages/articles/ArticlesPage";
import MainPage from "../../Pages/main/mainPage";
import { NavLink, Route, Routes } from "react-router-dom";
import AllPosts from "../../Components/AllPosts";

function Header(props) {
  const [logo, setLogo] = useState("");
  useEffect(() => {
    client
      .getAsset("1rOpLG8VVa6F2Sp1Ov0E0V")
      .then((asset) => setLogo(asset.fields.file.url))
      .catch(console.error);
  }, []);

  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="logo"></img>
      <h1>History Blog</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">
        {" "}
        Articles
        <option value="articles">
          <NavLink to="/all">all the articles</NavLink>
        </option>
        <option value="authors">
          <NavLink to="/byAuthor">authors</NavLink>
        </option>
        <option value="categories">
          <NavLink to="/byCategory">categories</NavLink>
        </option>
      </NavLink>
      <span>
        <NavLink to="/">Contact</NavLink>
      </span>
      <span>
        <NavLink to="/">About</NavLink>
      </span>
      <span>
        <NavLink to="/">Log In</NavLink>
      </span>
    </div>
  );
}

export default Header;
