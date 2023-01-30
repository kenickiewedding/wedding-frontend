const RsvpFormSection = ({
  firstName,
  lastName,
  rsvp,
  diningPreference,
  dietaryNotes,
  updateForm,
  email,
  plusOneOf,
}) => {
  const fullNameSlug = plusOneOf ? "plus-one-" : `${firstName}-${lastName}-`;
  return (
    <>
      <label className="center-text big">
        {plusOneOf
          ? "Tell us about your plus one!"
          : `${firstName} ${lastName}`}
      </label>
      {plusOneOf && (
        <>
          <label>
            First Name
            <input
              type="text"
              name={fullNameSlug + "first-name"}
              value={firstName}
              onChange={(e) => updateForm("firstName", e.target.value)}
            />
          </label>
          <label>
            Last Name
            <input
              type="text"
              name={fullNameSlug + "last-name"}
              value={lastName}
              onChange={(e) => updateForm("lastName", e.target.value)}
            />
          </label>
        </>
      )}
      {!plusOneOf && (
        <div
          className="radios"
          onChange={(e) => updateForm("rsvp", e.target.value === "true")}
        >
          <label>
            Joyfully Accepts
            <input
              type="radio"
              name={fullNameSlug + " rsvp"}
              value={true}
              defaultChecked={rsvp}
            />
            <img />
          </label>
          <label>
            Regretfully Declines
            <input
              type="radio"
              name={fullNameSlug + " rsvp"}
              value={false}
              defaultChecked={!rsvp}
            />
            <img />
          </label>
        </div>
      )}
      {rsvp && (
        <>
          <label>What are your dining preferences?</label>
          <div
            className="radios"
            onChange={(e) => updateForm("diningPreference", e.target.value)}
          >
            <label>
              <>
                Omnivore
                <input
                  type="radio"
                  name={fullNameSlug + "dining-preference"}
                  value="omnivore"
                  defaultChecked={diningPreference === "omnivore"}
                />
                <img />
              </>
            </label>
            <label>
              <>
                Vegetarian
                <input
                  type="radio"
                  name={fullNameSlug + "dining-preference"}
                  value="vegetarian"
                  defaultChecked={diningPreference === "vegetarian"}
                />
                <img />
              </>
            </label>
            <label>
              <>
                Vegan
                <input
                  type="radio"
                  name={fullNameSlug + "dining-preference"}
                  value="vegan"
                  defaultChecked={diningPreference === "vegan"}
                />
                <img />
              </>
            </label>
          </div>
          <label>
            Any dietary restrictions?
            <input
              type="text"
              name={fullNameSlug + "dietary-restrictions"}
              value={dietaryNotes}
              onChange={(e) => updateForm("dietaryNotes", e.target.value)}
            />
          </label>
          <label>
            Email Address
            <input
              type="email"
              name={fullNameSlug + "email"}
              value={email}
              onChange={(e) => updateForm("email", e.target.value)}
            />
          </label>
        </>
      )}
    </>
  );
};
export default RsvpFormSection;
