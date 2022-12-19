import { Box, Typography } from "@mui/material";
import { BoxProps } from "@mui/system";

export default function InvestDetailSteper() {
  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "scroll",
        overflowY: "hidden",
        // display: ["none", "inherit"],
      }}
    >
      <Box
        mt={7}
        sx={{
          position: "relative",
          minWidth: "1024px",
          // display: ["none", "inherit"],
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
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Step title="Chuẩn bị mở bán" content="" active alignItems="flex-start" />
          <Step title="Mở bán" content="05, Nov, 2022" active />
          <Step title="Dự kiến sinh lời" content="15, Nov, 2022" active />
          <Step title="Đang sinh lời" content="20, Nov, 2022" active />
          <Step title="Đang chờ bán" content="25, Nov, 2022" active />
          <Step title="Kết thúc" content="" active alignItems="flex-end" />
          {/* <Dot /> */}
        </Box>
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
