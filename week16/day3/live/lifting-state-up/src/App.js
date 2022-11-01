import "./App.css";
import { EditableTodos } from "./components/TodoList";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <EditableTodos />

      {/* <TodoList
        todos={[
          {
            heading: "First Todo",
            imageUrl:
              "https://images.unsplash.com/photo-1581622558667-3419a8dc5f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            description:
              "Doing the dishes is the worst... but sometimes you have to do it.",
            altText: "a person doing the dishes",
          },
        ]}
      /> */}
    </div>
  );
}

export default App;
