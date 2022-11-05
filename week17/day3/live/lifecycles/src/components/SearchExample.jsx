import { useEffect, useRef } from "react";
import { useState } from "react";
import { baseUrl, SingleCharacter } from "./FetchExample";

export const SearchExample = () => {
  const [searchInput, setSearchInput] = useState("");
  const [listOfCharacters, setListOfCharacters] = useState([]);
  const controllerRef = useRef(null);

  function handleChange(event) {
    console.log(event);
    setSearchInput(event.target.value);
  }

  const listenForEnterKey = (event) => {
    async function fetchCharacters() {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }

      controllerRef.current = new AbortController();

      try {
        const url = baseUrl + "?" + new URLSearchParams({ name: searchInput });
        const res = await fetch(url, {
          signal: controllerRef?.current?.signal,
        });
        const data = await res.json();
        setListOfCharacters(data.results);

        controllerRef.current = null;
      } catch (err) {
        console.error("something went wrong", err);
      }
    }

    if (event.key === "Enter") {
      fetchCharacters();
    }
  };

  //   useEffect(() => {
  //     const listenForEnterKey = (event) => {
  //       console.log(event.key);
  //       async function fetchCharacters() {
  //         if (controllerRef.current) {
  //           controllerRef.current.abort();
  //         }

  //         controllerRef.current = new AbortController();

  //         try {
  //           const url =
  //             baseUrl + "?" + new URLSearchParams({ name: searchInput });
  //           const res = await fetch(url, {
  //             signal: controllerRef?.current?.signal,
  //           });
  //           const data = await res.json();
  //           setListOfCharacters(data.results);

  //           controllerRef.current = null;
  //         } catch (err) {
  //           console.error("something went wrong", err);
  //         }
  //       }

  //       if (event.key === "Enter") {
  //         fetchCharacters();
  //       }
  //     };
  //     document.addEventListener("keypress", listenForEnterKey);
  //     return () => document.removeEventListener("keypress", listenForEnterKey);
  //   }, [searchInput]);

  //   useEffect(() => {
  //     console.log(searchInput);

  //     async function fetchCharacters() {
  //       if (controllerRef.current) {
  //         controllerRef.current.abort();
  //       }

  //       controllerRef.current = new AbortController();

  //       try {
  //         const url = baseUrl + "?" + new URLSearchParams({ name: searchInput });
  //         const res = await fetch(url, {
  //           signal: controllerRef?.current?.signal,
  //         });
  //         const data = await res.json();
  //         setListOfCharacters(data.results);

  //         controllerRef.current = null;
  //       } catch (err) {
  //         console.error("something went wrong", err);
  //       }
  //     }

  //     fetchCharacters();
  //   }, [searchInput]);

  useEffect(() => {
    console.log(listOfCharacters);
  }, [listOfCharacters]);
  return (
    <div>
      <input
        onChange={handleChange}
        value={searchInput}
        onKeyPress={listenForEnterKey}
      />
      {listOfCharacters &&
        listOfCharacters.map((character) => (
          <SingleCharacter character={character} key={character.id} />
        ))}
    </div>
  );
};
