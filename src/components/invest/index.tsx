import React from "react";
import { Background } from "../landing/components/background";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Container, FilledInput, IconButton, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import { headerHeight } from "../layout/header";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { StartIcon } from "../layout/footer";

const FilterView = styled(Box, { shouldForwardProp: (propsName) => propsName !== "active" })<{ active?: boolean }>(
  ({ theme, active }) => ({}),
);
export const InvestPage = () => {
  return (
    <Box paddingTop={`${headerHeight}px`} mt={10}>
      <Background
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: -1,
        }}
      />
      <Container>
        <FilterView>
          <FilledInput
            sx={{ height: 40, pl: 3 }}
            startAdornment={<img src={"/assets/imgs/invest/icons/search.svg"} style={{ marginRight: 12 }} />}
          />
        </FilterView>
      </Container>
    </Box>
  );
};
