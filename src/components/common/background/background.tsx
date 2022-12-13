import React from "react";
import s from "./background.module.scss";

// type Props = {
//   position?: "fixed" | "absolute" | "relative"
// }
export const Background = () => {
  return (
    <div className={s.background}>
      <div className={s.d1}></div>
      <div className={s.d2}></div>
      <div className={s.d3}></div>
      <div className={s.d4}></div>
      <div className={s.d5}></div>
    </div>
  )
}
