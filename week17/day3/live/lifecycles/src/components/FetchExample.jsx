import { useEffect, useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

export const baseUrl = "https://rickandmortyapi.com/api/character/";

const exampleResult = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  location: {
    name: "Earth",
    url: "https://rickandmortyapi.com/api/location/20",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
    //...
  ],
  url: "https://rickandmortyapi.com/api/character/1",
  created: "2017-11-04T18:48:46.250Z",
};

export const SingleCharacter = ({ character }) => {
  return (
    <div>
      <h2>{character.name} </h2>
      <img src={character.image} alt={character.name} />
    </div>
  );
};

export const RandomCharacter = () => {
  const [randomCharacter, setRandomCharacter] = useState(undefined);

  useEffect(() => {
    async function fetchSomething() {
      console.log("Fetching new character...");
      const url = baseUrl + Math.floor(Math.random() * 100);
      console.log(url);
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();
      console.log(data);
      setRandomCharacter(data);
    }
    fetchSomething();
  }, []);

  return (
    <div>
      {randomCharacter && <SingleCharacter character={randomCharacter} />}
    </div>
  );
};

function sleep(amount) {
  return new Promise((resolve) => {
    setTimeout(resolve, amount);
  });
}

export const FetchExample = () => {
  const [randomCharacter, setRandomCharacter] = useState(undefined);
  const [requested, setRequested] = useState(false);

  useEffect(() => {
    async function fetchSomething() {
      await sleep(1000);
      console.log("Fetching new character...");
      const url = baseUrl + Math.floor(Math.random() * 100);
      console.log(url);
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();
      console.log(data);
      setRandomCharacter(data);
      setRequested(false);
    }
    requested && fetchSomething();
  }, [requested]);

  return (
    <div>
      {requested ? (
        <ClimbingBoxLoader
          color={"#36d7b7"}
          loading={true}
          size={10}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <button onClick={() => setRequested(true)}>Reload!</button>
      )}
      {!requested && randomCharacter && (
        <SingleCharacter character={randomCharacter} />
      )}
    </div>
  );
};
