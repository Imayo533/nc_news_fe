import { deleteComment } from "../api"

const DeleteComment = ({id, setList})=>{
    const handleClick = () => {
        setList((previousList)=>{
            return previousList.filter((item)=>{
                return item.comment_id !== id
            })
        })
        deleteComment(id).catch(()=>{
            alert("Error: something went wrong!")
        })
    }
    return(
        <button onClick={handleClick}>Delete comment</button>
    )
}

export default DeleteComment