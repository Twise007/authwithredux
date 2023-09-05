import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userId);
  return (
    <div>
      <div className="font-semibold text-red-500"><span className="font-normal text-black">By</span> {author ? author.name : "Unknown Author"}</div>
    </div>
  );
};

export default PostAuthor;
