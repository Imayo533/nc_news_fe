import { fetchCommentById } from "../api";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import CommentAdder from "./CommentAdder";
import DeleteComment from "./DeleteComment";
import UserContext from "./context/User";
import { useContext } from "react";


const CommentsById = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [displayComments, setDisplayComments] = useState([]);
  const { article_id } = useParams();
  const {loggedInUser} = useContext(UserContext)
 

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
    <h1>Comments</h1>
      <CommentAdder setDisplayComments={setDisplayComments}/>
      <ul id="comments">
        {displayComments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>Author: {comment.author} </p>
              <p>Created: {comment.created_at}</p>
              <p>Comment: {comment.body}</p>
              <p>Votes: {comment.votes}</p>
              {comment.author === loggedInUser.username ? (
                <DeleteComment id={comment.comment_id} setList={setDisplayComments}/>
              ) : null}
              
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CommentsById;
