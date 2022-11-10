import { useContext } from 'react';
import { ThemeContext } from './../context/theme.context';
import programmer from "../programmer.png"
import hacker from "../hacker.png"

function HomePage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={"HomePage " + theme}>
      <h1>Hi! My Name is {theme === "dark" ? "...":"Rico!" }</h1>
      <img src={theme === "dark" ? hacker : programmer} className="profile" alt="profile" />
      <h2>and I'm a {theme === "dark" ? "Kali Linux user (sometimes)" : "10x developer"}</h2>
    </div>
  )
}

export default HomePage;

