import SaveTheDateImage from "../components/SaveTheDateImage";
import {
  createSearchParams,
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useState } from "react";

const AddressCollection = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialLastName = searchParams.get("lastName") || "";
  const [lastName, setLastName] = useState(initialLastName);
  const params = { lastName };
  const goToForm = (e) => {
    e.preventDefault();
    navigate({
      pathname: "address-collection-form",
      search: `?${createSearchParams(params)}`,
    });
  };
  return (
    <>
      <h1>Let us know how to reach you!</h1>
      <SaveTheDateImage />
      <p>Kirsten & Nicky</p>
      <p>Would like to know how to reach you!</p>
      <form onSubmit={goToForm}>
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
    </>
  );
};

export default AddressCollection;
