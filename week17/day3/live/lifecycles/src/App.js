import { useEffect, useState } from "react";
import "./App.css";
// import { FetchExample } from "./components/FetchExample";
// import { SearchExample } from "./components/SearchExample";

function App() {
  const [state, setState] = useState({
    boolean: true,
    counter: 0,
    obj: { one: "1", two: "2" },
  });

  const handleClick = () => {
    setState((old) => ({ ...old, boolean: !old.boolean }));
  };

  const increment = () => {
    setState((old) => ({ ...old, counter: old.counter + 1 }));
  };

  const addNum1 = () => {
    setState((old) => ({
      ...old,
      obj: { ...old.obj, one: old.obj.one + "1" },
    }));
  };

  const addNum2 = () => {
    setState((old) => ({
      ...old,
      obj: { ...old.obj, two: old.obj.two + "2" },
    }));
    // setState((old) => {
    //   const copy = JSON.parse(JSON.stringify(old));
    //   copy.obj.two += "2";
    //   return copy;
    // });
  };

  useEffect(() => {
    console.log(state.boolean);
  }, [state.boolean]);

  useEffect(() => {
    console.log(state.counter);
  }, [state.counter]);

  useEffect(() => {
    console.log(state.obj.one);
  }, [state.obj.one]);

  useEffect(() => {
    console.log(state.obj.two);
  }, [state.obj.two]);

  return (
    <div>
      {/* <FetchExample /> */}
      <button onClick={handleClick}>Click</button>
      <button onClick={increment}>Counter</button>
      <button onClick={addNum1}>Add to 1</button>
      <button onClick={addNum2}>Add to 2</button>

      {/* <SearchExample /> */}
    </div>
  );
}

export default App;
