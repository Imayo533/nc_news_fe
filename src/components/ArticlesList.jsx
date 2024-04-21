import React, { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const ArticlesList = () => {
  const [articles, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles().then((data) => {
      setArticle(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <ul class="cs-card-group">
        {articles.map((article) => {
          return (
            <li class="cs-item" key={article.article_id}>
              <picture class="cs-picture">
                <source
                  media="(max-width: 600px)"
                  srcSet={article.article_img_url}
                />
                <img
                  loading="lazy"
                  decoding="async"
                  src={article.article_img_url}
                  alt="article image"
                  width="413"
                  height="480"
                />
              </picture>
              <div class="cs-info">
                <span class="cs-date">
                  <img
                    class="cs-icon"
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/calendar.svg"
                    alt="article"
                    width="20"
                    height="20"
                  />
                  {article.created_at}
                </span>
                <h3 class="cs-h3">{article.title}</h3>
                <Link class="cs-link" to={`/articles/${article.article_id}`}>
                  Read More
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ArticlesList;
