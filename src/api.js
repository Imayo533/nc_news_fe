import axios from "axios";

const ncNews = axios.create({baseURL: "https://nc-news-vguq.onrender.com/api/"})

export const fetchArticles = (() => {
    return ncNews.get(`articles`).then((articles)=>{
        return articles.data
    })
})

export const fetchSingleArticle = ((article_id)=>{
    return ncNews.get(`articles/${article_id}`).then((article)=>{
        return article.data
    })
})

export const fetchCommentById = ((article_id)=>{
    return ncNews.get(`articles/${article_id}/comments`).then((comment)=>{
        return comment.data
    })
})