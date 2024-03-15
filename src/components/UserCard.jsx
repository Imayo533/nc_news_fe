import { useContext } from "react"
import UserContext from "./context/User"

const UserCard = ({user}) => {
    console.log(useContext(UserContext),"from")
    const { setLoggedInUser } = useContext(UserContext)

    return (
        <div>
            <img style={{width: "80px", height: "auto"}} src={user.avatar_url} alt="" />
            <p>{user.username}</p>
            <button onClick={()=>{setLoggedInUser(user)}}>Log me in!</button>
        </div>
    )
}
export default UserCard