function doSomethingFirst() {
  return "Hello World";
}

function callMeLater(callback) {
  const result = doSomethingFirst();
  callback(result);
}

function logResult(result) {
  console.log("result:", result);
}

callMeLater(logResult);
