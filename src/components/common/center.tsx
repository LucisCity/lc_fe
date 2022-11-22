import { Box } from "@mui/system";

interface IProps {
  children?: any;
}
export function Center(props: IProps) {
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
