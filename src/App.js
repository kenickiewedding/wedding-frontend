import "./App.css";
import AuthenticatedApp from "./containers/AuthenticatedApp";
import UnauthenticatedApp from "./containers/UnauthenticatedApp";
import { useState } from "react";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <div className="main">
      {authenticated || true ? (
        <AuthenticatedApp />
      ) : (
        <UnauthenticatedApp setAuthenticated={setAuthenticated} />
      )}
    </div>
  );
}

export default App;
