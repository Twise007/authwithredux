import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😲",
  heart: "♥️",
  rocket: "🚀",
  coffee: "☕️",
};

const ReactionsButton = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="flex items-center justify-center text-red-600"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return (
    <div className="flex items-center gap-2 p-2 text-lg">{reactionButtons}</div>
  );
};

export default ReactionsButton;
