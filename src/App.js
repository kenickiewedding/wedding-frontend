import "./App.css";
import AuthenticatedApp from "./containers/AuthenticatedApp";
import UnauthenticatedApp from "./containers/UnauthenticatedApp";
import { useState } from "react";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return authenticated || true ? (
    <AuthenticatedApp />
  ) : (
    <UnauthenticatedApp setAuthenticated={setAuthenticated} />
  );
}

export default App;
