import { useState } from "react";
import { nanoid } from "nanoid";
import { formatDate } from "../../utils";
import { Comments } from "./Comments";
import { NewCommentBox } from "./NewCommentBox";

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
