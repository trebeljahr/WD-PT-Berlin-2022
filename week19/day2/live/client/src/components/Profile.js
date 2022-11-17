import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../consts";
import { UserContext } from "../contexts/UserContext";

export function Profile() {
  const { user, logoutUser } = useContext(UserContext);
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await fetch(BASE_URL + "/logout", {
        method: "POST",
        credentials: "include",
      });
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
