import { useEffect, useState } from "react";
import racoon from "../assets/images/racoon.jpeg";
import racoon2 from "../assets/images/racoon2.jpeg";

const Wip = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => setToggle(!toggle), 500);
    return () => clearInterval(interval);
  }, [toggle]);
  return (
    <div className="work-in-progress">
      <h1>We're cooking this page up!</h1>
      <img
        src={toggle ? racoon2 : racoon}
        alt="Kirsten on Nicky's shoulders as they're both dressed as chefs doing the Racacoonie scene from Everything Everywhere All At Once"
      />
    </div>
  );
};

export default Wip;
