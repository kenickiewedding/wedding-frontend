import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { login } from "../services/requests";

const UnauthenticatedApp = ({ setAuthenticated }) => {
  const [searchParams] = useSearchParams();
  const initialPassword = searchParams.get("password") || "";
  const [password, setPassword] = useState(initialPassword);
  useEffect(() => {
    initialPassword && onSubmit({ preventDefault: () => {} });
  }, []);

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
