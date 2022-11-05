import { useEffect, useState } from "react";

export const UseEffectExample = () => {
  const [state, setState] = useState(false);
  const [someOtherState, setSomeOtherState] = useState("hello");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // console.log(state);
    setSomeOtherState((old) => old + " world");
  }, [state]);

  // useEffect(() => {
  //   console.log(someOtherState);
  // }, [someOtherState]);

  useEffect(() => {
    console.log("Hello there!");

    const intervalId = setInterval(() => {
      setCounter((old) => old + 1);
    }, 1000);

    // cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <h1>{someOtherState}</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setState((old) => !old)}>Click me!</button>
    </>
  );
};
