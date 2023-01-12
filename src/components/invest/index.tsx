import React, { useCallback } from "react";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { CircularProgress, Container, Divider, MenuItem, Popper, Select, Tooltip } from "@mui/material";
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
import useProject from "./hooks/use_project";
import { Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { HighlightCardSkeleton } from "./components/highlight_card_skeleton";
import { useFollowingProject } from "../../hooks/profile/use_investment";
import { CardSkeleton } from "./components/card_skeleton";
import { ProjectGql, ProjectType } from "../../gql/graphql";
import { debounce, throttle } from "lodash";
import { SearchProject } from "./components/search_project";

const FilterView = styled(Box, { shouldForwardProp: (propsName) => propsName !== "active" })<{ active?: boolean }>(
  ({ theme, active }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }),
);

export const InvestPage = () => {
  const { highlightProjects, loadingHighlightProject, projects, loadingProjects, loadProjects, searchProject } =
    useProject();
  const { loading: loadingFollowingProject, followingProjects } = useFollowingProject();

  const handleChangeType = async (e: any) => {
    const type = e.target.value;
    if (type === "ALL") {
      await loadProjects({
        filter: {
          type: null,
        },
      });
      return;
    }
    await loadProjects({
      filter: {
        type: type,
      },
    });
  };

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
          {!loadingHighlightProject ? (
            <Box width={"100%"} id={"invest-highlight-projects"}>
              <Swiper
                slidesPerView={2}
                spaceBetween={24}
                watchSlidesProgress={true}
                breakpoints={{
                  1024: {
                    slidesPerView: 2,
                  },
                  360: {
                    slidesPerView: 1,
                  },
                }}
                pagination={{
                  clickable: true,
                }}
                speed={800}
                modules={[Mousewheel, Pagination]}
                style={{
                  // overflow: "hidden",
                  width: "100%",
                }}
              >
                {highlightProjects.map((item) => {
                  return (
                    <SwiperSlide style={{ height: "100%" }} key={item.id}>
                      <HighlightCard data={item} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Box>
          ) : (
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <HighlightCardSkeleton />
              </Grid>
              <Grid item xs={12} md={6}>
                <HighlightCardSkeleton />
              </Grid>
            </Grid>
          )}
        </Box>

        <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>
          <Typography variant={"h2"} mb={5}>
            Tất cả dự án
          </Typography>
          <Box display={{ xs: "block", sm: "none" }}>
            <Tooltip title={"Tính năng đang phát triển"}>
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
            </Tooltip>
          </Box>
        </Box>
        <FilterView mb={5}>
          <Box mr={{ sm: 5, xs: 0 }} flex={1}>
            <SearchProject searchProject={searchProject} />
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
              {/*<Box mr={2}>*/}
              {/*  <Select variant={"filled"} sx={{ height: 40 }} defaultValue={1}>*/}
              {/*    <MenuItem value={1}>For Sale</MenuItem>*/}
              {/*  </Select>*/}
              {/*</Box>*/}
              <Box mr={2}>
                <Select
                  variant={"filled"}
                  sx={{ height: 40 }}
                  defaultValue={"ALL"}
                  color={"secondary"}
                  onChange={handleChangeType}
                >
                  {Object.values(ProjectType)
                    .concat("ALL" as any)
                    .map((item) => {
                      const label = (type: ProjectType) => {
                        switch (type) {
                          case ProjectType.House:
                            return "Nhà";
                          case ProjectType.Hotel:
                            return "Khách sạn";
                          case ProjectType.Homestay:
                            return "Homestay";
                          case ProjectType.Villa:
                            return "Villa";
                          case ProjectType.TouristVillage:
                            return "Tourist Village";
                          default:
                            return "Tất cả";
                        }
                      };
                      return (
                        <MenuItem key={item} value={item}>
                          {label(item)}
                        </MenuItem>
                      );
                    })}
                </Select>
              </Box>
              {/*<Box mr={2}>*/}
              {/*  <Select variant={"filled"} sx={{ height: 40 }} defaultValue={1}>*/}
              {/*    <MenuItem value={1}>Min Price: $500K</MenuItem>*/}
              {/*  </Select>*/}
              {/*</Box>*/}
              {/*<Box mr={2}>*/}
              {/*  <Select variant={"filled"} sx={{ height: 40 }} defaultValue={1}>*/}
              {/*    <MenuItem value={1}>Min Price: $7500K</MenuItem>*/}
              {/*  </Select>*/}
              {/*</Box>*/}
            </Box>
            {/*<Box mr={2}>*/}
            {/*  <Select variant={"filled"} sx={{ height: 40 }} defaultValue={1}>*/}
            {/*    <MenuItem value={1}>Floor arena: 60m2</MenuItem>*/}
            {/*  </Select>*/}
            {/*</Box>*/}
            <Box>
              <Tooltip title={"Tính năng đang phát triển"}>
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
                    [theme.breakpoints.down("sm")]: {
                      display: "none",
                    },
                  })}
                  variant={"contained"}
                  color={"secondary"}
                  startIcon={<img src={"/assets/imgs/invest/icons/more.svg"} />}
                >
                  More
                </Button>
              </Tooltip>
            </Box>
          </Box>
        </FilterView>

        <Grid container spacing={6}>
          {loadingProjects
            ? [
                Array.from({ length: 8 }).map((item, index) => (
                  <Grid item lg={3} md={4} sm={6} xs={12} key={"skeleton-project" + index}>
                    <CardSkeleton />
                  </Grid>
                )),
              ]
            : projects.map((item) => {
                return (
                  <Grid item lg={3} md={4} sm={6} xs={12} key={item.id}>
                    <Card isCollapseContent={false} data={item} />
                  </Grid>
                );
              })}
        </Grid>
        {/*<Box mt={8}>*/}
        {/*  <Grid container>*/}
        {/*    <Grid item xs={12} sx={{ textAlign: "center" }}>*/}
        {/*      {!isLoadAll ? (*/}
        {/*        <LoadingButton*/}
        {/*          variant={"contained"}*/}
        {/*          endIcon={<KeyboardArrowDownRoundedIcon />}*/}
        {/*          loading={loading}*/}
        {/*          onClick={handleGetInvest}*/}
        {/*        >*/}
        {/*          Xem thêm*/}
        {/*        </LoadingButton>*/}
        {/*      ) : (*/}
        {/*        <Typography>Đã tải hết bài viết!</Typography>*/}
        {/*      )}*/}
        {/*    </Grid>*/}
        {/*  </Grid>*/}
        {/*</Box>*/}
        <Divider sx={{ mt: 8, mb: 8 }} />
        <Typography variant={"h2"} mb={5}>
          Dự án bạn quan tâm
        </Typography>
        <Grid container spacing={6}>
          {loadingFollowingProject
            ? [
                Array.from({ length: 8 }).map((item, index) => (
                  <Grid item lg={3} md={4} sm={6} xs={12} key={"skeleton-project" + index}>
                    <CardSkeleton />
                  </Grid>
                )),
              ]
            : followingProjects?.map((item) => {
                return (
                  <Grid item lg={3} md={4} sm={6} xs={12} key={item.id}>
                    <Card isCollapseContent={false} data={item} />
                  </Grid>
                );
              })}
        </Grid>
      </Container>
    </ScrollPage>
  );
};
