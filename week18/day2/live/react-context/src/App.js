import "./App.css";
import { useState } from "react";

function Text({ isDarkMode }) {
  return (
    <p style={{ color: isDarkMode ? "white" : "black" }}>Lorem Ipsum...</p>
  );
}

function Header({ isDarkMode }) {
  return <h1 style={{ color: isDarkMode ? "white" : "black" }}>Hello World</h1>;
}

function LoremIpsumBody({ isDarkMode }) {
  return (
    <>
      <Header isDarkMode={isDarkMode} />
      <Text isDarkMode={isDarkMode} />
    </>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => setIsDarkMode((old) => !old);

  return (
    <div style={{ backgroundColor: isDarkMode ? "rgb(50, 30, 100)" : "white" }}>
      <button onClick={toggleDarkMode}>Change Theme!</button>
      <LoremIpsumBody isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
