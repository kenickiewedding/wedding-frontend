import { useState, useEffect } from "react";
import cropped from "../assets/images/47-cropped.png";
import croppedHorizontal from "../assets/images/47-cropped-horizontal.png";

const SaveTheDateImage = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <>
      <img
        className="save-the-date"
        src={croppedHorizontal}
        alt="Nicky and Kirsten under a willow tree"
      />
      <p>April 1, 2023</p>
    </>
  );
};

export default SaveTheDateImage;
