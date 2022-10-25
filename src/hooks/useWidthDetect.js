import { useState, useEffect } from "react";

export default function useWidthDetect() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const currentWidth = window.screen.width;
    const minWidth = 800;

    currentWidth >= minWidth ? setIsDesktop(true) : setIsDesktop(false);
  }, []);

  return { isDesktop };
}
