import RsvpForm from "../components/RsvpForm";

const Rsvp = ({ users, firstName, lastName }) => {
  return (
    <div className="rsvpFormContainer text">
      <h1>RSVP</h1>
      <h3>
        Hi {firstName} {lastName}!
      </h3>
      <p>
        Dinner will be served in the classic Texas barbecue joint fashion (that
        is to say, counter service or buffet style).
      </p>
      <p>
        A variety of meats and sides will be available, as well as vegetarian
        and vegan entrees. Please share your dining preferences and allergy info
        below so we can have the pitmaster prepare something you’ll enjoy!
      </p>
      <RsvpForm users={users} />
    </div>
  );
};

export default Rsvp;
