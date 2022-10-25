import { useState, useEffect } from "react";

export default function useWidthDetect() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const currentWidth = window.screen.width;
    const minWidth = 800;

    currentWidth >= minWidth ? setIsMobile(false) : setIsMobile(true);
  }, []);

  return { isMobile };
}
