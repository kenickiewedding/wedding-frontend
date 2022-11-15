import SaveTheDateImage from "../components/SaveTheDateImage";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GetUserForm from "../components/GetUserForm";
import { getFamilyUnit } from "../services/requests";
import AddressCollection from "./AddressCollection";

const SaveTheDateForm = () => {
  const [searchParams] = useSearchParams();
  const initialFirstName = searchParams.get("firstName") || "";
  const initialLastName = searchParams.get("lastName") || "";
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [users, setUsers] = useState([]);
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
  };
  useEffect(getUsers, []);

  return (
    <>
      <h1>Hi!</h1>
      <div className="explainer">
        <p>
          As we get ready for this wedding, we'd love to know how to reach you!
        </p>
        <p>
          Fill out the below form and we'll keep you in the loop for the
          wedding.
        </p>
      </div>
      {users.some((user) => user) ? (
        <AddressCollection
          users={users}
          firstName={firstName}
          lastName={lastName}
        />
      ) : (
        <GetUserForm
          firstName={firstName}
          lastName={lastName}
          setFirstName={setFirstName}
          setLastName={setLastName}
          getUsers={getUsers}
        />
      )}
    </>
  );
};

export default SaveTheDateForm;
