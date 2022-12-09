import React from "react";
import { Background } from "../landing/components/background";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Container, MenuItem, Select } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ScrollPage from "../layout/scroll_page";
import { Card } from "./components/card";
import { CardInMap } from "./components/card_in_map";
import { Masonry } from "@mui/lab";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const FilterView = styled(Box, { shouldForwardProp: (propsName) => propsName !== "active" })<{ active?: boolean }>(
  ({ theme, active }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }),
);
const fakeData = [
  {
    label: "VincomBaTrieu",
    name: "VincomBaTrieu",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    price: "123532",
    image:
      "https://statics.vincom.com.vn/vincom-tttm/gioi_thieu/anh_bai_viet/Hinh-anh-cac-thuong-hieu-o-Vincom-Ba-Trieu-so-1_1632322535.jpeg",
  },
  {
    label: "NovaLand",
    name: "NovaLand",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    price: "624542",
    image:
      "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/12/9/photo1670561661183-16705616612862130643853.jpeg",
  },
  {
    label: "Ocenpark",
    name: "Ocenpark",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    price: "123537",
    image: "https://www.villasvinhomesriverside.com/images/users/images/vinhomes-ocean-park-1.jpg",
  },
  {
    label: "Royal City",
    name: "Royal City",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    price: "343632",
    image: "https://www.villasvinhomesriverside.com/images/users/images/vinhomes-ocean-park-1.jpg",
  },
  {
    label: "Phú Nhuận",
    name: "Phú Nhuận",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    price: "53638",
    image: "https://batdongsanhungthinh.com.vn/wp-content/uploads/2017/10/Orchard-parkview-1.jpg",
  },
  {
    label: "Grandland",
    name: "Grandland",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    price: "223032",
    image: "https://www.villasvinhomesriverside.com/images/users/images/vinhomes-ocean-park-1.jpg",
  },
  {
    label: "Aqualand",
    name: "Aqualand",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    price: "127532",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt8TOGifEREG12639XMUxwB92qhsagOV7U06C_flRDp1DSD2Vk87DvwFu2rLyeNCCOdIs&usqp=CAU",
  },
  {
    label: "Thanh Bình Park",
    name: "Thanh Bình Park",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    price: "53032",
    image: "https://danhkhoireal.vn/wp-content/uploads/2019/01/masteri-parkland.jpg",
  },
];
const ContentView = styled(Box)(({ theme }) => ({}));
export const InvestPage = () => {
  // @ts-ignore
  return (
    <ScrollPage>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: -1,
          background: `url("/assets/imgs/background/6.jpg")`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      />
      <Container>
        <FilterView mb={5}>
          <Box>
            <Box mr={5}>
              <Autocomplete
                // disablePortal
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant={"filled"}
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: <img src={"/assets/imgs/invest/icons/search.svg"} style={{ marginRight: 12 }} />,
                      style: {
                        padding: 0,
                        paddingLeft: 12,
                        height: 40,
                      },
                    }}
                    sx={{ width: 270 }}
                    placeholder={"Tìm kiếm dự án bạn quan tâm"}
                  />
                )}
                options={fakeData}
                renderOption={(props, option) => (
                  // @ts-ignore
                  <Box p={1} {...props} width={400}>
                    <CardInMap {...option} />
                  </Box>
                )}
              />
            </Box>
          </Box>
          <Box display={"flex"}>
            <Box
              display={"flex"}
              sx={(theme) => ({
                [theme.breakpoints.down("md")]: {
                  display: "none",
                },
              })}
            >
              <Box mr={2}>
                <Select variant={"filled"} sx={{ height: 40 }} defaultValue={1}>
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
            </Box>
            {/*<Box mr={2}>*/}
            {/*  <Select variant={"filled"} sx={{ height: 40 }} defaultValue={1}>*/}
            {/*    <MenuItem value={1}>Floor arena: 60m2</MenuItem>*/}
            {/*  </Select>*/}
            {/*</Box>*/}
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
          </Box>
        </FilterView>
        <ContentView>
          {/*<Grid container spacing={6}>*/}
          {/*  <Grid item xs={6}>*/}
          {/*    <Grid container spacing={6}>*/}
          {/*      <Grid item xs={6}>*/}
          {/*        <Card />*/}
          {/*      </Grid>*/}
          {/*      <Grid item xs={6}>*/}
          {/*        <Card />*/}
          {/*      </Grid>*/}
          {/*      <Grid item xs={6}>*/}
          {/*        <Card />*/}
          {/*      </Grid>*/}
          {/*      <Grid item xs={6}>*/}
          {/*        <Card />*/}
          {/*      </Grid>*/}
          {/*    </Grid>*/}
          {/*  </Grid>*/}
          {/*  <Grid item xs={6}>*/}
          {/*    <Box height={700}>*/}
          {/*      <GoogleMapReact*/}
          {/*        bootstrapURLKeys={{ key: "" }}*/}
          {/*        defaultCenter={defaultProps.center}*/}
          {/*        defaultZoom={defaultProps.zoom}*/}
          {/*      >*/}
          {/*        <div*/}
          {/*          //@ts-ignore*/}
          {/*          lat={defaultProps.center.lat}*/}
          {/*          //@ts-ignore*/}
          {/*          lng={defaultProps.center.lng}*/}
          {/*          style={{*/}
          {/*            width: 400,*/}
          {/*            height: 400,*/}
          {/*          }}*/}
          {/*        >*/}
          {/*          <CardInMap />*/}
          {/*        </div>*/}
          {/*      </GoogleMapReact>*/}
          {/*    </Box>*/}
          {/*  </Grid>*/}
          {/*</Grid>*/}
          <Masonry defaultColumns={4} columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={6} sx={{ m: 0 }}>
            {fakeData.map((item, index) => {
              const isCollapseContent = (index + 1) % 2 === 1;
              return <Card key={"invest" + index} isCollapseContent={isCollapseContent} {...item} />;
            })}
          </Masonry>
        </ContentView>
        <Box mt={8}>
          <Grid container>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
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
    </ScrollPage>
  );
};
