import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import SaveTheDate from "./SaveTheDate";
import KirstenAndNicky from "../components/KirstenAndNicky";

export const AuthenticatedApp = () => (
  <>
    <KirstenAndNicky />
    <Navbar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/save-the-date" element={<SaveTheDate />} />
    </Routes>
  </>
);

export default AuthenticatedApp;
