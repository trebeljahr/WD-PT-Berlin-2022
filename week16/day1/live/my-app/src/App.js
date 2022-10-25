import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import SimpleSnackbar from "./components/Snackbar";
import { ConfettiComponent } from "./components/Confetti";

// props
function App() {
  const hello = "Hello world";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header text={"Hello World"} />
        <img
          src={
            "https://images.unsplash.com/photo-1666688090267-4858c2075629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          className="headerImage"
          alt="skyscraper"
        />
        <ConfettiComponent />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {hello}
        </a>
        <Header text={"Some other text"}>
          <span>!!!</span>
        </Header>
      </header>
      <SimpleSnackbar />
    </div>
  );
}

export default App;
