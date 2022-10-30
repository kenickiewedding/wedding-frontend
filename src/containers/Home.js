import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";
import waterfall from "../assets/images/waterfall-peace.jpg";

function Home() {
  return (
    <main class="home">
      <img
        src={waterfall}
        alt="Nicky and Kirsten sitting on a Waterfall flashing a Peace Sign"
      />
      <p id="date">April 1, 2023</p>
      <p>Hill Country Barbecue Market</p>
      <p>30 W 26th St, New York, NY 10010</p>
      <p></p>
      <Link path="address-collection">Share Your Address</Link>
    </main>
  );
}

export default Home;
