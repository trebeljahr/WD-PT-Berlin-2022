import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./consts";
import { UserContext } from "./UserContext";

const emptySignupState = {
  username: "",
  password: "",
};

function LoginOrSignupForm({ isSignup = false }) {
  const [signupState, setSignupState] = useState(emptySignupState);
  const navigate = useNavigate();
  const { loginUser } = useContext(UserContext);

  const handleChange = (e) =>
    setSignupState((old) => ({ ...old, [e.target.name]: e.target.value }));

  const sendToServer = async () => {
    try {
      const formBody = signupState;
      console.log(formBody);

      const url = BASE_URL + (isSignup ? "/signup" : "/login");
      console.log(isSignup, url);

      const res = await fetch(url, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formBody),
      });
      const data = await res.json();
      console.log(data);

      loginUser(data.user);
      console.log("Signup success");

      //   navigate(isSignup ? "/login": "/profile");
      navigate("/profile");
    } catch (err) {
      console.error(err);
    }

    console.log("We reach here...");
    setSignupState(emptySignupState);
  };

  return (
    <>
      <h2>{isSignup ? "Signup Form" : "Login Form"}</h2>
      <input
        name="username"
        value={signupState.username}
        onChange={handleChange}
        placeholder="Enter your username here"
      />
      <input
        type="password"
        name="password"
        value={signupState.password}
        placeholder="Enter your password here"
        onChange={handleChange}
      />

      <button onClick={sendToServer}>{isSignup ? "Signup" : "Login"}</button>
    </>
  );
}

export const LoginForm = () => <LoginOrSignupForm isSignup={false} />;
export const SignupForm = () => <LoginOrSignupForm isSignup={true} />;
