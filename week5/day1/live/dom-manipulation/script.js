// DOM -> document object model
console.log(document);

const todoList = document.getElementById("todo-list");
console.log(todoList);

const [todoContainer] = document.getElementsByClassName("todo-container");
const ourNewTodoList = document.createElement("ol");
todoContainer.appendChild(ourNewTodoList);

const todoItems = [
  "Go fishing",
  "Eat Apples",
  "Drink a beer",
  "Sleep in a tent",
];

for (let todoText of todoItems) {
  createNewTodoItem(todoText);
}

const username = "Rico"; // prompt("Enter your name:");
// const heading = document.createElement("h1");
// heading.innerText = `Hello there, ${username}`;

const heading = document.getElementById("my-heading");
heading.innerText = `Hello there, ${username}`;

const image = document.getElementById("broken-image");
console.log(image);
// image.src =
//   "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
image.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
);

const newImage = document.createElement("img");
const imageContainer = document.getElementById("img-container");
imageContainer.appendChild(newImage);

setInterval(() => {
  newImage.src = `https://source.unsplash.com/random/${Math.floor(
    Math.random() * 3000
  )}x300/?mountain`;
}, 2000);

const counterElement = document.createElement("h2");
const clockElement = document.createElement("h2");

let counter = 0;
setInterval(() => {
  counter++;
  const date = new Date();
  clockElement.innerText = date.toISOString();
  counterElement.innerText = counter;
}, 1000);

const [body] = document.getElementsByTagName("body");
// const body = document.querySelector("body");
// console.log(body);
// body.appendChild(heading);

body.appendChild(counterElement);
body.appendChild(clockElement);

const elementsToDelete = document.getElementsByClassName("wrong");
const elementsToDeleteAsAnArray = [...elementsToDelete];
console.log(elementsToDelete);

// for (let i = 0; i < elementsToDelete.length; i++) {
//    elementsToDelete[i].remove();
// }

// all of these don't work for elementsToDelete, however they would work for the array version
// for (let element of elementsToDelete) {}
// elementsToDelete.forEach(() => {});
// elementsToDelete.map(() => {});
// elementsToDelete.reduce(() => {}); // filter etc.

// body.remove();
elementsToDeleteAsAnArray.forEach((element) => {
  //   element.style.visibility = "hidden";
  element.style.display = "none";
});

// if we click a button -> then add todo;
const button = document.getElementById("add-todo");

button.addEventListener("click", () => {
  console.log("Hello there :)");
  const inputElement = document.getElementById("todo-item-input");
  createNewTodoItem(inputElement.value);
});

const [firstItem] = ourNewTodoList.children;

console.log(firstItem.classList);

firstItem.classList.add("checked");
firstItem.classList.toggle("checked");

const liElements = [...document.getElementById("todo-list").children]; // [...document.getElementsByTagName("li")];
liElements.forEach(addToggleCheckedListener);

function addToggleCheckedListener(item) {
  item.addEventListener("click", () => {
    console.log("I got clicked!");
    item.classList.toggle("checked");
  });
}

function createNewTodoItem(text) {
  const newItem = document.createElement("li");

  // XSS attack -> cross-site-scripting attacks, just be careful
  newItem.innerHTML = `<h1>${text}</h1>`;

  //   newItem.innerText = text;
  addToggleCheckedListener(newItem);
  ourNewTodoList.appendChild(newItem);
}
