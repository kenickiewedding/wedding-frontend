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
  toggleUsePrimaryData,
  usePrimaryData
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
        disabled={usePrimaryData}
        aria-required="false"
        placeholder={!usePrimaryData && "Address line 1 - ie. 42 Elm Street"}
        value={addressLine1}
        onChange={(e) => updateForm("addressLine1", e.target.value)}
      />
      <br />
      <label>Address Line 2</label>
      <input
        type="text"
        aria-label="Address Line 2"
        placeholder={!usePrimaryData && "Address line 2 - ie. #237"}
        disabled={usePrimaryData}
        aria-required="false"
        value={addressLine2}
        onChange={(e) => updateForm("addressLine2", e.target.value)}
      />
      <br />
      <label>City</label>
      <input
        type="text"
        aria-label="City"
        disabled={usePrimaryData}
        aria-required="false"
        value={city}
        placeholder={
          !usePrimaryData && "Towns, hamlets, and villages are okay too."
        }
        onChange={(e) => updateForm("city", e.target.value)}
      />
      <br />
      <label>State</label>
      <input
        type="text"
        aria-label="State"
        disabled={usePrimaryData}
        aria-required="false"
        value={state}
        placeholder={
          !usePrimaryData && `A US state. Not like "liquid" or "of nature".`
        }
        onChange={(e) => updateForm("state", e.target.value)}
      />
      <br />
      <label>Zip Code</label>
      <input
        type="text"
        aria-label="Zip Code"
        disabled={usePrimaryData}
        aria-required="false"
        placeholder={!usePrimaryData && "Five digits is fine."}
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
          : `Enter info for ${fullName}`}
      </div>
      <br />
    </>
  );
  const handleUseMyInformationClick = (e) => {
    e.preventDefault();
    toggleUsePrimaryData();
  };

  const useMyInformation = (
    <>
      <div className="button small" onClick={handleUseMyInformationClick}>
        {usePrimaryData ? "Don't use my address" : "Use my address"}
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
