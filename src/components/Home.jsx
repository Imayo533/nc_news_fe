import React, { useEffect, useLayoutEffect, useState } from "react";
import { fetchArticles } from "../api";
import "../css/App.css";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Home = () => {
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
    <ul className="cs-card-group">
      {articles.slice(0, 4).map((article) => {
        return (
          <li className="cs-item" key={article.article_id}>
            <picture className="cs-picture">
              <source
                media="(max-width: 600px)"
                srcSet={article.article_img_url}
              />
              <img
                loading="lazy"
                decoding="async"
                src={article.article_img_url}
                alt="article"
                width="413"
                height="480"
              />
            </picture>
            <div className="cs-info">
              <span className="cs-date">
                <img
                  className="cs-icon"
                  loading="lazy"
                  decoding="async"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/calendar.svg"
                  alt="article"
                  width="20"
                  height="20"
                />
                {article.created_at}
              </span>
              <h3 className="cs-h3">{article.title}</h3>

              <Link className="cs-link" to={`/articles/${article.article_id}`}>
                Read More
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
