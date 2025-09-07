import React from "react";
import styles from "./page.module.css";
import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/lib/data";

export const metadata = {
  title: "Blog",
};

// FETCH DATA WITH AN API
// const getData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//   if (!response.ok) {
//     throw new error("Something went wrong!");
//   } else {
//     return response.json();
//   }
// };

const Blog = async () => {
  // const posts = await getData();

  // FETCH DATA WITHOUT AN API
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        ))
      ) : (
        <p className={styles.noPosts}>No posts found.</p>
      )}
    </div>
  );
};

export default Blog;
