import logo from "./logo.svg";
import "./App.css";
import { Pikachu } from "./components/Pikachu";
import {
  ComponentInception,
  ComponentWithDestructuredProps,
  ComponentWithProps,
} from "./components/ComponentWithProps";

function MyComponent() {
  return <h1>Hello Rico</h1>;
}

function App() {
  return (
    <div className="App">
      <MyComponent />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React you crazy Ironhacker!
        </a>
        <MyComponent />
        <Pikachu />
      </header>
      <MyComponent />
      <ComponentWithProps name={"Rico"} />
      <ComponentWithDestructuredProps name={"Rico"} greeting="Guten Tag" />
      <ComponentWithDestructuredProps
        name={"Joshua"}
        greeting="Howdy"
        color="darkblue"
      />
      <ComponentWithDestructuredProps
        name={"Vinayak"}
        greeting="Namaste"
        color="green"
      />

      <ComponentInception />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2
          style={{
            textDecoration: "line-through",
            "border-radius": "30px",
            background: "darkblue",
            color: "white",
            padding: 50,
          }}
        >
          This is completely styled - GASP - inline!!!
          <br />
          <br />
          And it looks horrible because Rico did it
        </h2>
      </div>
    </div>
  );
}

export default App;
