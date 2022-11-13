import SaveTheDateImage from "../components/SaveTheDateImage";
import {
  createSearchParams,
  Link,
  useNavigate,
  useSearchParams
} from "react-router-dom";
import { useEffect, useState } from "react";
import GetUserForm from "../components/GetUserForm";
import { getFamilyUnit } from "../services/requests";

const AddressCollection = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialFirstName = searchParams.get("firstName") || "";
  const initialLastName = searchParams.get("lastName") || "";
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [users, setUsers] = useState([]);
  const params = { lastName };
  const goToForm = (e) => {
    e.preventDefault();
    navigate({
      pathname: "/address-collection-form",
      search: `?${createSearchParams(params)}`
    });
  };
  const getUsers = () => {
    firstName &&
      lastName &&
      getFamilyUnit(firstName, lastName).then((resp) => {
        if (resp.users) {
          setUsers(resp.users);
        } else if (resp.firstName) {
          setUsers([resp]);
        } else if (resp.error) {
          alert(resp.error);
        }
      });
    console.log("users", users);
  };
  useEffect(getUsers, []);

  return (
    <>
      <h1>Let us know how to reach you!</h1>
      <SaveTheDateImage />
      <p>Kirsten & Nicky</p>
      <p>Would like to know how to reach you!</p>
      <GetUserForm
        firstName={firstName}
        lastName={lastName}
        setFirstName={setFirstName}
        setLastName={setLastName}
        getUsers={getUsers}
      />
    </>
  );
};

export default AddressCollection;
