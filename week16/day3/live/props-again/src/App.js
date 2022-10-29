import "./App.css";
import { FetchComments } from "./components/Comments";
import { StateDemo } from "./components/StateDemo";

function App() {
  return (
    <>
      <StateDemo />
      <FetchComments />
    </>
  );
}

export default App;
