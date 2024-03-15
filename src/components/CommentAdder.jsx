import { useContext, useState } from "react";
import { postComment } from "../api";
import UserContext from "./context/User";
import { useParams } from "react-router-dom";

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
    <form
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
        required
        onChange={handleChange}
        type="text"
        value={comment}
        name="comment"
        id="comment"
        placeholder={handlePlaceholder()}
        disabled={!loggedInUser.username}
      ></textarea>
      <button type="submit">Post</button>
    </form>
  );
  // const userData = useContext(UserContext);
  // console.log(userData,"from comment adder<<<<<<<<")
  // const [username, setUsername] = useState(userData.loggedInUser.username);
  // const [addButton, setAddButton] = useState(false);
  // const [error, setError] = useState("");

  // const handleSubmit = (event) => {
  //     event.preventDefault();

  //     postComment(newComment, article_id, username).then((comment)=>{
  //         setNewComment("")
  //         setComments((currentComments)=>{
  //             const commentList = [...currentComments]
  //             commentList.unshift(comment)
  //             return commentList
  //         })
  //         setAddButton(false)
  //         setError(false)
  //     })
  //     .catch(()=>{
  //         setError(true)
  //         setAddButton(false)
  //     })
  // };
  // return(

  //     <form onSubmit={(event)=>{
  //         handleSubmit(event)
  //         setError("")
  //     }}>
  //     <label htmlFor="newComment">
  //         <p>Add comment:</p>
  //     </label> <br />
  //     <textarea required name="" cols="30" rows="10"
  //     id = "newComment"
  //     value={newComment}
  //     onChange={(event)=>{
  //         console.log(event,"event<<<<<<<<<<<")
  //         setNewComment(event.target.value)
  //         setError("")

  //     }}
  //     ></textarea>
  //     <br />
  //     <p>User: {userData.loggedInUser.username}</p>
  //     <br />
  //     <p>{error === "" ? "" : error === false ? "Comment added!" : "Comment failed to add..."}</p>

  //     <button id="post" onClick={()=>{
  //         setAddButton(true)
  //     }}
  //     disabled={addButton === true ? true : false}
  //     > {""}Post </button>
  //     </form>
  // )
};
export default CommentAdder;

