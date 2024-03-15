import React from "react";
import { Link } from "react-router-dom";
import UserContext from "./context/User";
import { useContext } from "react";

const Header = () => {

  const {loggedInUser} = useContext(UserContext)


    return(
        <header>
        <h1>NC news!</h1> <br />
        <img src={loggedInUser.avatar_url} style={{width: "80px", height: "auto"}}/>
        <h2>{loggedInUser.username ? `${loggedInUser.username} is logged in` : `Welcome! Please login!`} </h2>
        
        {/* <p>{!loggedInUser.username ? `Please login` : loggedInUser.username `is logged in!`}</p> */}
        <nav>
        <Link to="/" >Home</Link> <br />
        <Link to="/articles" >Articles</Link> <br />
        <Link to="/users">Login</Link>
        </nav>
      </header>
    )
}
export default Header   