import { formatDate } from "../../utils";
import { LikeButton } from "../LikeButton";

export const SingleComment = ({ comment, toggleLikeOnComment }) => {
  const { id, date, text, liked } = comment;
  return (
    <div key={id}>
      <p>Created {formatDate(date)} s ago</p>
      <p>{text}</p>
      <LikeButton liked={liked} likeFn={() => toggleLikeOnComment(id)} />
    </div>
  );
};
