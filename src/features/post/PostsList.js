import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostsList = () => {
  const posts = useSelector(selectAllPosts)

  const renderedPosts = posts.map(post => (
    <article className="p-2 m-2 capitalize border border-black rounded-lg" key={post.id}>
        <h3 className="text-2xl ">{post.title}</h3>
        <p className="">{post.content.substring(0,100)}</p>
    </article>
  ))

  return (
    <section className="w-full text-center text-black bg-white">
        <h2 className="text-5xl">Posts</h2>
        {renderedPosts}
    </section>
  )
}

export default PostsList