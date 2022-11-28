import { Box } from "@mui/system";

export function Left(props: any) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100%",
      }}
    >
      {props.children}
    </Box>
  );
}
