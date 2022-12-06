import { Box } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const Main = styled(Box)(({ theme }) => ({
  position: "relative",
}));

const ImageItem = styled(Box, { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  height: `100vh`,
  top: 0,
  left: 0,
  position: "absolute",
  width: "100%",
  opacity: 0,
  //@ts-ignore
  transition: theme.transitions.create(["opacity"], { duration: 1000 }),

  ...(open && {
    //@ts-ignore
    transition: theme.transitions.create(["opacity"], { duration: 500 }),
    opacity: 1,
  }),
}));

export const Background = ({ style }: { style?: React.CSSProperties }) => {
  const [screenIndex, setScreenIndex] = React.useState(1);
  React.useEffect(() => {
    const id = setInterval(() => {
      setScreenIndex((pre) => {
        if (pre === 6) {
          return 1;
        }
        return pre + 1;
      });
    }, 2000);

    return () => clearInterval(id);
  }, []);
  return (
    <Main style={style}>
      {[1, 2, 3, 4, 5, 6].map((item) => {
        return (
          <ImageItem
            key={"background" + item}
            open={screenIndex === item}
            sx={{
              background: `url("/assets/imgs/background/${item}.jpg")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left",
            }}
          />
        );
      })}
    </Main>
  );
};
