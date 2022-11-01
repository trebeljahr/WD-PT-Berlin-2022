import React from "react";
import { useState } from "react";
import { SingleTodo } from "../SingleTodo";

const defaultTodos = [
  {
    heading: "First Todo",
    imageUrl:
      "https://images.unsplash.com/photo-1581622558667-3419a8dc5f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    description:
      "Doing the dishes is the worst... but sometimes you have to do it.",
    altText: "a person doing the dishes",
  },
].map((todo) => ({ ...todo, id: uuid() }));

function uuid() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (a) =>
    (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
  );
}
export const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <SingleTodo key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

// export const AlternativeWayForTodoForms = () => {
//   const [formState, setFormState] = useState({
//     heading: "",
//     altText: "",
//     imageUrl: "",
//     description: "",
//   });

//   const handleChange = (event) => {
//     console.log(event.target.name);

//     setFormState((old) => {
//       const tmp = { ...old, [event.target.name]: event.target.value };
//       console.log(tmp);
//       return tmp;
//     });
//   };

//   return (
//     <div>
//       <h2>Add new Todo:</h2>
//       <form>
//         {Object.keys(formState).map((inputKey) => {
//           return (
//             <input
//               name={inputKey}
//               value={formState[inputKey]}
//               onChange={handleChange}
//             />
//           );
//         })}
//       </form>
//     </div>
//   );
// };

const defaultState = {
  heading: "",
  altText: "",
  imageUrl: "",
  description: "",
};
export const AddNewTodoForm = ({ addTodo }) => {
  const [formState, setFormState] = useState(defaultState);

  const handleChange = (event) => {
    setFormState((old) => {
      return { ...old, [event.target.name]: event.target.value };
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      heading: formState.heading || "",
      description: formState.description || "",
      altText: formState.altText || "",
      imageUrl: formState.imageUrl || "",
      id: uuid(),
    };
    addTodo(newTodo);
    setFormState(defaultState);
  };

  return (
    <div>
      <h2>Add new Todo:</h2>
      <form>
        <input
          name="heading"
          value={formState.heading}
          onChange={handleChange}
          placeholder={"Todo Title"}
        />
        <input
          name="description"
          value={formState.description}
          onChange={handleChange}
          placeholder={"Todo Description"}
        />
        <input
          name="imageUrl"
          value={formState.imageUrl}
          onChange={handleChange}
          placeholder={"Todo Image"}
        />
        <input
          name="altText"
          value={formState.altText}
          onChange={handleChange}
          placeholder={"Todo Image Alt Text"}
        />
        <button onClick={handleFormSubmit}>Create Todo!</button>
      </form>
    </div>
  );
};

export const EditableTodos = () => {
  const [todos, setTodos] = useState(defaultTodos);

  const addTodo = (newTodo) => {
    setTodos((old) => {
      return [...old, newTodo];
    });
  };

  return (
    <>
      <TodoList todos={todos} />
      <AddNewTodoForm addTodo={addTodo} />
    </>
  );
};
