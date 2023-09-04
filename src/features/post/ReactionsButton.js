import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji ={
        thumbsUp: 't',
        wow: 'w',
        heart: 'h',
        rocket: 'r',
        coffee: 'c',
}


const ReactionsButton = ({post}) => {
    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
            key={name}
            type="button"
            className="flex"
            onClick={() => 
            dispatch(reactionAdded({ postId: post.id, reaction: name}))}>
                {emoji} {post.reactions[name]}
            </button>
        )
    })
  return (
<div>
{
    reactionButtons
}
</div>
  )
}

export default ReactionsButton