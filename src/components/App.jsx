import "../css/App.css"
import Header from "./Header"
import Home from "./Home"
import SingleArticle from "./SingleArticle"
import ArticlesList from "./ArticlesList"
import UsersList from "./UsersList"
import { Routes, Route } from "react-router-dom"
import CommentsById from "./CommentsById"
import { useState } from "react"
import UserContext from "./context/User"


function App() {

  const [loggedInUser, setLoggedInUser] = useState("")
  //this object is to be passed in useState 
  // {
  //   username: 'tickle122',
  //   name: 'Tom Tickle',
  //   avatar_url:
  //     'https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953'
  // }
 
  return (
    <UserContext.Provider value={{loggedInUser: loggedInUser, setLoggedInUser: setLoggedInUser}}>
   <Header/>
   <Routes>
   <Route path="/" element = {<Home />}/>
   <Route path="/articles" element = {<ArticlesList />}/> 
   <Route path="/articles/:article_id" element = {<SingleArticle/>}/>
   <Route path="/articles/:article_id/comments" element = {<CommentsById/>}/>
   <Route path="/users" element = {<UsersList />}/> 
   </Routes>
   </UserContext.Provider>
  )
}

export default App
