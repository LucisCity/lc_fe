import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { Section } from ".";
import { useAnimation } from "../../hooks/use_animation";
import { Center } from "../common/center";

type Props = {
  activeSection?: Section;
};

export function OperationSection(props: Props) {
  const theme = useTheme();
  const activeSection = props.activeSection;

  const leftRef = React.useRef(null);
  const rightRef = React.useRef(null);
  const animation = useAnimation();

  React.useEffect(() => {
    if (activeSection !== Section.Operation) {
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
        height: "100vh",
        background: `url(${"/landing/intro-luciscity.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
          height: "auto",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          padding: "1px 144px",
          margin: "0px auto",
          [theme.breakpoints.down("lg")]: {
            padding: "1px 16px 16px 16px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 22.5,
            marginTop: 38,
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
              marginTop: 15,
              gap: 12,
            },
          }}
          ref={leftRef}
        >
          <Typography variant="h3" whiteSpace="pre-line">{`Basic operation
            of Lucis city`}</Typography>
          <Typography
            variant="h6"
            flex={1}
            // whiteSpace="pre-line"
          >
            Hệ sinh thái sáng tạo cung cấp quyền đồng sở hữu tài sản và tạo ra một thị trường đầu tư có giá trị cao. Hệ
            sinh thái của Lucis City được vận hành để đảm bảo lợi nhuân cho các Nhà đầu tư ở mọi danh mục đầu tư.
          </Typography>
        </Box>
        <Center ref={rightRef}>
          <Box
            component="img"
            src="/temp/img_operation.png"
            alt=""
            sx={{
              maxWidth: "100%",
              marginTop: 17,
            }}
          />
        </Center>
      </Box>
    </Box>
  );
}
