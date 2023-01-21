import waterfall from "../assets/images/waterfall-cropped.png";
const Schedule = () => {
  return (
    <div className="save-the-date-landing event-landing">
      <img
        className="save-the-date"
        src={waterfall}
        alt="Nicky and Kirsten sitting on a Waterfall flashing a Peace Sign"
      />
      <p className="event-date">Ceremony and Reception</p>
      <p className="event-date">Saturday, April 1, 2023</p>
      <div className="event">
        <div className="times">
          <div className="event-line">
            <div className="time">4:30 PM</div>
            <div className="Text">Doors</div>
          </div>
          <div className="event-line">
            <div className="time">5:00 PM</div>
            <div className="Text">Ceremony Starts</div>
          </div>
          <div className="location">
            <p>Hill Country Barbecue Market</p>
            <p>30 W. 26th Street</p>
            <p>New York (Manhattan), NY</p>
          </div>
          <p className="dress-code">Festive Cocktail Attire</p>
        </div>
      </div>
      <p className="event-date">One Day Anniversary Brunch</p>
      <p className="event-date">Sunday, April 2, 2023</p>
      <div className="event">
        <div className="times">
          <div className="event-line">
            <div className="time">11:30 AM</div>
            <div className="Text">Start</div>
          </div>
          <div className="event-line">
            <div className="time">2:30 PM</div>
            <div className="Text">End</div>
          </div>
          <div className="location">
            <p>City Reliquary</p>
            <p>370 Metropolitan Avenue</p>
            <p>Brooklyn, NY</p>
          </div>
          <p className="dress-code">Cozy Casual Attire</p>
        </div>
      </div>
    </div>
  );
};
export default Schedule;
