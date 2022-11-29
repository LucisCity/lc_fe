import { useEffect, useState } from "react";
import { isClient } from "../utils";

function getWindowSize() {
  return isClient ? [window.innerWidth, window.innerHeight] : [0, 0];
}

export function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
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
