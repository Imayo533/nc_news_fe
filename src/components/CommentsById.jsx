import { fetchCommentById } from "../api";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import CommentAdder from "./CommentAdder";
import DeleteComment from "./DeleteComment";
import UserContext from "./context/User";
import { useContext } from "react";
import "../css/App.css";

const CommentsById = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [displayComments, setDisplayComments] = useState([]);
  const { article_id } = useParams();
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    fetchCommentById(article_id).then((data) => {
      setDisplayComments(data);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <>
      <section id="reviews-355">
        <div id="reviews-355" class="cs-container">
          <h1 class="cs-toppercomments">Comments</h1>
          <CommentAdder setDisplayComments={setDisplayComments} />
          <ul class="cs-card-group">
            {displayComments.map((comment) => {
              return (
                <li id="reviews-355" class="cs-item" key={comment.comment_id}>
                  <p class="cs-review">Comment: {comment.body}</p>
                  <span class="cs-name">Author: {comment.author}</span>
                  <span class="cs-job">Created: {comment.created_at}</span>
                  <span class="cs-job">Votes: {comment.votes}</span>

                  {comment.author === loggedInUser.username ? (
                    <DeleteComment
                      id={comment.comment_id}
                      setList={setDisplayComments}
                    />
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default CommentsById;
