import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SaveTheDateLanding from "../components/SaveTheDateLanding";
import FindUserForm from "./FindUserForm";
import AddressCollection from "./AddressCollection";

const SaveTheDateContainer = () => {
  const [searchParams] = useSearchParams();
  const [formOpened, setFormOpened] = useState(
    searchParams.get("open") || false
  );
  const openForm = () => setFormOpened(true);
  return formOpened ? (
    <FindUserForm
      ChildComponent={AddressCollection}
      submitText={"Let us know how to reach you!"}
    />
  ) : (
    <SaveTheDateLanding openForm={openForm} />
  );
};

export default SaveTheDateContainer;
