import { deleteComment } from "../api";
import "../css/App.css";

const DeleteComment = ({ id, setList }) => {
  const handleClick = () => {
    setList((previousList) => {
      return previousList.filter((item) => {
        return item.comment_id !== id;
      });
    });
    deleteComment(id).catch(() => {
      alert("Error: something went wrong!");
    });
  };
  return (
    <button class="cs-button-solid" onClick={handleClick}>
      Delete comment
    </button>
  );
};

export default DeleteComment;
