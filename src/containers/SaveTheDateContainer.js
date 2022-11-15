import { useState } from "react";
import SaveTheDateLanding from "../components/SaveTheDateLanding";
import SaveTheDateForm from "./SaveTheDateForm";

const SaveTheDateContainer = () => {
  const [formOpened, setFormOpened] = useState(false);
  const openForm = () => setFormOpened(true);
  return formOpened ? (
    <SaveTheDateForm />
  ) : (
    <SaveTheDateLanding openForm={openForm} />
  );
};

export default SaveTheDateContainer;
