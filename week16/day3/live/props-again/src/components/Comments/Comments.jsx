import { SingleComment } from "./SingleComment";

export const Comments = ({ comments, toggleLikeOnComment }) => {
  return (
    <div className="comment-box">
      <h2>Comments:</h2>
      {comments.map((comment) => (
        <SingleComment
          key={comment.id}
          comment={comment}
          toggleLikeOnComment={toggleLikeOnComment}
        />
      ))}
    </div>
  );
};
