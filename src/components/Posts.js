import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul className="list-group mb-4">
      {posts.map(post => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
