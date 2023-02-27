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
        <div className="location">
          <p>Hill Country Barbecue Market</p>
          <p>30 W. 26th Street</p>
          <p>New York (Manhattan), NY</p>
          <p className="dress-code">Festive Cocktail Attire</p>
          <p>Doors Open - 4:30 PM</p>
          <p>Ceremony Begins - 5:00 PM</p>
          <p>Goodbyes - 12:00 AM</p>
        </div>
        <div className="times">
          {/* <div className="event-line">
            <div className="Text">Doors</div>
            <div className="time">4:30 PM</div>
          </div>
          <div className="event-line">
            <div className="Text">Ceremony Starts</div>
            <div className="time">5:00 PM</div>
          </div> */}
          <p>
            Our wedding and reception will take place at Hill Country Barbecue
            Market. If you're not staying nearby, we recommend you take public
            transit. The venue is a quick walk from the 28th Street 1 train, the
            28th Street N/Q/R/W, or the 28th Street 4/5/6.
          </p>
        </div>
      </div>
      <p className="event-date">One Day Anniversary Brunch</p>
      <p className="event-date">Sunday, April 2, 2023</p>
      <div className="event">
        <div className="times">
          {/* <div className="event-line">
            <div className="Text">Start</div>
            <div className="time">11:30 AM</div>
          </div>
          <div className="event-line">
            <div className="Text">End</div>
            <div className="time">2:30 PM</div>
          </div> */}
          <div className="location">
            <p>City Reliquary</p>
            <p>370 Metropolitan Avenue</p>
            <p>Brooklyn, NY</p>
            <p className="dress-code">Cozy Casual Attire</p>
            <p>10:00 AM - 2:00 PM</p>
          </div>
          <p>
            We'll be greeting family and friends on Sunday morning at the City
            Reliquary, a beloved museum of local history and ephemera in
            Williamsburg, Brooklyn. We'll have the museum to ourselves until 12
            pm, and will continue to have private access to the museum's backard
            until 2. Since we'll mostly be outdoors, be sure to dress for the
            weather! We'll have light bites, drinks, and coffee to share as well
            as Hot Tips for our favorite things to check out in Williamsburg and
            Greenpoint.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Schedule;
