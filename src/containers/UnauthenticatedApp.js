import { useState } from "react";

const UnauthenticatedApp = ({ setAuthenticated }) => {
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    setAuthenticated(true);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        Enter the Password:
        <input
          type="text"
          value={password}
          aria-label="password"
          aria-required="true"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <input type="submit" aria-label="submit" value="Submit" />
    </form>
  );
};

export default UnauthenticatedApp;
