import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SaveTheDateLanding from "../components/SaveTheDateLanding";
import SaveTheDateForm from "./SaveTheDateForm";

const SaveTheDateContainer = () => {
  const [searchParams] = useSearchParams();
  const [formOpened, setFormOpened] = useState(
    searchParams.get("open") || false
  );
  const openForm = () => setFormOpened(true);
  return formOpened ? (
    <SaveTheDateForm />
  ) : (
    <SaveTheDateLanding openForm={openForm} />
  );
};

export default SaveTheDateContainer;
