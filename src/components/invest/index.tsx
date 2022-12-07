import React from "react";
import { Background } from "../landing/components/background";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Container, FilledInput, IconButton, MenuItem, Select, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import { headerHeight } from "../layout/header";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { StartIcon } from "../layout/footer";
import { Card } from "./components/card";
import GoogleMapReact from "google-map-react";
import { CardInMap } from "./components/card_in_map";

const FilterView = styled(Box, { shouldForwardProp: (propsName) => propsName !== "active" })<{ active?: boolean }>(
  ({ theme, active }) => ({
    display: "flex",
    alignItems: "center",
  }),
);

const ContentView = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));
export const InvestPage = () => {
  const defaultProps = {
    center: {
      lat: 20.99405715149181,
      lng: 105.79322390385505,
    },
    zoom: 15,
  };
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
        <FilterView mb={5}>
          <Box mr={5}>
            <FilledInput
              sx={{ height: 40, width: 270, pl: 3 }}
              startAdornment={<img src={"/assets/imgs/invest/icons/search.svg"} style={{ marginRight: 12 }} />}
              placeholder={"Tìm kiếm dự án bạn quan tâm"}
            />
          </Box>
          <Box mr={2}>
            <Select variant={"filled"} sx={{ height: 40, width: 100 }} defaultValue={1}>
              <MenuItem value={1}>For Sale</MenuItem>
            </Select>
          </Box>
          <Box mr={2}>
            <Select variant={"filled"} sx={{ height: 40 }} defaultValue={1} color={"secondary"}>
              <MenuItem value={1}>Type: House</MenuItem>
            </Select>
          </Box>
          <Box mr={2}>
            <Select variant={"filled"} sx={{ height: 40 }} defaultValue={1}>
              <MenuItem value={1}>Min Price: $500K</MenuItem>
            </Select>
          </Box>
          <Box mr={2}>
            <Select variant={"filled"} sx={{ height: 40 }} defaultValue={1}>
              <MenuItem value={1}>Min Price: $7500K</MenuItem>
            </Select>
          </Box>
          <Box mr={2}>
            <Select variant={"filled"} sx={{ height: 40 }} defaultValue={1}>
              <MenuItem value={1}>Floor arena: 60m2</MenuItem>
            </Select>
          </Box>
          <Box>
            <Button
              sx={(theme) => ({
                height: 40,
                pt: 4,
                pb: 4,
                pl: 5,
                pr: 5,
                fontSize: theme.typography.caption.fontSize,
                fontWeight: theme.typography.caption.fontWeight,
              })}
              variant={"contained"}
              color={"secondary"}
              startIcon={<img src={"/assets/imgs/invest/icons/more.svg"} />}
            >
              More
            </Button>
          </Box>
        </FilterView>
        <ContentView>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <Grid container spacing={6}>
                <Grid item xs={6}>
                  <Card />
                </Grid>
                <Grid item xs={6}>
                  <Card />
                </Grid>
                <Grid item xs={6}>
                  <Card />
                </Grid>
                <Grid item xs={6}>
                  <Card />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Box height={700}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "" }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                >
                  <div
                    //@ts-ignore
                    lat={defaultProps.center.lat}
                    //@ts-ignore
                    lng={defaultProps.center.lng}
                    style={{
                      width: 400,
                      height: 400,
                    }}
                  >
                    <CardInMap />
                  </div>
                </GoogleMapReact>
              </Box>
            </Grid>
          </Grid>
        </ContentView>
        <Box mt={8}>
          <Grid container>
            <Grid item xs={6} sx={{ textAlign: "center" }}>
              <Button
                variant={"contained"}
                endIcon={<img src="/assets/imgs/landing/arrow-circle-right.svg" alt="arrow" />}
              >
                Xem thêm
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
