const GetUserForm = ({
  setFirstName,
  setLastName,
  getUsers,
  firstName,
  lastName
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        getUsers();
      }}
    >
      <label>
        Your First Name:
        <input
          type="text"
          aria-label="First Name"
          aria-required="true"
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
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <input type="submit" value="Let us know how to reach you!" />
    </form>
  );
};
export default GetUserForm;
