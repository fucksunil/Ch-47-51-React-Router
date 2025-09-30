import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSnipper from "./LodingSpinner";

const PostList = () => {
  const { postList, loading } = useContext(PostListData);


  return (
    <>
      {loading && <LoadingSnipper/>}
      {!loading && postList.length === 0 && <WelcomeMessage />}

      {!loading && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
