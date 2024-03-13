import { fetchCommentById } from "../api";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const CommentsById = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [displayComments, setDisplayComments] = useState([]);
  const { article_id } = useParams();

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
      <ul id="comments">
        {displayComments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>Author: {comment.author} </p>
              <p>Created: {comment.created_at}</p>
              <p>Comment: {comment.body}</p>
              <p>Votes: {comment.votes}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CommentsById;
