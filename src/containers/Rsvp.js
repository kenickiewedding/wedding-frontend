const Rsvp = ({ users, firstName, lastName }) => {
  return (
    <div className="rsvpFormContainer">
      <h1>RSVP</h1>
      <h3>
        Hi {firstName} {lastName}
      </h3>
    </div>
  );
};

export default Rsvp;
