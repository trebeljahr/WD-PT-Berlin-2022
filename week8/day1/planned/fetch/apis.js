// helper function
async function fetchJson(url) {
  const response = await fetch(url);
  const contentType = response.headers.get("content-type");

  if (!contentType || !contentType.includes("application/json")) {
    throw new TypeError("We haven't got JSON!");
  }
  const result = await response.json();
  console.log(result);
  return result;
}

// https://www.boredapi.com/documentation
async function fetchActivityForPreventingBoredom(participants) {
  const base = "https://www.boredapi.com/api/activity";
  const url = participants ? `${base}?participants=${participants}` : base;
  const result = fetchJson(url);
  console.log(result);
  console.log(result.activity);
}

async function fetchCocktails() {
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
  const result = await fetchJson(url);

  const detailedResultPromises = result.drinks.map(async (drink) => {
    const details = await fetchCocktailDetails(drink);
    return { ...drink, ...details };
  });

  const detailedResult = await Promise.all(detailedResultPromises);

  console.log(detailedResult);
  return detailedResult;
}

async function fetchCocktailDetails(cocktail) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail.idDrink}`;
  const result = await fetchJson(url);
  const drinkDetails = result.drinks[0];

  return Object.entries(drinkDetails)
    .filter((keyValuePair) => keyValuePair[1] !== null)
    .reduce((agg, keyValuePair) => {
      return { ...agg, [keyValuePair[0]]: keyValuePair[1] };
    }, {});
}

// random user api - https://randomuser.me/documentation#howto
async function createRandomUser() {}

// url shortener - https://goolnk.com/docs
async function createShortLink() {}

// words api - https://wordsapiv1.p.mashape.com/words/example
async function fetchWordApi() {}

// yoda - translations https://funtranslations.com/api/yoda
// this one is sadly rate limited to only 3
async function fetchYodaSpeech(text) {
  const endpoint = `https://api.funtranslations.com/translate/yoda.json?text=${text}`;
  const response = await fetch(endpoint);
  const result = await response.json();

  console.log(result);
}
