import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import SaveTheDateContainer from "./SaveTheDateContainer";
import KirstenAndNicky from "../components/KirstenAndNicky";

export const AuthenticatedApp = () => (
  <>
    <KirstenAndNicky />
    <Navbar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/save-the-date" element={<SaveTheDateContainer />} />
    </Routes>
  </>
);

export default AuthenticatedApp;
