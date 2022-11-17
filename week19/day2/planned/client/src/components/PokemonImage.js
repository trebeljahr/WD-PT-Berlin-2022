import { useEffect, useState } from "react";
import { BASE_URL } from "../consts";
import { useFetch } from "../hooks/useFetch";

export function FetchComponent() {
  const [pokemonImage, setPokemonImage] = useState(null);
  const [pokeName, setPokeName] = useState("");

  const data = useFetch(BASE_URL);

  const pokeApiData = useFetch(BASE_URL + `/pokemon/${pokeName}`);

  const handleInput = (e) => setPokeName(e.target.value);

  useEffect(() => {
    console.log(pokeApiData);
    pokeApiData && setPokemonImage(pokeApiData.data[0].sprite);
  }, [pokeApiData]);

  console.log({ pokemonImage });
  return (
    <>
      <h1>{data ? data.message : "Loading..."}</h1>
      <input onChange={handleInput} value={pokeName} />
      {pokemonImage ? (
        <img src={pokemonImage} alt="squirtle" width="300" height="300" />
      ) : null}
    </>
  );
}
