const UserForm = ({
  firstName,
  lastName,
  email,
  addressLine1,
  addressLine2,
  city,
  state,
  zip,
  wantToEnter,
  isPrimary,
  updateForm,
  fillWithPrimaryData
}) => {
  const fullName = `${firstName} ${lastName}`;
  const form = (
    <>
      <label>Email</label>
      <input
        type="email"
        aria-label="email"
        aria-required="true"
        value={email}
        placeholder="Enter your email"
        onChange={(e) => updateForm("email", e.target.value)}
      />
      <br />
      <label>Address Line 1</label>
      <input
        type="text"
        aria-label="Address Line 1"
        aria-required="false"
        value={addressLine1}
        onChange={(e) => updateForm("addressLine1", e.target.value)}
      />
      <br />
      <label>Address Line 2</label>
      <input
        type="text"
        aria-label="Address Line 2"
        aria-required="false"
        value={addressLine2}
        onChange={(e) => updateForm("addressLine2", e.target.value)}
      />
      <br />
      <label>City</label>
      <input
        type="text"
        aria-label="City"
        aria-required="false"
        value={city}
        onChange={(e) => updateForm("city", e.target.value)}
      />
      <br />
      <label>State</label>
      <input
        type="text"
        aria-label="State"
        aria-required="false"
        value={state}
        onChange={(e) => updateForm("state", e.target.value)}
      />
      <br />
      <label>Zip Code</label>
      <input
        type="text"
        aria-label="Zip Code"
        aria-required="false"
        value={zip}
        onChange={(e) => updateForm("zip", e.target.value)}
      />
    </>
  );

  const showFormButton = (
    <>
      <div
        className="button small"
        onClick={(e) => {
          e.preventDefault();
          updateForm("wantToEnter", !wantToEnter);
        }}
      >
        {wantToEnter
          ? `I don't want to enter data for ${fullName}`
          : `Enter Data for ${fullName}`}
      </div>
      <br />
    </>
  );
  const handleUseMyInformationClick = (e) => {
    e.preventDefault();
    fillWithPrimaryData();
  };

  const useMyInformation = (
    <>
      <div className="button small" onClick={handleUseMyInformationClick}>
        Use my information to fill this form
      </div>
      <br />
    </>
  );

  return (
    <div className="form-user">
      <h1>{fullName}</h1>
      {!isPrimary && showFormButton}
      {wantToEnter && !isPrimary && useMyInformation}
      {wantToEnter && form}
    </div>
  );
};

export default UserForm;
