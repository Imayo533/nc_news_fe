import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleArticle, patchVoteArticleId } from "../api";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const SingleArticle = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [displayArticle, setDisplayArticle] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    fetchSingleArticle(article_id).then((data) => {
      setDisplayArticle(data.article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <Loading />;
  }

  const vote = (article_id) => {
    setDisplayArticle((currentArticle) => {
      return { ...currentArticle, votes: currentArticle.votes + 1 };
    });
    patchVoteArticleId(article_id).catch(() => {
      alert("Error: something went wrong!");
    });
  };

  const comments = (article_id) => {
    CommentsById(article_id);
  };

  return (
    <>
      <section id="hero-1785">
        <div class="cs-single-article">
          <div class="cs-content-article">
            <span class="cs-topper-article">
              Topic: {displayArticle.topic}{" "}
            </span>
            <span class="cs-topper-article">
              {" "}
              Author: {displayArticle.author}{" "}
            </span>

            <span class="cs-topper-article">
              Created: {displayArticle.created_at}{" "}
            </span>
            <span class="cs-topper-article">
              {" "}
              Votes: {displayArticle.votes}{" "}
            </span>
            <h1 class="cs-title-article"> {displayArticle.title} </h1>
            <p class="cs-text-article">{displayArticle.body}</p>
            <div class="cs-button-group-article">
              <Link
                class="cs-button-solid-article cs-button1"
                to={`/articles/${displayArticle.article_id}/comments`}
              >
                Comments
              </Link>

              <button
                onClick={() => vote(displayArticle.article_id)}
                class="cs-button-solid-article cs-button1"
              >
                Vote
              </button>
            </div>
          </div>
        </div>

        <picture class="cs-background">
          <source
            media="(max-width: 600px)"
            srcset={displayArticle.article_img_url}
          />
          <source
            media="(min-width: 601px)"
            srcset={displayArticle.article_img_url}
          />
          <img
            loading="lazy"
            decoding="async"
            src={displayArticle.article_img_url}
            alt="field"
            width="1920"
            height="1200"
            aria-hidden="true"
          />
        </picture>

        <img
          class="cs-graphic"
          src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/white-splatter2.svg"
          alt="graphic"
          height="161"
          width="1920"
          loading="lazy"
          decoding="async"
        />
      </section>
    </>
  );
};

export default SingleArticle;
