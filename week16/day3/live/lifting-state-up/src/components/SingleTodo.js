export const SingleTodo = ({ todo }) => {
  const { heading, description, imageUrl, altText } = todo;
  return (
    <li>
      <img width={300} height={300} src={imageUrl} alt={altText} />
      <h2>{heading}</h2>
      <p>{description}</p>
    </li>
  );
};
