import { useState } from "react";
import { login } from "../services/requests";

const UnauthenticatedApp = ({ setAuthenticated }) => {
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    login(password).then((res) =>
      res.error ? alert(res.error) : setAuthenticated(true)
    );
  };
  return (
    <form onSubmit={onSubmit} id="password">
      <label>
        Enter the Password:
        <input
          type="text"
          placeholder={"Give it your best shot, hackerman"}
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
