import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import Reactions from "./ReactionsButton";


const PostsList = () => {
  const posts = useSelector(selectAllPosts)
  
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map(post => (
    <article className="p-2 m-2 capitalize border border-black rounded-lg" key={post.id}>
        <h3 className="text-2xl ">{post.title}</h3>
        <p className="">{post.content.substring(0,100)}</p>
        <p className="flex items-center justify-between text-2xl">
          <PostAuthor userId={post.userId}/>
          <i className="text-xl text-red-3 00">
          <TimeAgo timestamp={post.date}/>
            
          </i>
        </p>
        <Reactions post={post}/>
    </article>
  ))

  return (
    <section className="w-full text-black bg-white ">
        <h2 className="text-5xl text-center">Posts</h2>
        {renderedPosts}
    </section>
  )
}

export default PostsList