import { useState } from "react";
import { rsvpUsers } from "../services/requests";
import RsvpFormSection from "./RsvpFormSection";

const RsvpForm = ({ users }) => {
  console.log("users", users);
  const plusOnesAllowed = users.find((user) => user.plusOnesAllowed > 0);
  const extantPlusOne = users.find((user) => user.plusOne.id)?.plusOne;
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
  const initialPlusOneData = extantPlusOne || {
    firstName: "",
    lastName: "",
    email: "",
    rsvp: false,
    diningPreference: "omnivore",
    dietaryNotes: "",
    plusOneOf: users[0].id
  };
  const [plusOne, setPlusOne] = useState(initialPlusOneData);
  console.log("plusOne", plusOne);
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
    rsvpUsers({ users: formData, plusOne });
  };

  return (
    <form onSubmit={handleSubmit} id="rsvpForm">
      {formData.map(userToForm)}
      {plusOnesAllowed && (
        <label>
          Will you be bringing a plus one?
          <input
            type="checkbox"
            checked={plusOneAttending}
            onChange={() => updatePlusOne("rsvp", !plusOne.rsvp)}
          />
        </label>
      )}

      {plusOneAttending && plusOneToForm()}
      <input type="submit" value="Submit!" />
    </form>
  );
};

export default RsvpForm;
