import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Pokedex</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/pokemon">Pokemon</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}