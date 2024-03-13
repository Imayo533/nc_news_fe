import React, { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import { Link } from "react-router-dom"

const ArticlesList = () => {
const [articles, setArticle] = useState([])
const [isLoading, setIsLoading] = useState(true)

useEffect(()=>{
    fetchArticles()
    .then((data)=>{
        setArticle(data)
        setIsLoading(false)
    })
}, [])

if(isLoading){
    return <p>Loading...</p>
}

return(
    <>
    <ul id="articles">
        {articles.map((article)=>{
            return <li key = {article.article_id}>

               <img src={article.article_img_url} alt="" style={{width: "80px", height: "auto"}}/> <br />
                Title: {article.title} <br /> 
                Author: {article.author} <br />
                <Link to={`/articles/${article.article_id}`} ><button>See more</button></Link>
            </li>
        })}
    </ul>
    </>
)
}



export default ArticlesList