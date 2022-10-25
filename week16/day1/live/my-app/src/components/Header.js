export function Header({ text, children }) {
  // const { text, children } = props;
  console.log(children);
  return (
    <h1 style={{ color: "grey", backgroundColor: "red" }}>
      {text}
      {children}
    </h1>
  );
}
