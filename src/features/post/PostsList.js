import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import Reactions from "./ReactionsButton";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article
      className="p-2 m-2 capitalize border rounded-lg shadow"
      key={post.id}
    >
      <h3 className="text-xl font-semibold text-center ">{post.title}</h3>
      <p className="">{post.content.substring(0, 100)}</p>
      <div className="flex items-center justify-between">
        <PostAuthor userId={post.userId} />
        <Reactions post={post} />
        <TimeAgo timestamp={post.date} />
      </div>
    </article>
  ));

  return (
    <section className="w-full text-black bg-white ">
      <h2 className="text-3xl font-bold text-center uppercase">Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
