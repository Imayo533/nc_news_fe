import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { fetchSingleArticle, patchVoteArticleId } from "../api";
import { Link } from "react-router-dom"

const SingleArticle = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [displayArticle, setDisplayArticle] = useState([])
    const {article_id} = useParams()

    useEffect(()=>{
        fetchSingleArticle(article_id)
        .then((data)=>{
            setDisplayArticle(data.article)
            setIsLoading(false)
        })
    }, [article_id])

    if(isLoading){
        return <p>Loading....</p>
    }

    const vote = (article_id) => {
        setDisplayArticle((currentArticle)=>{
            return {...currentArticle, votes: currentArticle.votes + 1}
        })        
        patchVoteArticleId(article_id).catch(()=>{
            alert("Error: something went wrong!")
        })
    }


    return(
        <>
        <p>{displayArticle.title}</p>
        <p>Author: {displayArticle.author}</p>
        <p >Topic: {displayArticle.topic}</p>
        <img src={displayArticle.article_img_url} alt="" style={{width: "200px", height: "auto"}} />
        <p>{displayArticle.body}</p>
        <button onClick={()=> vote(displayArticle.article_id)}>Vote</button>
        <p>Votes: {displayArticle.votes}</p>
        <p>Created: {displayArticle.created_at}</p>
        <Link to={`/articles/${displayArticle.article_id}/comments`} ><button>Comments</button></Link>


        </>
    )
}

export default SingleArticle