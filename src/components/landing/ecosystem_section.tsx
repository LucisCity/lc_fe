import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { Section } from ".";
import { useAnimation } from "../../hooks/use_animation";

type Props = {
  activeSection?: Section;
};

export function EcosystemSection(props: Props) {
  const theme = useTheme();
  const activeSection = props.activeSection;

  const leftRef = React.useRef(null);
  const rightRef = React.useRef(null);
  const animation = useAnimation();

  React.useEffect(() => {
    if (activeSection !== Section.Ecosystem) {
      animation.fadeIn(leftRef.current);
      animation.fadeIn(rightRef.current);
    } else {
      animation.fadeOut(rightRef.current);
      animation.fadeOut(rightRef.current);
    }
  }, [activeSection, animation]);

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        background: `url(${"/landing/intro-luciscity.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left",
        padding: 4,
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
        marginTop={32}
        sx={{
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
          },
        }}
      >
        <Box component="img" src="/temp/img_ecosystem.png" alt="" ref={leftRef} />
        <Box
          sx={{
            marginLeft: 28,
            [theme.breakpoints.down("md")]: {
              marginLeft: 0,
              marginTop: 7,
            },
          }}
          ref={rightRef}
        >
          <Typography variant="h3" whiteSpace="pre-line">{`Hệ sinh thái
          Lucis City`}</Typography>
          <Typography whiteSpace="pre-line">
            {`Lucis City là hệ sinh thái số Bất Động sản
          và các ngành sản phẩm - dịch vụ giải trí
          cao cấp như: Du thuyền,
          Siêu xe, Lounge...`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
