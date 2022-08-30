const url = "https://randomuser.me/api/";

async function fetchAndLogUser() {
  const response = await fetch(url);

  console.log(response);

  const result = await response.json();
  console.log(result);

  const {
    results: [
      {
        name: { first, last },
      },
    ],
  } = result;
  const userNameElement = document.getElementById("user-name");
  userNameElement.innerText = "Hello " + first + " " + last;
}

fetchAndLogUser();

console.log("hello");
