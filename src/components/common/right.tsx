import { Box } from "@mui/system";

export function Right(props: any) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        height: "100%",
      }}
    >
      {props.children}
    </Box>
  );
}
