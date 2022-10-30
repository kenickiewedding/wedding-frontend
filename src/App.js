import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";

function App() {
  return (
    <>
      <h1>Navbar goes here</h1>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
