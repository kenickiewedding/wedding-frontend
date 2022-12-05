import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { login } from "../services/requests";
import snail2 from "../assets/images/snail2.png";
import snail3 from "../assets/images/snail3.png";
import ufo from "../assets/images/ufo.png";
import pandaLeft from "../assets/images/panda-left.png";
import pandaRight from "../assets/images/panda-right.png";

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
    <>
      <form onSubmit={onSubmit} id="password">
        <label>
          Please enter the password:
          <input
            type="text"
            placeholder={"Pop quiz, hotshot"}
            value={password}
            aria-label="password"
            aria-required="true"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" aria-label="submit" value="Submit" />
      </form>
      <img src={ufo} alt="ufo" className="footer-image ufo" />
      <img src={snail2} alt="snail" className="footer-image left" />
      <img src={snail3} alt="snail" className="footer-image right" />
      <img src={pandaLeft} alt="panda" className="footer-image left center" />
      <img src={pandaRight} alt="panda" className="footer-image right center" />
    </>
  );
};

export default UnauthenticatedApp;
