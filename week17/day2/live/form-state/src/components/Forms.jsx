import { useEffect, useState } from "react";

export const SearchBar = ({ onChange, searchString }) => {
  return <input value={searchString} onChange={onChange} />;
};

export const SimpleForm = () => {
  const [state, setState] = useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <form>
      <input value={state} onChange={handleChange} />
    </form>
  );
};

const defaultState = {
  heading: "",
  url: "",
  altText: "",
  description: "",
  amount: 0,
  checkbox: false,
};

export const ComplexForm = () => {
  const [state, setState] = useState(defaultState);

  const handleChange = (event) => {
    // console.log(event.target.value);
    // console.log(typeof event.target.value);
    // console.log(typeof event.target.checked);

    setState((old) => {
      let newValue = event.target.value;
      if (typeof old[event.target.name] === "number") {
        newValue = parseFloat(event.target.value);
      }

      if (typeof old[event.target.name] === "boolean") {
        newValue = event.target.checked;
      }

      return { ...old, [event.target.name]: newValue };
    });
  };

  useEffect(() => {
    console.log("Hello");
    console.log(state);
    console.log(typeof state.amount);
    console.log(typeof state.checkbox);
  }, [state]);

  return (
    <form>
      <input name="heading" value={state.heading} onChange={handleChange} />
      <input name="url" value={state.url} onChange={handleChange} />
      <input name="altText" value={state.altText} onChange={handleChange} />
      <input
        name="description"
        value={state.description}
        onChange={handleChange}
      />
      <input
        type="number"
        name="amount"
        value={state.amount}
        onChange={handleChange}
      />
      <input
        type="checkbox"
        name="checkbox"
        value={state.checkbox}
        onChange={handleChange}
      />

      <h2>number in state + 1 = {state.amount + 1}</h2>
    </form>
  );
};
