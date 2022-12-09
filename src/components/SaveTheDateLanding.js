import waterfall from "../assets/images/waterfall-cropped.png";

const SaveTheDateLanding = ({ openForm }) => (
  <div className="save-the-date-landing">
    <img
      className="save-the-date"
      src={waterfall}
      alt="Nicky and Kirsten sitting on a Waterfall flashing a Peace Sign"
    />
    <p id="date">April 1, 2023</p>
    <p>Hill Country Barbecue Market</p>
    <p>30 W 26th St, New York, NY 10010</p>
    <button onClick={openForm}>Share Your Contact Info!</button>
  </div>
);

export default SaveTheDateLanding;
