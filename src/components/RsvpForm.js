import { useState } from "react";
import { rsvpUsers } from "../services/requests";
import RsvpFormSection from "./RsvpFormSection";

const RsvpForm = ({ users }) => {
  const plusOnesAllowed = users.find((user) => user.plusOnesAllowed > 0);
  const extantPlusOne = users.find((user) => user.plusOne?.id)?.plusOne;
  const [submitted, setSubmitted] = useState(false);
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
      setSubmitted(true);
    }
  };

  return submitted ? (
    <div className="thanks-but-no-thanks">
      <h2>Thanks for responding!</h2>
      <h3>
        If you have any questions about the wedding or need to update your RSVP,
        please reach out to us directly or at
        kirstenandnickyplanawedding@gmail.com!
      </h3>
    </div>
  ) : (
    <>
      <div className="thanks-but-no-thanks">
        <h3>
          Dinner will be served in the classic Texas barbecue joint fashion
          (that is to say, counter service or buffet style).
        </h3>
        <h3>
          A variety of meats and sides will be available, as well as vegetarian
          and vegan entrees. Please share your dining preferences and allergy
          info below so we can have the pitmaster prepare something you’ll
          enjoy!
        </h3>
      </div>
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
    </>
  );
};

export default RsvpForm;
