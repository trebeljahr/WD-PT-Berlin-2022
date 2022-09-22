// simple closure

function createGreeter(greeting) {
  return (name) => {
    console.log(greeting + " " + name);
  };
}

for (let greeter of [createGreeter("Hello"), createGreeter("Howdy")]) {
  greeter("World");
  greeter("Patrick");
  greeter("Joshua");
}

function rand255() {
  return Math.floor(Math.random() * 255);
}

function createRandomColorizer() {
  const randomColor = `rgb(${rand255()},${rand255()},${rand255()}`;
  return () => {
    document.body.style.backgroundColor = randomColor;
  };
}

function createNewButton(func, text = "Click") {
  const btn = document.createElement("button");
  btn.innerText = text;
  btn.addEventListener("click", func);
  document.body.appendChild(btn);
}

for (let i = 0; i < 10; i++) {
  createNewButton(createRandomColorizer());
}

const gcd = function (a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};
console.log(gcd(2154, 458));

function binarySearch(arr, leftIndex, rightIndex, x) {
  if (rightIndex >= leftIndex) {
    let middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    if (arr[middleIndex] == x) return middleIndex;
    if (arr[middleIndex] > x) {
      return binarySearch(arr, leftIndex, middleIndex - 1, x);
    }

    return binarySearch(arr, middleIndex + 1, rightIndex, x);
  }
  return -1;
}
