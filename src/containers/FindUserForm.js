import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GetUserForm from "../components/GetUserForm";
import { getFamilyUnit } from "../services/requests";

const FindUserForm = ({ ChildComponent, submitText, onComplete }) => {
  const [searchParams] = useSearchParams();
  const initialFirstName = searchParams.get("firstName") || "";
  const initialLastName = searchParams.get("lastName") || "";
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [users, setUsers] = useState([]);
  users.length > 0 && onComplete && onComplete();

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
      {users.some((user) => user) ? (
        <ChildComponent
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
          submitText={submitText}
        />
      )}
    </>
  );
};

export default FindUserForm;
