import "../css/App.css"
import Header from "./Header"
import Home from "./Home"
import ArticlesList from "./ArticlesList"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
   <Header/>
   <Routes>
   <Route path="/" element = {<Home />}/>
   <Route path="/articles" element = {<ArticlesList />}/> 
   </Routes>
   </>
  )
}

export default App
