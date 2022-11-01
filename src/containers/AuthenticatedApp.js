import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import AddressCollection from "./AddressCollection";
import AddressCollectionForms from "./AddressCollectionForms";
import KirstenAndNicky from "../components/KirstenAndNicky";

export const AuthenticatedApp = () => (
  <>
    <KirstenAndNicky />
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

export default AuthenticatedApp;
