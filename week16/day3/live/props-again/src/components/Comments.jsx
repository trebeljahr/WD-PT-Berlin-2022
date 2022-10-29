import { useState } from "react";
import { nanoid } from "nanoid";

const LikeButton = ({ liked, likeFn }) => {
  return (
    <button
      onClick={likeFn}
      className="likeBtn"
      style={{
        color: liked ? "red" : "grey",
      }}
    >
      ♥
    </button>
  );
};

const SingleComment = ({ comment, toggleLikeOnComment }) => {
  const { id, date, text, liked } = comment;
  return (
    <div key={id}>
      <p>Created {formatDate(date)} s ago</p>
      <p>{text}</p>
      <LikeButton liked={liked} likeFn={() => toggleLikeOnComment(id)} />
    </div>
  );
};

const NewCommentBox = ({ addComment }) => {
  const [commentInput, setCommentInput] = useState("");

  const handleChange = (event) => {
    setCommentInput(event.target.value);
  };

  const handleSubmit = () => {
    addComment(commentInput);
    setCommentInput("");
  };

  return (
    <div>
      <input
        onChange={handleChange}
        value={commentInput}
        placeholder="comment here!"
      ></input>
      <button onClick={handleSubmit}>Add Comment</button>
    </div>
  );
};

const Comments = ({ comments, toggleLikeOnComment }) => {
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

function formatDate(date) {
  return Math.floor((Date.now() - date) / 1000);
}
const initializeComments = () =>
  ["This is fine", "Told you so", "First", "Best comment ever"].map(
    (comment) => {
      return { text: comment, id: nanoid(), date: Date.now(), liked: false };
    }
  );

export const FetchComments = () => {
  const [comments, setComments] = useState(initializeComments);

  const addComment = (commentText) => {
    setComments((oldComments) => {
      return [
        ...oldComments,
        { text: commentText, id: nanoid(), date: Date.now(), liked: false },
      ].sort(({ date: date1 }, { date: date2 }) => {
        return formatDate(date1) - formatDate(date2);
      });
    });
  };

  const toggleLikeOnComment = (commentIdToLike) => {
    setComments((oldComments) => {
      return oldComments.map((comment) => {
        if (comment.id === commentIdToLike) {
          return { ...comment, liked: !comment.liked };
        }
        return comment;
      });
    });
  };
  return (
    <>
      <Comments comments={comments} toggleLikeOnComment={toggleLikeOnComment} />
      <NewCommentBox addComment={addComment} />
    </>
  );
};
