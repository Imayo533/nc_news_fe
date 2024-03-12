import axios from "axios";

const ncNews = axios.create({baseURL: "https://nc-news-vguq.onrender.com/api/"})

export const fetchArticles = (() => {
    return ncNews.get(`articles`).then((articles)=>{
        return articles.data
    })
})