import { useState } from "react";
import "./App.css";
import { ComplexForm, SearchBar, SimpleForm } from "./components/Forms";

const List = ({ products }) => {
  return (
    <ul>
      {products.map(({ name }) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
};

const products = [
  { name: "Tea" },
  { name: "Honey" },
  { name: "Apples" },
  { name: "Bananas" },
  { name: "Cheese" },
  { name: "Noodles" },
  { name: "Wine" },
  { name: "Rice" },
];

function App() {
  const [searchString, setSearchString] = useState("");
  const onChange = (event) => {
    setSearchString(event.target.value);
  };
  return (
    <div>
      <h1>Hello World</h1>
      <SearchBar {...{ searchString, onChange }} />
      <List
        products={products.filter((product) =>
          product.name.toLowerCase().includes(searchString.trim().toLowerCase())
        )}
      />
      <SimpleForm />
      <ComplexForm />
    </div>
  );
}

export default App;
