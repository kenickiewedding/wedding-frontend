import { useState } from "react";
import RsvpFormSection from "./RsvpFormSection";

const RsvpForm = ({ users }) => {
  const getInitialState = users.map(
    ({ firstName, lastName, rsvp, diningPreference, dietaryNotes }) => ({
      firstName,
      lastName,
      rsvp: rsvp || true,
      diningPreference: diningPreference || "omnivore",
      dietaryNotes: dietaryNotes || ""
    })
  );
  const [formData, setFormData] = useState(getInitialState);
  console.log(formData);
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

  return <form id="rsvpForm">{formData.map(userToForm)}</form>;
};

export default RsvpForm;
