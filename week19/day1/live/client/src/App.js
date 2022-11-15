import "./App.css";
import { useContext, useEffect, useRef, useState } from "react";
import { BASE_URL } from "./consts";
import { LoginForm, LoginOrSignupForm, SignupForm } from "./SignupForm";
import { Route, Routes, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

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

function Home() {
  return <h1>Homepage</h1>;
}

function Profile() {
  const { user, logoutUser } = useContext(UserContext);
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await fetch(BASE_URL + "/logout", {
        method: "POST",
        credentials: "include",
      });

      // if (!res.ok) {
      //   const data = await res.json();
      //   throw new Error(data.error);
      // }
      logoutUser();

      navigate("/");
    } catch (error) {
      console.warn(error.message);
    }
  };

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <>
      <h1>Hello there {user.username} </h1>
      <button onClick={logout}>Logout</button>
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* <FetchComponent /> */}

      {/* <UploadFile /> */}
    </>
  );
}

export default App;
