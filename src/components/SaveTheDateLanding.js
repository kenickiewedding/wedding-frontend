import croppedHorizontal from "../assets/images/47-cropped-horizontal.png";
const SaveTheDateLanding = ({ openForm }) => (
  <>
    <img
      className="save-the-date"
      src={croppedHorizontal}
      alt="Nicky and Kirsten under a willow tree"
    />
    <p>Kirsten & Nicky</p>
    <p>April 1, 2023</p>
    <p>New York, NY</p>
    <p>~</p>
    <p>Please confirm your contact information:</p>
    <button onClick={openForm}>Click here!</button>
  </>
);

export default SaveTheDateLanding;
