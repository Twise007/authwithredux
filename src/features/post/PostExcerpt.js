import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import Reactions from "./ReactionsButton";

const PostExcerpt = ({ post }) => {
  return (
    <article
      className="p-2 m-2 capitalize border rounded-lg shadow"
    >
      <h3 className="text-xl font-semibold text-center ">{post.title}</h3>
      <p className="">{post.body.substring(0, 100)}</p>
      <div className="flex items-center justify-between">
        <PostAuthor userId={post.userId} />
        <Reactions post={post} />
        <TimeAgo timestamp={post.date} />
      </div>
    </article>
  );
};

export default PostExcerpt;
