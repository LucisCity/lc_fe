import { Box } from "@mui/system";

export function Center(props: any) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.children}
    </Box>
  );
}
