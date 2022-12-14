import React from "react";
import { Background } from "../landing/components/background";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Container, Divider, MenuItem, Popper, Select } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ScrollPage from "../layout/scroll_page";
import { Card } from "./components/card";
import { SearchOption } from "./components/search_option";
import { LoadingButton, Masonry } from "@mui/lab";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import StackAnim from "../anim/stack_anim";
import Typography from "@mui/material/Typography";
import { HighlightCard } from "./components/highlight_card";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { getPostApiUrl, IPost, normalizeDatePosts } from "../../pages/news";
import axios from "axios";

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

const fakeData2 = [
  {
    label: "Grandland 1",
    name: "Grandland",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    price: "223032",
    image: "https://www.villasvinhomesriverside.com/images/users/images/vinhomes-ocean-park-1.jpg",
  },
  {
    label: "Aqualand 1",
    name: "Aqualand",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    price: "127532",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt8TOGifEREG12639XMUxwB92qhsagOV7U06C_flRDp1DSD2Vk87DvwFu2rLyeNCCOdIs&usqp=CAU",
  },
  {
    label: "Thanh Bình Park 1",
    name: "Thanh Bình Park",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    price: "53032",
    image: "https://danhkhoireal.vn/wp-content/uploads/2019/01/masteri-parkland.jpg",
  },
  {
    label: "Thanh Bình Park",
    name: "Thanh Bình Park",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    price: "53032",
    image: "https://danhkhoireal.vn/wp-content/uploads/2019/01/masteri-parkland.jpg",
  },
];

const fadeVariant = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

const Search = styled(Autocomplete)(({ theme }) => ({
  width: 290,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
export const InvestPage = () => {
  const [loading, setLoading] = React.useState(false);
  const [isLoadAll, setIsLoadAll] = React.useState(false);
  const [listInvests, setListInvests] = React.useState<any[]>(fakeData);
  const handleGetInvest = async () => {
    setLoading(true);
    try {
      setTimeout(() => {
        setListInvests([...listInvests, ...fakeData2]);
        setLoading(false);
        setIsLoadAll(true);
      }, 500);
    } catch (error) {
      setIsLoadAll(true);
      throw error;
    }
  };
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
        <Box mb={7}>
          <Typography variant={"h2"} mb={5}>
            Dự án đáng chú ý
          </Typography>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <StackAnim order={0} step={0.1} variants={fadeVariant} duration={0.6}>
                <HighlightCard {...fakeData[0]} />
              </StackAnim>
            </Grid>
            <Grid item xs={12} md={6}>
              <StackAnim order={1} step={0.1} variants={fadeVariant} duration={0.6}>
                <HighlightCard {...fakeData[1]} />
              </StackAnim>
            </Grid>
          </Grid>
        </Box>
        <Typography variant={"h2"} mb={5}>
          Tất cả dự án
        </Typography>
        <FilterView mb={5}>
          <Box mr={5} flex={1}>
            <Search
              fullWidth
              autoComplete={false}
              // disablePortal
              freeSolo
              PopperComponent={(prop) => (
                <Popper {...prop} sx={{ width: { xs: "auto", sm: "500px !important" } }} placement={"bottom-start"} />
              )}
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
                  placeholder={"Tìm kiếm dự án bạn quan tâm"}
                />
              )}
              options={listInvests}
              renderOption={(props, option) => (
                // @ts-ignore
                <Box p={1} {...props}>
                  {/* @ts-ignore */}
                  <SearchOption {...option} />
                </Box>
              )}
            />
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
                  [theme.breakpoints.down("md")]: {
                    padding: theme.spacing(5),
                  },
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
        <Grid container spacing={6}>
          {listInvests.map((item, index) => {
            const visibleOrder = Math.floor(index / 3);
            // TODO: Never use index as key for real data
            return (
              <Grid item lg={3} md={4} sm={6} xs={12} key={"invest" + index}>
                <StackAnim order={visibleOrder} step={0.1}>
                  <Card isCollapseContent={false} {...item} />
                </StackAnim>
              </Grid>
            );
          })}
        </Grid>
        <Box mt={8}>
          <Grid container>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              {!isLoadAll ? (
                <LoadingButton
                  variant={"contained"}
                  endIcon={<KeyboardArrowDownRoundedIcon />}
                  loading={loading}
                  onClick={handleGetInvest}
                >
                  Xem thêm
                </LoadingButton>
              ) : (
                <Typography>Đã tải hết bài viết!</Typography>
              )}
            </Grid>
          </Grid>
        </Box>
        <Divider sx={{ mt: 8, mb: 8 }} />
        <Typography variant={"h2"} mb={5}>
          Dự án bạn quan tâm
        </Typography>
        <Grid container spacing={6}>
          {fakeData.map((item, index) => {
            const visibleOrder = Math.floor(index / 3);
            // TODO: Never use index as key for real data
            return (
              <Grid item lg={3} md={4} sm={6} xs={12} key={"invest" + index}>
                <StackAnim order={visibleOrder} step={0.1}>
                  <Card isCollapseContent={false} {...item} />
                </StackAnim>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </ScrollPage>
  );
};
