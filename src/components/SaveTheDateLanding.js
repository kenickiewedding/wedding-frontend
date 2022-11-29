import croppedHorizontal from "../assets/images/47-cropped-horizontal.png";
const SaveTheDateLanding = ({ openForm }) => (
  <div className="save-the-date-landing">
    <img
      className="save-the-date"
      src={croppedHorizontal}
      alt="Nicky and Kirsten under a willow tree"
    />
    <p id="date">April 1, 2023</p>
    <p>Hill Country Barbecue Market</p>
    <p>30 W 26th St, New York, NY 10010</p>
    <button onClick={openForm}>Share Your Contact Info!</button>
  </div>
);

export default SaveTheDateLanding;
