import "../App.css";
import { useNavigate } from "react-router-dom";
import waterfall from "../assets/images/waterfall-peace.jpg";

function Home() {
  const navigate = useNavigate();
  return (
    <main className="home">
      <img
        src={waterfall}
        alt="Nicky and Kirsten sitting on a Waterfall flashing a Peace Sign"
      />
      <p id="date">April 1, 2023</p>
      <p>Hill Country Barbecue Market</p>
      <p>30 W 26th St, New York, NY 10010</p>
      <p></p>
      <button onClick={() => navigate("/save-the-date")}>
        Share Your Address
      </button>
    </main>
  );
}

export default Home;
