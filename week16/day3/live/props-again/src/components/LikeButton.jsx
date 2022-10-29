export const LikeButton = ({ liked, likeFn }) => {
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
