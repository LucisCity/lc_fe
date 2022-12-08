/* eslint-disable */
import s from "./error_500.module.scss";
import React, { useEffect } from "react";
// @ts-ignore
import Parallax from "parallax-js";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";

type IProps = {
  errorTitle?: string;
  code?: string;
  message?: string;
} & React.ComponentProps<any>;
export default function ErrorScreen(props: IProps) {
  useEffect(() => {
    const scene = document.getElementById("scene");
    const parallax = new Parallax(scene);
  });


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
              {props.errorTitle}
            </p>
            <p className={s.p500} data-depth="0.10">
              {props.errorTitle}
            </p>
          </div>
          <div className={s.text}>
            <article>
              {props.children ?? <Content500 {...props} />}
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

function Content500(props: IProps) {
  return (
    <>
      <h1 style={{padding: "5px", color: "white"}}> Unexpected Error!</h1>
      <p>
        An error has occurred and we're currently fixing the problem.<br/>
        {props.code ? `Error code: ${props.code}` : null}<br/>
        {props.message ? `Message: ${props.message}` : null}<br/>
        Please report to us if the problem persists.
      </p>
      <Grid container mt={-2}>
        <Grid item xs={2}></Grid>
        <Grid item xs={4}>
          <button onClick={() => window.location.href = "/"}>Go Home</button>
        </Grid>
        <Grid item xs={4}>
          <button>Report</button>
        </Grid>
      </Grid>
    </>
  )
}
