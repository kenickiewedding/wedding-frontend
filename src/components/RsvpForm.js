import { useState } from "react";
import { rsvpUsers } from "../services/requests";
import RsvpFormSection from "./RsvpFormSection";

const RsvpForm = ({ users }) => {
  const plusOnesAllowed = users.find((user) => user.plusOnesAllowed > 0);
  const extantPlusOne = users.find((user) => user.plusOne?.id)?.plusOne;
  const getInitialState = users.map(
    ({
      firstName,
      lastName,
      rsvp,
      diningPreference,
      dietaryNotes,
      email,
      id
    }) => ({
      firstName,
      lastName,
      rsvp: rsvp || true,
      diningPreference: diningPreference || "omnivore",
      dietaryNotes: dietaryNotes || "",
      email,
      id
    })
  );
  const [formData, setFormData] = useState(getInitialState);
  const initialPlusOneData = extantPlusOne?.id
    ? { ...extantPlusOne, plusOneOf: users[0].id }
    : {
        firstName: "",
        lastName: "",
        email: "",
        rsvp: false,
        diningPreference: "omnivore",
        dietaryNotes: "",
        plusOneOf: users[0].id
      };
  const [plusOne, setPlusOne] = useState(initialPlusOneData);
  const updatePlusOne = (key, val) => {
    setPlusOne({ ...plusOne, [key]: val });
  };
  const plusOneAttending = plusOne.rsvp;
  const updateUserInForm = (index, key, val) => {
    const newForm = [...formData];
    newForm[index] = { ...newForm[index], [key]: val };
    setFormData(newForm);
  };
  const userToForm = (userData, i) => {
    return (
      <RsvpFormSection
        key={`${userData.firstName}${userData.lastName}`}
        {...userData}
        updateForm={(key, val) => updateUserInForm(i, key, val)}
      />
    );
  };
  const plusOneToForm = () => (
    <RsvpFormSection
      key="plusone-form"
      {...plusOne}
      updateForm={updatePlusOne}
    />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.find((user) => !user.email) ||
      (plusOne.firstName && !plusOne.email)
    ) {
      alert(
        "Please ensure you've entered an email for each guest before submitting so we can keep you all in the loop!"
      );
    } else {
      rsvpUsers({ users: formData, plusOne });
    }
  };

  return (
    <form onSubmit={handleSubmit} id="rsvpForm">
      {formData.map(userToForm)}
      {plusOnesAllowed && (
        <div className="radios">
          <label>
            <input
              type="checkbox"
              checked={plusOneAttending}
              onChange={() => updatePlusOne("rsvp", !plusOne.rsvp)}
            />
            <img />
            Will you be bringing a plus one?
          </label>
        </div>
      )}

      {plusOneAttending && plusOneToForm()}
      <input type="submit" value="Submit!" />
    </form>
  );
};

export default RsvpForm;
