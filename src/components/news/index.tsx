import React from "react";
import { Box } from "@mui/system";
import { Avatar, Chip, Container, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import ScrollPage from "../layout/scroll_page";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { Card } from "./components/card";
import moment from "moment";
import { truncateStr } from "../../utils/string.util";
import he from "he";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import Link from "next/link";
import { getPostApiUrl, IPost, normalizeDatePosts } from "../../pages/news";

const imageHighlightHeight = 390;
export const ImageHighlight = styled("img")(({ theme }) => ({
  borderRadius: 16,
  height: imageHighlightHeight,
  width: "100%",
  objectFit: "cover",
}));

const perPage = 6; // number of records per page
export const NewsPage = ({ posts }: { posts: IPost[] }) => {
  const highlightPost = posts?.[0];
  const [loading, setLoading] = React.useState(false);
  const [isLoadAll, setIsLoadAll] = React.useState(false);
  const [listPosts, setListPosts] = React.useState<IPost[]>(posts);
  const [offset, setOffset] = React.useState(7); // first request get 7 records
  const handleGetPosts = async () => {
    setLoading(true);
    try {
      const url = getPostApiUrl(offset, perPage);
      const res = await axios.get(url, {
        headers: { "Accept-Encoding": "gzip,deflate,compress" },
      });
      const posts: IPost[] = normalizeDatePosts(res.data);

      setListPosts([...listPosts, ...posts]);
      setOffset(offset + perPage);
      setLoading(false);

      if (posts.length < 6) {
        setIsLoadAll(true);
      }
    } catch (error) {
      setIsLoadAll(true);
      throw error;
    }
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
        <Link href={`${highlightPost.link}`} target="_blank">
          <Box
            component={Paper}
            elevation={0}
            height={{ xs: "auto", md: imageHighlightHeight }}
            borderRadius={4}
            bgcolor="rgba(255, 255, 255, 0.5)"
            sx={{
              cursor: "pointer",
            }}
          >
            <Grid container>
              <Grid item xs={12} md={7}>
                <ImageHighlight src={highlightPost?.image ?? ""} alt={highlightPost.title ?? "lucis city post"} />
              </Grid>
              <Grid item xs={12} md={5}>
                <Box
                  pl={{ xs: 4, lg: 10 }}
                  pr={{ xs: 4, lg: 10 }}
                  pt={{ xs: 4, sm: 8 }}
                  pb={{ xs: 4, sm: 8 }}
                  display={"flex"}
                  flexDirection="column"
                  height={"100%"}
                  justifyContent="space-between"
                >
                  <Box>
                    <Box mb={3}>
                      {highlightPost?.categories?.map((category, index) => (
                        <Chip
                          key={category + index}
                          sx={{
                            background: "rgba(101, 85, 238, 0.2)",
                            mr: 1,
                            mb: 1,
                          }}
                          color="primary"
                          label={
                            <Typography
                              textTransform={"uppercase"}
                              color="rgba(101, 85, 238, 1)"
                              variant={"caption"}
                              fontWeight={500}
                              letterSpacing={1.5}
                            >
                              {category}
                            </Typography>
                          }
                        />
                      ))}
                    </Box>
                    <Typography variant="caption" component={"p"} mt={2} mb={3}>
                      {moment(new Date(highlightPost?.createdDate ?? "")).format("h:mm a Do, MMM,  YYYY")}
                    </Typography>
                    <Typography variant="h2" mb={3}>
                      {highlightPost?.title}
                    </Typography>
                    <Typography>{highlightPost?.description}</Typography>
                  </Box>
                  <Box display={"flex"} mt={3} alignItems="center">
                    <Avatar
                      sx={{ mr: 3 }}
                      alt="Admin"
                      src="https://secure.gravatar.com/avatar/50e39012884b28809e59503c53349426?s=96&d=mm&r=g"
                    >
                      A
                    </Avatar>
                    <Box>
                      <Typography variant="h4">Admin</Typography>
                      <Typography variant="caption" component={"p"}>
                        Marketing Coordinator
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Link>
        <Box mt={8}>
          <Grid container spacing={6}>
            {listPosts.slice(1).map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={"post-" + index} sx={{ height: "inherit" }}>
                <Card
                  imageUrl={item?.image ?? ""}
                  title={item?.title}
                  description={item?.description}
                  link={item?.link}
                  createdDate={item?.createdDate}
                  categories={item?.categories}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box mt={8}>
          <Grid container>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              {!isLoadAll ? (
                <LoadingButton
                  variant={"contained"}
                  endIcon={!loading ? <img src="/assets/imgs/landing/arrow-circle-right.svg" alt="arrow" /> : null}
                  loading={loading}
                  onClick={handleGetPosts}
                >
                  Xem thêm
                </LoadingButton>
              ) : (
                <Typography>Đã tải hết bài viết!</Typography>
              )}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ScrollPage>
  );
};
