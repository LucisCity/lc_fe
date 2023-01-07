import * as React from "react";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

import Grid from "@mui/material/Grid";

export const HighlightCardSkeleton = () => {
  return (
    <MuiCard sx={{ borderRadius: 4 }} elevation={0}>
      <Grid container sx={{ p: 6 }} spacing={6}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ position: "relative", height: "100%" }}>
            <Skeleton variant="rectangular" sx={{ borderRadius: 4, height: { sm: 320, md: 250 } }} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardContent sx={{ p: 0, ":last-child": { pb: 0 } }}>
            <Typography component={"span"} mb={1}>
              <Skeleton variant="text" sx={{ fontSize: "40px" }} />
            </Typography>
            <Typography variant="caption" color="text.secondary">
              <Skeleton variant="text" sx={{ fontSize: "10px" }} />
            </Typography>

            <Box mt={10}>
              <Box display={"flex"} justifyContent={"space-between"} mb={3}>
                <Typography variant={"caption"} component="span">
                  <Skeleton variant="text" sx={{ fontSize: "10px" }} width={100} />
                </Typography>
              </Box>
              <Box display={"flex"} justifyContent={"space-between"} mb={3}>
                <Typography variant={"caption"} component="span">
                  <Skeleton variant="text" sx={{ fontSize: "10px" }} width={200} />
                </Typography>
              </Box>
              <Box display={"flex"} justifyContent={"space-between"} mb={3}>
                <Typography variant={"caption"} component="span">
                  <Skeleton variant="text" sx={{ fontSize: "10px" }} width={200} />
                </Typography>
              </Box>
              <Box display={"flex"} justifyContent={"space-between"} mb={3}>
                <Typography variant={"caption"} component="span">
                  <Skeleton variant="text" sx={{ fontSize: "10px" }} width={200} />
                </Typography>
              </Box>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography variant={"caption"} component="span">
                  <Skeleton variant="text" sx={{ fontSize: "10px" }} width={210} />
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </MuiCard>
  );
};
