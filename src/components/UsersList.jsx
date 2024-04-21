import React, { useEffect, useState } from "react";
import { fetchAllUsers } from "../api";
import UserCard from "./UserCard";
import Loading from "./Loading";
import "../css/App.css";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllUsers().then((data) => {
      setUsers(data.users);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <section id="meet-team-1765">
        <div className="cs-container">
          <ul id="meet-team-1765" className="cs-card-group">
            {users.map((user) => {
              return <UserCard key={user.username} user={user} />;
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default UsersList;
