import { useState } from "react";
import { nanoid } from "nanoid";

const Comments = ({ comments, addComment, toggleLikeOnComment }) => {
  const [commentInput, setCommentInput] = useState("");

  const handleChange = (event) => {
    setCommentInput(event.target.value);
  };

  const handleSubmit = () => {
    addComment(commentInput);
    setCommentInput("");
  };

  return (
    <div className="comment-box">
      <h2>Comments:</h2>
      {[...comments]
        .sort(({ date: date1 }, { date: date2 }) => {
          const msSinceCreation1 = Math.floor((Date.now() - date1) / 1000);
          const msSinceCreation2 = Math.floor((Date.now() - date2) / 1000);
          return msSinceCreation2 - msSinceCreation1;
        })
        .map(({ text, id, date, liked }) => {
          return (
            <div key={id}>
              <p>Created {Math.floor((Date.now() - date) / 1000)} s ago</p>
              <p>{text}</p>
              <button
                onClick={() => toggleLikeOnComment(id)}
                className="likeBtn"
                style={{
                  color: liked ? "red" : "grey",
                }}
              >
                ♥
              </button>
            </div>
          );
        })}
      {/* controlled input */}
      <input
        onChange={handleChange}
        value={commentInput}
        placeholder="comment here!"
      ></input>
      <button onClick={handleSubmit}>Add Comment</button>
    </div>
  );
};

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
      ];
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
    <Comments
      comments={comments}
      addComment={addComment}
      toggleLikeOnComment={toggleLikeOnComment}
    />
  );
};
