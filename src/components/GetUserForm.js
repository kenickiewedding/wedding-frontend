const GetUserForm = ({
  setFirstName,
  setLastName,
  getUsers,
  firstName,
  lastName,
  submitText
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (
          ["nicolas", "nic"].includes(firstName.toLowerCase()) &&
          lastName.toLowerCase() === "cage"
        ) {
          window.location.replace(
            "https://www.youtube.com/watch?v=a61Gi69C9VY"
          );
        } else {
          getUsers();
        }
      }}
    >
      <label>
        Your First Name:
        <input
          type="text"
          aria-label="First Name"
          aria-required="true"
          placeholder="Nicolas"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Your Last Name:
        <input
          type="text"
          aria-label="Last Name"
          aria-required="true"
          value={lastName}
          placeholder="Cage"
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <input type="submit" value={submitText} />
    </form>
  );
};
export default GetUserForm;
