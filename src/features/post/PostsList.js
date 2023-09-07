import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectAllPosts, getPostsError, getPostsStatus, fetchPosts } from "./postsSlice";
import PostExcerpt from "./PostExcerpt";

const PostsList = () => {
  const dispatch = useDispatch();
  
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);
  
  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])

  let content
  if (postStatus === "loading") {
    content = <p>'loading...'</p>;
  } else if (postStatus === 'Succeeded') {
    const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))
    content = orderedPosts.map(post => <PostExcerpt key={post.id} post={post}/>)
  } else if (postStatus === 'failed') {
    content = <p>{error}</p>
  }

  return (
    <section className="w-full text-black bg-white ">
      <h2 className="text-3xl font-bold text-center uppercase">Posts</h2>
      {content}
    </section>
  );
};

export default PostsList;
