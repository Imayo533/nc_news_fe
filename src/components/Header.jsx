import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header>
        NC News
        <nav>
        <Link to="/" >Home</Link> <br />
        <Link to="/articles" >Articles</Link>
        </nav>
      </header>
    )
}
export default Header   