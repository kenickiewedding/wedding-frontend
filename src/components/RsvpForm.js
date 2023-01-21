import { useState } from "react";
import { rsvpUsers } from "../services/requests";
import RsvpFormSection from "./RsvpFormSection";

const RsvpForm = ({ users }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    rsvpUsers(formData);
  };

  return (
    <form onSubmit={handleSubmit} id="rsvpForm">
      {formData.map(userToForm)}
      <input type="submit" value="Submit!" />
    </form>
  );
};

export default RsvpForm;
