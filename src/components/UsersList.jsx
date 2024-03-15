import React, { useEffect, useState } from "react";
import {fetchAllUsers } from "../api";
import UserCard from "./UserCard";


const UsersList = () => {
    const [users, setUsers] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchAllUsers().then((data) => {
            setUsers(data.users);
            setIsLoading(false)
        });
    }, []);

    if(isLoading){
        return <p>Loading...</p>
    }
    return(
        <>
        <ul id="users">
            {users.map((user)=>{
            
                return (
                    <UserCard  key={user.username} user={user}/>
                )
            })}
        </ul>
        </>
    )
}

export default UsersList
// style={width: "80px", height: "auto"}