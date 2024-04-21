import { useContext, useState } from "react";
import { postComment } from "../api";
import UserContext from "./context/User";
import { useParams } from "react-router-dom";
import "../css/App.css";

const CommentAdder = ({ setDisplayComments }) => {
  const { article_id } = useParams();
  const [postSuccess, setPostSuccess] = useState(false);
  const { loggedInUser } = useContext(UserContext);
  const [comment, setComment] = useState("");
  const handlePlaceholder = () => {
    if (!loggedInUser.username) {
      return "Must be logged in to comment";
    } else {
      return !postSuccess ? "Add a comment" : "Successfully posted!";
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setComment(value);
  };

  return (
    <section id="cta-1611">
      <div class="cs-containerform">
        <div class="cs-contentform">
          <form
            class="cs-form"
            onSubmit={(e) => {
              e.preventDefault();

              postComment(article_id, {
                username: loggedInUser.username,
                body: comment,
              })
                .then((newComment) => {
                  setDisplayComments((allComments) => {
                    return [newComment, ...allComments];
                  });
                  setPostSuccess(true);
                  setComment("");
                })
                .catch(() => {
                  alert("Error: something went wrong!");
                });
            }}
          >
            <textarea
              class="cs-input"
              required
              onChange={handleChange}
              type="text"
              value={comment}
              name="comment"
              id="comment"
              placeholder={handlePlaceholder()}
              disabled={!loggedInUser.username}
            ></textarea>
            <button class="cs-button-solid cs-submit" type="submit">
              Post
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default CommentAdder;
