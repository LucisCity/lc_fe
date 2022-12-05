/* eslint-disable */
import s from "./error_500.module.scss";
import { useEffect } from "react";
// @ts-ignore
import Parallax from "parallax-js";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";

export default function Error500() {
  const router = useRouter();
  useEffect(() => {
    const scene = document.getElementById("scene");
    const parallax = new Parallax(scene);
  });

  const handleClick = () => {
    router.push("/");
  }

  return (
    <div className={s.mainBody}>
      <style jsx>
        {`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p,
          ul,
          li,
          button,
          a,
          i,
          input,
          body {
            margin: 0;
            padding: 0;
            list-style: none;
            border: 0;
            -webkit-tap-highlight-color: transparent;
            text-decoration: none;
            color: inherit;

            &:focus {
              outline: 0;
            }
          }
        `}
      </style>
      <section className={s.wrapper}>
        <div className={s.container}>
          <div id="scene" className={s.scene} data-hover-only="false">
            <div className={s.circle} data-depth="1.2" />
            <div className={s.one} data-depth="0.9">
              <div className={s.content}>
                <span className={s.piece} />
                <span className={s.piece} />
                <span className={s.piece} />
              </div>
            </div>
            <div className={s.two} data-depth="0.60">
              <div className={s.content}>
                <span className={s.piece} />
                <span className={s.piece} />
                <span className={s.piece} />
              </div>
            </div>
            <div className={s.three} data-depth="0.40">
              <div className={s.content}>
                <span className={s.piece} />
                <span className={s.piece} />
                <span className={s.piece} />
              </div>
            </div>
            <p className={s.p500} data-depth="0.50">
              500
            </p>
            <p className={s.p500} data-depth="0.10">
              500
            </p>
          </div>
          <div className={s.text}>
            <article>
              <h1 style={{padding: "10px", color: "white"}}> Unexpected Error!</h1>
              <p>
                An error has occurred and we're currently fixing the problem.
                Feel free to report to us if the problem persists.
              </p>
              <Grid container spacing={0}>
                <Grid item xs={2}></Grid>
                <Grid item xs={4}>
                  <button onClick={handleClick}>Go Home</button>
                </Grid>
                <Grid item xs={4}>
                  <button>report</button>
                </Grid>
              </Grid>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
