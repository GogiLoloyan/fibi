import { useState, useEffect } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      // You can adjust the width threshold if needed
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Initial check on mount
    checkIfMobile();

    // Add event listener on resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return isMobile;
};

export default useIsMobile;
