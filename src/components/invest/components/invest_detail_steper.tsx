import { Box, Typography } from "@mui/material";
import { BoxProps } from "@mui/system";

export default function InvestDetailSteper() {
  return (
    <Box
      mt={8}
      sx={{
        position: "relative",
        // background: "red",
      }}
    >
      <Box
        sx={{
          background: "#6555EE",
          backgroundClip: "content-box",
          height: "8px",
          width: "100%",
          px: "4px",
          my: "12px",
          position: "absolute",
          top: "31.5%",
          left: "0px",
          zIndex: 1,
          // transform: "translateY(-50%)",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          zIndex: 2,
          // background: "grey",
        }}
      >
        <Step title="Chuẩn bị mở bán" content="" active alignItems="left" />
        <Step title="Mở bán" content="05, Nov, 2022" active />
        <Step title="Dự kiến sinh lời" content="05, Nov, 2022" active />
        <Step title="Đang sinh lời" content="05, Nov, 2022" active />
        <Step title="Đang chờ bán" content="05, Nov, 2022" active={false} />
        <Dot />
      </Box>
    </Box>
  );
}

const Dot = (props: BoxProps) => (
  <Box sx={{ width: "16px", height: "16px", borderRadius: "50%", bgcolor: "primary.main" }} {...props} />
);

const Step = (props: { title: string; content: string; active: boolean; alignItems?: string }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: props.alignItems ?? "center",
      gap: "12px",
      flex: "1",
    }}
  >
    <Typography variant="h6" sx={{ height: "23px" }}>
      {props.title}
    </Typography>
    <Dot />
    <Typography variant="body1" sx={{ height: "23px" }}>
      {props.active ? props.content : ""}
    </Typography>
  </Box>
);
