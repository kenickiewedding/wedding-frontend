const RsvpFormSection = ({
  firstName,
  lastName,
  rsvp,
  diningPreference,
  dietaryNotes,
  updateForm,
  email
}) => {
  const fullNameSlug = `${firstName}-${lastName}-`;
  return (
    <>
      <h3>
        {firstName} {lastName}
      </h3>
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
        </label>
        <label>
          Regretably Declines
          <input
            type="radio"
            name={fullNameSlug + " rsvp"}
            value={false}
            defaultChecked={!rsvp}
          />
        </label>
      </div>
      <div
        className="radios"
        onChange={(e) => updateForm("diningPreference", e.target.value)}
      >
        <label>
          Omnivore
          <input
            type="radio"
            name={fullNameSlug + "dining-preference"}
            value="omnivore"
            defaultChecked={diningPreference === "omnivore"}
          />
        </label>
        <label>
          Vegetarian
          <input
            type="radio"
            name={fullNameSlug + "dining-preference"}
            value="vegetarian"
            defaultChecked={diningPreference === "vegetarian"}
          />
        </label>
        <label>
          Vegan
          <input
            type="radio"
            name={fullNameSlug + "dining-preference"}
            value="vegan"
            defaultChecked={diningPreference === "vegan"}
          />
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
        What's your email?
        <input
          type="text"
          name={fullNameSlug + "email"}
          value={email}
          onChange={(e) => updateForm("email", e.target.value)}
        />
      </label>
    </>
  );
};
export default RsvpFormSection;
