import { useState } from "react";
import FindUserForm from "../containers/FindUserForm";
import Rsvp from "../containers/Rsvp";

const RsvpLandingPage = () => {
  const [hasUsers, setHasUsers] = useState(false);
  return (
    <div className="rsvp text">
      {!hasUsers && (
        <>
          <h1>Hooray! You're here!</h1>
          <p>
            We're delighted to invite you to our wedding, which will take place
            on April 1, 2023 in New York City. Check out our schedule of events
            to learn more about the wedding weekend we have planned!
          </p>
          <p>
            Please respond by March 1, 2023 so we can provide an accurate count
            to our venue. Please enter your name (as written on your invitation
            envelope) to access your RSVP:
          </p>
        </>
      )}
      <FindUserForm
        ChildComponent={Rsvp}
        submitText={"Hooray!"}
        onComplete={() => setHasUsers(true)}
      />
    </div>
  );
};

export default RsvpLandingPage;
