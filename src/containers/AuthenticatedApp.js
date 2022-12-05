import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import SaveTheDateContainer from "./SaveTheDateContainer";
import KirstenAndNicky from "../components/KirstenAndNicky";
import Divider from "../components/Divider";
import Wip from "../components/Wip";

export const AuthenticatedApp = () => (
  <>
    <header>
      <KirstenAndNicky />
      <Navbar />
      <Divider />
    </header>
    <main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/save-the-date" element={<SaveTheDateContainer />} />
        <Route path="/FAQ" element={<Wip />} />
        <Route path="/Travel" element={<Wip />} />
      </Routes>
    </main>
  </>
);

export default AuthenticatedApp;
