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

// node, ptr => node

// n1 => n2 => n3 => n1
// n1 = { next: n2 }
// n2 = { next: n3 }

// n1.next.next.next

// [0, 1, 2, 3]
// 011010101 010010101 0101001011 0101010101
