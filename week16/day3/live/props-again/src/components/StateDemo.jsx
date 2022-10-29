import { useState } from "react";

function useCounter(initialNumber = 0) {
  const [counter, setCounter] = useState(initialNumber);

  const increment = () => {
    setCounter((old) => old + 1);
  };

  const decrement = () => {
    setCounter((old) => old - 1);
  };

  return { counter, increment, decrement };
}

export const StateDemo = () => {
  const { counter, increment, decrement } = useCounter(0);

  const [user, setUser] = useState(undefined);

  const login = () => {
    setUser("Rico");
  };

  const logout = () => {
    setUser(undefined);
  };

  return (
    <>
      {/* if we have counter negative render counter in red */}
      <h1 style={{ color: counter >= 0 ? "green" : "red" }}>
        {counter >= 0 ? "Wins" : "Losses"}: {counter}
      </h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>

      {!user ? (
        <button onClick={login}>Login</button>
      ) : (
        <>
          <h1>{user}</h1>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </>
  );
};
