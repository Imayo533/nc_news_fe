import "../css/App.css";
import Header from "./Header";
import Home from "./Home";
import SingleArticle from "./SingleArticle";
import ArticlesList from "./ArticlesList";
import UsersList from "./UsersList";
import SingleTopic from "./SingleTopic";
import Topics from "./Topics";
import { Routes, Route } from "react-router-dom";
import CommentsById from "./CommentsById";
import { useState } from "react";
import UserContext from "./context/User";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("");

  return (
    <UserContext.Provider
      value={{ loggedInUser: loggedInUser, setLoggedInUser: setLoggedInUser }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/articles/topics/:topic" element={<SingleTopic />} />
        <Route
          path="/articles/:article_id/comments"
          element={<CommentsById />}
        />
        <Route path="/users" element={<UsersList />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
