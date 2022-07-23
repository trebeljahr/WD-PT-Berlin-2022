helloWorld();

// functions get hoisted to the top
function helloWorld() {
  console.log("Hello World");
}

function helloWorldYetAgain() {}

// this is going to break -> produce an error
// myArrowFunction();
const myArrowFunction = () => console.log("Hello from Arrow");

// this is going to break -> produces an error as well
// myFunctionKeywordFunction();
const myFunctionKeywordFunction = function () {
  console.log("From function put into a const");
};
