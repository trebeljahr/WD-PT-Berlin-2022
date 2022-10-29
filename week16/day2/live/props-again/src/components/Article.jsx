const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus dolor, enim veniam temporibus voluptatibus repellendus atque dicta non molestias ipsum tempore asperiores. Cumque voluptatem laudantium sequi laborum, totam eaque!";

export const Article = ({ text = lorem }) => {
  return (
    <article>
      <p>{text}</p>
    </article>
  );
};
