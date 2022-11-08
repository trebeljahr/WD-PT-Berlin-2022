import {
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
  useParams,
  useSearchParams,
} from "react-router-dom";

import "./App.css";

function Navbar() {
  const determineStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
    };
  };
  return (
    <nav>
      <h2>This is a navbar</h2>
      <NavLink style={determineStyle} to={"/"}>
        Home
      </NavLink>
      <NavLink style={determineStyle} to={"/hello"}>
        Hello Page
      </NavLink>
      <NavLink style={determineStyle} to={"/about"}>
        About
      </NavLink>
      <NavLink style={determineStyle} to={"/contact"}>
        Contact
      </NavLink>
      <NavLink style={determineStyle} to={"/character"}>
        Character
      </NavLink>
    </nav>
  );
}

function Footer() {
  return <footer>Made by Ironhack</footer>;
}

function PageLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <article>
          <Outlet />
        </article>
      </main>
      <Footer />
    </div>
  );
}

function CharacterLayout() {
  return (
    <div>
      <button>Next Character Please!</button>
      <Outlet />
    </div>
  );
}

function CharacterPage() {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(params);

  console.log(searchParams);
  for (const [key, value] of searchParams) {
    console.log(key, value);
  }

  console.log(typeof params.id);

  const next = parseFloat(params.id) + 1;
  const prev = parseFloat(params.id) - 1;

  return (
    <>
      <h1>Character Page for {params.id}</h1>
      {prev > 0 && <Link to={"/character/" + prev}>Previous character</Link>}
      <Link to={"/character/" + next}>Next character</Link>
    </>
  );
}

function CharacterOverview() {
  return (
    <>
      <h1>Hello from the Character Page</h1>
      <Link to={"/character/1"}>To character 1</Link>
      <Link to={"/character/2"}>To character 2</Link>
      <Link to={"/character/3"}>To character 3</Link>
      <Link to={"/character/4"}>To character 4</Link>
    </>
  );
}

function Custom404Page() {
  return <h1>404 - Sorry this page doesn't exist!</h1>;
}

function SomeDifferentPageLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route index element={<h1>Home Page Different Display</h1>} />

      <Route element={<PageLayout />}>
        <Route path="hello" element={<h1>Hello React Router</h1>} />
        <Route path="character" element={<CharacterLayout />}>
          {/* path={"/"} */}
          <Route index element={<CharacterOverview />} />
          <Route path={":id"} element={<CharacterPage />} />
          {/* multiple params are possible, just like in express! :id/:name/:smth */}
        </Route>
        <Route path="*" element={<Custom404Page />} />
      </Route>
    </Routes>
  );
}

export default App;
