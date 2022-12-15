import { useEffect, useState } from "react";

export let yScrollPosition = 0;
export let isScrollDown = true;

export function useScrollDirection() {
  return isScrollDown;
}

export default function useScroll() {
  const [position, setPosition] = useState(0);
  const handleNavigation = (e: any) => {
    const window = e.currentTarget;
    if (yScrollPosition > window.scrollY) {
      isScrollDown = false;
    } else if (yScrollPosition < window.scrollY) {
      isScrollDown = true;
    }

    yScrollPosition = window.scrollY;
    // console.log("yScrollPosition: ", yScrollPosition);
    setPosition(yScrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return { position };
}
