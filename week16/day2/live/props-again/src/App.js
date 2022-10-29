import "./App.css";
import { Article } from "./components/Article";
import { Layout } from "./components/Layout";
import { StateDemo } from "./components/StateDemo";
// import { Heading } from "./components/Heading";

function App() {
  // return (
  //   <div>
  //     {/* Heading({ hello: "Hello World" }); */}
  //     <Heading hello="Hello World" />
  //     <Article />
  //     <Article text="The text that we want..." />
  //   </div>
  // );

  return (
    <Layout headerText="Hello World">
      <Article />
      <Article text="The text that we want..." />
      <StateDemo />
    </Layout>
  );
}

export default App;
