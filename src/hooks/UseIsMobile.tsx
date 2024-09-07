import { useState, useEffect } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the width threshold for mobile
    };

    // Run the check when the component mounts
    checkMobile();

    // Add event listener to handle window resizing
    window.addEventListener("resize", checkMobile);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
