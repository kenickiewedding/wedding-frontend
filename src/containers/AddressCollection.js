import { useState } from "react";
import UserForm from "../components/UserForm";

const AddressCollection = ({ users, firstName, lastName }) => {
  const isPrimary = (user) => {
    return (
      user.firstName.toUpperCase() === firstName.toUpperCase() &&
      user.lastName.toUpperCase() === lastName.toUpperCase()
    );
  };
  const totalUsers = users.map((user) => ({
    ...user,
    isPrimary: isPrimary(user)
  }));
  const usersNeedingAddress = totalUsers.filter((user) => user.addressNeeded);
  const showTheForm = usersNeedingAddress.some((user) => user);
  if (
    usersNeedingAddress.length > 0 &&
    !usersNeedingAddress.find((user) => user.isPrimary)
  ) {
    usersNeedingAddress[0].isPrimary = true;
  }
  const primaryUser = usersNeedingAddress.find((user) => user.isPrimary);
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
      wantToEnter: isPrimary
    })
  );
  const [formData, setFormData] = useState(getInitialState);
  const primaryFormData = formData.find((item) => item.isPrimary);
  const updateUserInForm = (index, key, val) => {
    const newForm = [...formData];
    newForm[index] = { ...newForm[index], [key]: val };
    setFormData(newForm);
  };
  const fillWithPrimaryData = (index) => {
    const newForm = [...formData];
    const { email, addressLine1, addressLine2, city, state, zip } = newForm[0];
    newForm[index] = {
      ...newForm[index],
      email,
      addressLine1,
      addressLine2,
      city,
      state,
      zip
    };
    setFormData(newForm);
  };

  if (showTheForm) {
    return (
      <form>
        {formData.map((userData, i) => (
          <UserForm
            key={`${userData.firstName}${userData.lastName}`}
            {...userData}
            fillWithPrimaryData={() => fillWithPrimaryData(i)}
            updateForm={(key, val) => updateUserInForm(i, key, val)}
          />
        ))}
      </form>
    );
  } else {
    return <></>;
  }
};

export default AddressCollection;
