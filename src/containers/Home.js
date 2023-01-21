import "../App.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import croppedHorizontal from "../assets/images/47-cropped-horizontal.png";

function Home() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  return (
    <main className="home">
      <img
        src={croppedHorizontal}
        alt="Nicky and Kirsten under a willow tree"
      />
      <p id="date">April 1, 2023</p>
      <p>Hill Country Barbecue Market</p>
      <p>30 W 26th St, New York, NY 10010</p>
      <p></p>
      <button
        onClick={() => {
          searchParams.set("open", "true");
          navigate({
            pathname: "/rsvp",
            search: searchParams.toString()
          });
        }}
      >
        RSVP!
      </button>
    </main>
  );
}

export default Home;
