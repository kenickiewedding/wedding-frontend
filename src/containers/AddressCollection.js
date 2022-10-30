import SaveTheDateImage from "../components/SaveTheDateImage";
import { createSearchParams, Link, useNavigate } from "react-router-dom";

const AddressCollection = () => {
  const navigate = useNavigate();
  const params = { test: "hello" };
  const goToForm = () =>
    navigate({
      pathname: "address-collection-form",
      search: `?${createSearchParams(params)}`,
    });
  return (
    <>
      <h1>Let us know how to reach you!</h1>
      <SaveTheDateImage />
      <p>Kirsten & Nicky</p>
      <p>Would like to know how to reach you!</p>
      <button onClick={goToForm}>Enter Your Information!</button>
    </>
  );
};

export default AddressCollection;
