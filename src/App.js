import "./App.css";
import AuthenticatedApp from "./containers/AuthenticatedApp";
import UnauthenticatedApp from "./containers/UnauthenticatedApp";
import { useEffect, useState } from "react";
import { ping } from "./services/requests";
import Footer from "./components/Footer";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(ping, []);
  return (
    <>
      <div className="main">
        {authenticated ? (
          <AuthenticatedApp />
        ) : (
          <UnauthenticatedApp setAuthenticated={setAuthenticated} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
