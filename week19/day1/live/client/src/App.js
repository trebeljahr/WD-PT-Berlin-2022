import "./App.css";
import { useEffect, useRef, useState } from "react";
import { BASE_URL } from "./consts";

function UploadFile() {
  const [userAvatar, setUserAvatar] = useState("");

  const handleUpload = async () => {
    const formData = new FormData();
    const fileField = inputRef.current;

    formData.append("image", fileField.files[0]);

    console.log(fileField);
    console.log(formData);

    const res = await fetch(BASE_URL + "/file-upload", {
      method: "PUT",
      body: formData,
    });

    const data = await res.json();
    const avatarUploadUrl = BASE_URL + "/" + data.url;
    console.log(data);
    console.log(avatarUploadUrl);

    setUserAvatar(BASE_URL + "/" + data.url);
  };

  const inputRef = useRef();

  return (
    <>
      {userAvatar ? (
        <img src={userAvatar} alt="user's avatar" />
      ) : (
        <>
          <input ref={inputRef} type="file" />
          <button onClick={handleUpload}>Send to Server!</button>
        </>
      )}
    </>
  );
}

function FormComponent() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => setInputValue(e.target.value);

  const sendToServer = async () => {
    console.log(inputValue);
    try {
      const res = await fetch(BASE_URL + "/form-handler", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: inputValue }),
      });
      console.log(res.ok);
    } catch (err) {
      console.error(err);
    }

    console.log("We reach here...");
    setInputValue("");
  };

  return (
    <>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={sendToServer}>Send!</button>
    </>
  );
}

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const resData = await res.json();
        if (res.ok) {
          setData(resData);
        } else {
          throw new Error(resData.error);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [url]);

  return data;
};

function FetchComponent() {
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

function App() {
  return (
    <>
      <FetchComponent />
      <FormComponent />
      <UploadFile />
    </>
  );
}

export default App;
