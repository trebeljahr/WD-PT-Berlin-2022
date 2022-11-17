import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { LoginForm, SignupForm } from "./SignupForm";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <LoginForm /> },
  { path: "/signup", element: <SignupForm /> },
  { path: "/profile", element: <Profile /> },
]);
