import "../css/App.css"
import Header from "./Header"
import Home from "./Home"
import SingleArticle from "./SingleArticle"
import ArticlesList from "./ArticlesList"
import { Routes, Route } from "react-router-dom"
import CommentsById from "./CommentsById"

function App() {

  return (
    <>
   <Header/>
   <Routes>
   <Route path="/" element = {<Home />}/>
   <Route path="/articles" element = {<ArticlesList />}/> 
   <Route path="/articles/:article_id" element = {<SingleArticle/>}/>
   <Route path="/articles/:article_id/comments" element = {<CommentsById/>}/>
   </Routes>
   </>
  )
}

export default App
