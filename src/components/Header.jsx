import React from "react";
import { Link } from "react-router-dom";
import UserContext from "./context/User";
import { useContext } from "react";
import "../css/App.css";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <header>
      <nav class="cs-nav">
        <div>
          {" "}
          <Link className="cs-button-solid" to="/">
            Home
          </Link>
        </div>

        <div>
          <Link className="cs-button-solid" to="/topics">
            Topics
          </Link>{" "}
        </div>
        <div>
          <Link className="cs-button-solid" to="/articles">
            Articles
          </Link>{" "}
        </div>
        <div>
          <Link className="cs-button-solid" to="/users">
            Login
          </Link>
        </div>
      </nav>
      <img
        src={loggedInUser.avatar_url}
        style={{ width: "80px", height: "auto" }}
      />
      <h1>
        {loggedInUser.username
          ? `${loggedInUser.username} is logged in`
          : `Welcome! Please login to comment`}{" "}
      </h1>
      <div className="cs-content">
        <div className="cs-flex">
          <span className="cs-topper">NEWS & ARTICLES</span>
          <h2 className="cs-title">NC News</h2> <br />
        </div>
      </div>
    </header>
  );
};
export default Header;
