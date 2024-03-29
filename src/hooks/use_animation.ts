import anime from "animejs";

export const useAnimation = () => {
  const fadeIn = (targets: any, duration = 500) => {
    anime({
      targets,
      opacity: 1,
      easing: "easeInQuad",
      duration,
    });
  };

  const fadeOut = (targets: any, duration = 500) => {
    anime({
      targets,
      opacity: 0,
      easing: "easeInQuad",
      duration,
    });
  };

  return { fadeIn, fadeOut };
};
