import "./App.css";
import { useContext, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

function Text() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <p style={{ color: isDarkMode ? "white" : "black" }}>Lorem Ipsum...</p>
  );
}

function Header() {
  const { isDarkMode } = useContext(ThemeContext);
  const { user } = useContext(UserContext);
  return (
    <h1 style={{ color: isDarkMode ? "white" : "black" }}>
      {/* Hello World */}
      Hello {user?.username || "World"}
    </h1>
  );
}

function LoremIpsumBody() {
  return (
    <>
      <Header />
      <Text />
    </>
  );
}

// loginFn()
function Login() {
  const [usernameInput, setUsernameInput] = useState("");
  const { login } = useContext(UserContext);

  const handleChange = (e) => {
    setUsernameInput(e.target.value);
  };

  const submit = () => {
    setUsernameInput("");
    login(usernameInput);
  };

  // should come from context
  return (
    <div>
      <input value={usernameInput} onChange={handleChange}></input>
      <button onClick={submit}>Login</button>
    </div>
  );
}

// logoutFn()
function Logout() {
  const { logout, user } = useContext(UserContext);
  return <>{!user ? null : <button onClick={logout}>Logout</button>} </>;
}

function App() {
  const themeContextObject = useContext(ThemeContext);
  // const { isDarkMode, toggleDarkMode } = themeContextObject;

  return (
    <div
      style={{
        backgroundColor: themeContextObject.isDarkMode
          ? "rgb(50, 30, 100)"
          : "white",
      }}
    >
      <Login />
      <Logout />
      <button onClick={themeContextObject.toggleDarkMode}>Change Theme!</button>
      <LoremIpsumBody isDarkMode={themeContextObject.isDarkMode} />
    </div>
  );
}

export default App;
