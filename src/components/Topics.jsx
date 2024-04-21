import React, { useEffect, useState } from "react";
import { getTopics } from "../api";
import { Link } from "react-router-dom";
import "../css/App.css";
import Loading from "./Loading";

const TopicsList = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <ul>
      {topics.map((topic, index) => {
        return (
          <div className="cs-topic">
            <li key={index}>
              <div className="cs-h3">
                Topic: {topic.slug.toUpperCase()} <br />
                Description: {topic.description}
                <br />
                <Link className="cs-link" to={`/articles/topics/${topic.slug}`}>
                  See more
                </Link>
              </div>
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default TopicsList;
