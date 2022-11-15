import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:5005/api";

function Register() {
  const [formState, setFormState] = useState({});
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const data = await axios.post("/register", formState);
      console.log(data);
      setFormState({});
      navigate("/login");
    } catch (err) {
      console.error(err);
      console.log(err.response);

      setFormState({
        ...formState,
        error: err.response.data.errorMessage || err.message,
      });
    }
  };

  return (
    <div>
      {formState.error && <h1 style={{ color: "red" }}>{formState.error}</h1>}
      <h1>Register:</h1>
      <UsernamePasswordForm
        formState={formState}
        setFormState={setFormState}
        login={false}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

const getCsrfToken = async () => {
  const { data } = await axios.get("/csrf-token");
  console.log(data);
  axios.defaults.headers.post["X-CSRF-Token"] = data.csrfToken;
};

function Login() {
  const [formState, setFormState] = useState({});
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = await axios.post("/login", formState);
      console.log(data);
      setFormState({});
      navigate("/profile");
    } catch (err) {
      console.error(err);
      console.log(err.response);
      setFormState({
        ...formState,
        error: err.response.data.errorMessage || err.message,
      });
    }
  };

  return (
    <div>
      {formState.error && <h1 style={{ color: "red" }}>{formState.error}</h1>}
      <h1>Login:</h1>
      <UsernamePasswordForm
        formState={formState}
        setFormState={setFormState}
        login={true}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function UsernamePasswordForm({ formState = {}, setFormState, login }) {
  const { username = "", password = "" } = formState;
  const handleInput = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  return (
    <form>
      <input
        type="text"
        value={username}
        onChange={handleInput}
        name="username"
        autoComplete="username"
      />
      <input
        type="password"
        value={password}
        onChange={handleInput}
        name="password"
        autoComplete={login ? "current-password" : "new-password"}
      />
    </form>
  );
}

function Profile() {
  const [state, setState] = useState({ message: "Nothing yet..." });
  const navigate = useNavigate();
  const fetchMessage = useCallback(async () => {
    try {
      const { data } = await axios.get("/message");
      const {
        data: { user },
      } = await axios.get("/profile");

      console.log(user);
      console.log(data);
      setState({ ...data, username: user.username });
    } catch (err) {
      if (err.response.status === 401) {
        return navigate("/login");
      }
      console.log(err.response.status);
      console.error(err.response.data.errorMessage);
    }
  }, [navigate]);

  const handleRefetching = () => {
    console.log("Refetching value...");
    fetchMessage();
  };

  useEffect(() => {
    // fetchMessage();
    getCsrfToken().then(fetchMessage());
  }, [fetchMessage]);

  const logout = async () => {
    await axios.post("/logout");
    setState({ message: "Nothing again..." });
    navigate("/login");
  };

  return (
    <div>
      <h1>Profile Page</h1>
      {state.message}
      <h2>Hello there, {state.username}</h2>
      <button onClick={handleRefetching}>Fetch again!</button>
      <button onClick={logout}>Logout!</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
