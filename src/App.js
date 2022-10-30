import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Navbar from "./containers/Navbar";
import AddressCollection from "./containers/AddressCollection";
import AddressCollectionForms from "./containers/AddressCollectionForms";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="address-collection" element={<AddressCollection />} />
        <Route
          path="address-collection-form"
          element={<AddressCollectionForms />}
        />
      </Routes>
    </>
  );
}

export default App;
