import { styled } from "@mui/system";
import * as React from "react";

const ColorSvgIcon = styled("svg")(({ theme }) => ({
  color: "inherit",
  [theme.breakpoints.down("md")]: {
    fontSize: 12,
  },
}));

export default function SvgIcon(props: { src: string }) {
  return (
    <ColorSvgIcon width="24" height="24" viewBox="0 0 24 24">
      {/* NOTE: You must set svg#my inside the origin svg img */}
      <use href={`${props.src}#my`}></use>
    </ColorSvgIcon>
  )
}
