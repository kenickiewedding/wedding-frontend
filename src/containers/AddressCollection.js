import { useState } from "react";
import UserForm from "../components/UserForm";
import { createUsers } from "../services/requests";

const AddressCollection = ({ users, firstName, lastName }) => {
  const isPrimary = (user) => {
    return (
      user.firstName.toUpperCase() === firstName.toUpperCase() &&
      user.lastName.toUpperCase() === lastName.toUpperCase()
    );
  };
  const totalUsers = users.map((user) => ({
    ...user,
    isPrimary: isPrimary(user),
  }));
  const usersNeedingAddress = totalUsers.filter((user) => user.addressNeeded);
  const showTheForm = usersNeedingAddress.some((user) => user);
  if (
    usersNeedingAddress.length > 0 &&
    !usersNeedingAddress.find((user) => user.isPrimary)
  ) {
    usersNeedingAddress[0].isPrimary = true;
  }
  const primaryUser =
    usersNeedingAddress.find((user) => user.isPrimary) ||
    totalUsers.find((user) => user.isPrimary);
  const nonPrimaryUsers = usersNeedingAddress
    .filter((user) => !user.isPrimary)
    .sort((a, b) => a.firstName.localeCompare(b.firstName));
  const getInitialState = [primaryUser, ...nonPrimaryUsers].map(
    ({ firstName, lastName, isPrimary }) => ({
      firstName,
      lastName,
      email: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zip: "",
      isPrimary,
      wantToEnter: isPrimary,
      usePrimaryData: false,
    })
  );
  const [formData, setFormData] = useState(getInitialState);
  const primaryFormData = formData.find((item) => item.isPrimary);

  const updateUserInForm = (index, key, val) => {
    const newForm = [...formData];
    newForm[index] = { ...newForm[index], [key]: val };
    setFormData(newForm);
  };
  const toggleUsePrimaryData = (index) => {
    // const { addressLine1, addressLine2, city, state, zip } = newForm[0];
    updateUserInForm(index, "usePrimaryData", !formData[index].usePrimaryData);
  };
  const userToForm = (userData, i) => {
    const {
      firstName,
      lastName,
      email,
      usePrimaryData,
      wantToEnter,
      isPrimary,
    } = userData;
    const formData = userData.usePrimaryData
      ? {
          ...primaryFormData,
          firstName,
          lastName,
          email,
          usePrimaryData,
          wantToEnter,
          isPrimary,
        }
      : userData;
    return (
      <UserForm
        key={`${userData.firstName}${userData.lastName}`}
        {...formData}
        toggleUsePrimaryData={() => toggleUsePrimaryData(i)}
        updateForm={(key, val) => updateUserInForm(i, key, val)}
      />
    );
  };

  const moreThanOneUser = usersNeedingAddress.length > 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    const usersToSubmit = formData
      .filter((user) => user.wantToEnter)
      .map((user) => {
        if (user.usePrimaryData) {
          const { addressLine1, addressLine2, city, state, zip } =
            primaryFormData;
          return { ...user, addressLine1, addressLine2, city, state, zip };
        } else {
          return user;
        }
      });

    createUsers(usersToSubmit);
  };

  // const userNamesToList = () => {
  //   const userNames = users.map((user) => `${user.firstName} ${user.lastName}`);
  //   if (users.length > 2) {
  //     return (
  //       userNames.slice(0, userNames.length - 1).join(", ") +
  //       `, and ${userNames[userNames.length - 1]}`
  //     );
  //   } else if (users.length == 2) {
  //     return userNames.join(" and ");
  //   } else {
  //     return userNames[0];
  //   }
  // };

  if (showTheForm) {
    return (
      <form onSubmit={handleSubmit}>
        {userToForm(formData[0], 0)}
        {moreThanOneUser && (
          <p>Would you like to enter information for any of these people?</p>
        )}
        {formData
          .slice(1, formData.length)
          .map((user, i) => userToForm(user, i + 1))}
        <input type="submit" value="Submit!" />
      </form>
    );
  } else {
    return (
      <div class="thanks-but-no-thanks">
        <h2>
          Thanks, {primaryUser.firstName}!<br />
        </h2>
        <h3>
          We already have everything we need to get in touch with you. Remember
          to save the date!
        </h3>
      </div>
    );
  }
};

export default AddressCollection;
