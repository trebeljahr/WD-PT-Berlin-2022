import { useState } from "react";

export const NewCommentBox = ({ addComment }) => {
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
