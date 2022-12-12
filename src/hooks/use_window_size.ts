import { useEffect, useState } from "react";
import { isClient } from "../utils";

/**
 * To avoid hydration mismatch, we need to set the initial size to the server
 */
const initialSize = [0, 0];

function getWindowSize() {
  return isClient ? [window.innerWidth, window.innerHeight] : initialSize;
}

export function useWindowSize() {
  const [size, setSize] = useState(initialSize);
  useEffect(() => {
    setSize(getWindowSize());

    function updateSize() {
      setSize(getWindowSize());
    }

    window?.addEventListener("resize", updateSize);

    return () => window?.removeEventListener("resize", updateSize);
  }, []);
  return { width: size[0], height: size[1] };
}
