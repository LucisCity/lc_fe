import React from "react";
import s from './index.module.css'

type Props = { dark: boolean, onClick: any }
export default function DayNightSwitch(props: Props) {
  return (
    <div onClick={props.onClick} className={`${s.toggle} ${props.dark ? s.night : ""}`}>
      <div className={s.notch}>
        <div className={s.crater} />
        <div className={s.crater} />
      </div>
      <div>
        <div className={`${s.shape} ${s.sm}`} />
        <div className={`${s.shape} ${s.sm}`} />
        <div className={`${s.shape} ${s.md}`} />
        <div className={`${s.shape} ${s.lg}`} />
      </div>
    </div>
  );
}
