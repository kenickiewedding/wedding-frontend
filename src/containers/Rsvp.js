import RsvpForm from "../components/RsvpForm";

const Rsvp = ({ users, firstName, lastName }) => {
  return (
    <div className="rsvpFormContainer text">
      <h1>RSVP</h1>
      <RsvpForm users={users} />
    </div>
  );
};

export default Rsvp;
