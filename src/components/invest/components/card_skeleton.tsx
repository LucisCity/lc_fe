import * as React from "react";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActions, Skeleton } from "@mui/material";
import { Box } from "@mui/system";

export const CardSkeleton = () => {
  return (
    <MuiCard sx={{ borderRadius: 4, position: "relative" }} elevation={1}>
      <Box sx={{ position: "relative", height: "100%" }}>
        <Skeleton variant="rectangular" sx={{ borderRadius: 4, height: 130 }} />
      </Box>
      <CardContent sx={{ p: 5, pb: 0 }}>
        <Typography component={"span"} mb={1}>
          <Skeleton variant="text" sx={{ fontSize: "40px" }} />
        </Typography>
        <Typography variant="caption" color="text.secondary">
          <Skeleton variant="text" sx={{ fontSize: "10px" }} />
        </Typography>
        <Box mt={5} mb={5}>
          <Skeleton variant="rounded" width={"100%"} height={5} />
        </Box>
      </CardContent>
      <CardActions sx={{ p: 0, pb: 1 }}>
        <Box display={"flex"} justifyContent={"center"} width={"100%"}>
          <Skeleton variant="circular" width={15} height={15} />
        </Box>
      </CardActions>
    </MuiCard>
  );
};
