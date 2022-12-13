import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import SaveTheDateContainer from "./SaveTheDateContainer";
import KirstenAndNicky from "../components/KirstenAndNicky";
import { Questions } from "../components/Questions";
import Divider from "../components/Divider";
import Wip from "../components/Wip";
import { travelQuestions } from "../assets/text/travel";
import { FAQuestions } from "../assets/text/FAQ";

export const AuthenticatedApp = () => (
  <>
    <header>
      <KirstenAndNicky />
      <Navbar />
    </header>
    <main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/save-the-date" element={<SaveTheDateContainer />} />
        <Route path="/FAQ" element={<Questions questions={FAQuestions} />} />
        <Route
          path="/Travel"
          element={<Questions questions={travelQuestions} />}
        />
        <Route path="/Pictures" element={<Wip />} />
        <Route path="/Registry" element={<Wip />} />
      </Routes>
    </main>
  </>
);

export default AuthenticatedApp;
