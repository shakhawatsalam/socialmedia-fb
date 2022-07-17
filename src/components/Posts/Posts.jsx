import React from "react";
import "./Posts.css";
import Post from "../Post/Post";
import { PostsData } from "../../Data/PostData";

function Posts() {
    return <div className='Posts'>
      {PostsData.map((post, id) => {
        return <Post data={post} id={id} />
      })}
  </div>;
}

export default Posts;
