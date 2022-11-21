import { Box } from "@mui/system";

export function Center(props: any) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      {props.children}
    </Box>
  );
}
