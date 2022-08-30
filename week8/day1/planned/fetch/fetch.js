// fetch("http://example.com/movies.json")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

async function handleSearch(event) {
  event.preventDefault();
  const input = document.getElementById("search-input");
  const results = await queryWikipedia(input.value);
  const resultContainer = document.getElementById("result-container");

  results.forEach((result) => {
    const url = `https://en.wikipedia.org/?curid=${result.pageid}`;

    resultContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="result-item">
        <h3 class="result-title">
          <a href="${url}" target="_blank" rel="noopener">${result.title}</a>
        </h3>
        <a href="${url}" class="result-link" target="_blank" rel="noopener">${url}</a>
        <span class="result-snippet">${result.snippet}</span><br>
      </div>`
    );
  });
}

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", handleSearch);

async function queryWikipedia(query) {
  const base = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&`;
  const endpoint = `${base}srsearch=${query}`;
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const json = await response.json();

  return json.query.search;
}

queryWikipedia("JavaScript").then(console.log);
