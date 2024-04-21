import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://nc-news-vguq.onrender.com/api/",
});

export const fetchArticles = () => {
  return ncNews.get(`articles`).then((articles) => {
    return articles.data;
  });
};
export const getTopics = () => {
  return ncNews.get(`topics`).then((topic) => {
    return topic.data.topics;
  });
};
export const getArticlesByTopic = (topic) => {
  return ncNews
    .get(`articles`, { params: { topic: topic } })
    .then(({ data }) => {
      return data;
    });
};

export const fetchSingleArticle = (article_id) => {
  return ncNews.get(`articles/${article_id}`).then((article) => {
    return article.data;
  });
};

export const fetchCommentById = (article_id) => {
  return ncNews.get(`articles/${article_id}/comments`).then((comment) => {
    return comment.data;
  });
};

export const patchVoteArticleId = (article_id) => {
  const patchVote = { inc_votes: 1 };

  return ncNews.patch(`articles/${article_id}`, patchVote).then((vote) => {
    return vote.data;
  });
};

export const postComment = (article_id, postBody) => {
  return ncNews
    .post(`articles/${article_id}/comments`, postBody)
    .then((comment) => {
      return comment.data;
    });
};
export const fetchAllUsers = () => {
  return ncNews.get(`users`).then((response) => {
    return response.data;
  });
};
export const deleteComment = (commentId) => {
  return ncNews.delete(`comments/${commentId}`);
};
