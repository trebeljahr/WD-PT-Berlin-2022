export const ComponentWithProps = (props) => {
  return <div>Your name is {props.name}</div>;
};

export const ComponentWithDestructuredProps = ({
  greeting,
  name,
  color = "darkblue",
}) => {
  return (
    <h1 style={{ color }}>
      {greeting} {name}
    </h1>
  );
};

export const ComponentInception = () => {
  return (
    <div className="componentInception">
      <h1>Hello</h1>
      <InnerComponent />
    </div>
  );
};

function InnerComponent() {
  return (
    <>
      <h2>Hello Hello</h2>
      <InnerMostComponent />
    </>
  );
}

function InnerMostComponent() {
  return <h3>Hello Hello Hello!</h3>;
}
