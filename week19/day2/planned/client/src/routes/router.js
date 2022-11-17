import { createBrowserRouter } from "react-router-dom";
import { Home } from "../components/Home";
import { Profile } from "../components/Profile";
import { LoginForm, SignupForm } from "../components/SignupForm";
import RequireAuth from "./RequireAuth";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <LoginForm /> },
  { path: "/signup", element: <SignupForm /> },
  {
    path: "/profile",
    element: (
      <RequireAuth>
        <Profile />
      </RequireAuth>
    ),
  },
]);
