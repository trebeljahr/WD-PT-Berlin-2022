import { useState } from "react";

// BAD ! instead use useState
// let state = "Not clicked";
export const StateDemo = () => {
  // const [pizza, setPizza] = useState();
  const [state, setState] = useState("Not clicked");
  const [counter, setCounter] = useState(0);
  // document.getElementById("some-btn-id").addEventListener("click", () => {
  //     console.log("Hello")
  // })

  const handleClick = () => {
    console.log("Hello from handleClick");
    console.log(state);
    // BAD -> because React doesn't know when to re-render
    // state = "Clicked!";
    // console.log(state);
    setState("Clicked");
  };

  const increment = () => {
    setCounter((old) => old + 1);
  };

  const decrement = () => {
    setCounter((old) => old - 1);
  };

  return (
    <>
      <button
        onClick={() => {
          console.log("First Button");
        }}
      >
        Click me!
      </button>
      <button onClick={handleClick}>Click me!</button>
      {state}
      <div>
        <h2>Clicked {counter} times!</h2>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
    </>
  );
};
