import { useEffect } from "react";

export let yScrollPosition = 0;
export let isScrollDown = true;

export function useScrollDirection() {
  return isScrollDown;
}

export default function useScroll() {
  const handleNavigation = (e: any) => {
    const window = e.currentTarget;
    if (yScrollPosition > window.scrollY) {
      isScrollDown = false;
    } else if (yScrollPosition < window.scrollY) {
      isScrollDown = true;
    }
    console.log("isScrollDown11: ", isScrollDown);
    yScrollPosition = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
}
