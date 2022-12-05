import snail2 from "../assets/images/snail2.png";
import snail3 from "../assets/images/snail3.png";
import ufo from "../assets/images/ufo.png";
import pandaLeft from "../assets/images/panda-left.png";
import pandaRight from "../assets/images/panda-right.png";

const Footer = () => (
  <footer>
    <img src={ufo} alt="ufo" className="footer-image ufo" />
    <img src={snail2} alt="snail" className="footer-image left" />
    <img src={snail3} alt="snail" className="footer-image right" />
    <img src={pandaLeft} alt="panda" className="footer-image left center" />
    <img src={pandaRight} alt="panda" className="footer-image right center" />
  </footer>
);

export default Footer;
