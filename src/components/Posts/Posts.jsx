import React from "react";
import "./Posts.css";
import Post from "../Post/Post";
// import { PostsData } from "../../Data/PostData";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTimeLinePosts } from "../../actions/postAction";
import { useParams } from "react-router-dom";

function Posts() {
  const dispatch = useDispatch();
  const params = useParams()
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  console.log(posts);
  useEffect(() => {
    dispatch(getTimeLinePosts(user._id));
  }, []);

  if (!posts) return "no posts";
  if (useParams.id) posts = posts.filter((post) => post.userId === params.id);
  return (
    <div className='Posts'>
      {loading
        ? "Fetching Posts..."
        : posts.map((post, id) => {
            return <Post data={post} id={id} />;
          })}
    </div>
  );
}

export default Posts;
