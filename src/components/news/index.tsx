import React from "react";
import { Box } from "@mui/system";
import { Avatar, Button, Chip, Container, Paper, Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid";
import ScrollPage from "../layout/scroll_page";
import Typography from "@mui/material/Typography";
import StackAnim from "../anim/stack_anim";
import { styled } from "@mui/system";
import { Card } from "./components/card";
import moment from "moment";
import { truncateStr } from "../../utils/string.util";
import he from "he";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import Link from "next/link";

const imageHighlightHeight = 390;
export const ImageHighlight = styled("img")(({ theme }) => ({
  borderRadius: 16,
  height: imageHighlightHeight,
  width: "100%",
  objectFit: "cover",
}));

const newsEndpoint = "https://news.luciscity.io";
const newsApiEndpoint = "https://news-api.luciscity.io";
export const NewsPage = ({ posts }: { posts: any[] }) => {
  const highlightPost = posts && posts.length > 0 ? posts[0] : {};
  const [loading, setLoading] = React.useState(false);
  const [isLoadAll, setIsLoadAll] = React.useState(false);
  const [listPosts, setListPosts] = React.useState(posts);
  const [page, setPage] = React.useState(2);
  const handleGetPosts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${newsApiEndpoint}/wp-json/wp/v2/posts?order=desc&page=${page}&per_page=10`, {
        headers: { "Accept-Encoding": "gzip,deflate,compress" },
      });

      setListPosts([...listPosts, res.data]);

      setPage(page + 1);
    } catch (error) {
      setIsLoadAll(true);
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
        <Link href={`${newsEndpoint}/${highlightPost.slug}`} target="_blank">
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
                <ImageHighlight
                  src={highlightPost?.yoast_head_json?.og_image?.[0]?.url ?? ""}
                  alt={highlightPost?.yoast_head_json?.title ?? "lucis city post"}
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <Box
                  pl={{ xs: 4, lg: 10 }}
                  pr={{ xs: 4, lg: 10 }}
                  pt={8}
                  pb={8}
                  display={"flex"}
                  flexDirection="column"
                  height={"100%"}
                  justifyContent="space-between"
                >
                  <Box>
                    <Box mb={4}>
                      <Chip
                        sx={{
                          background: "rgba(101, 85, 238, 0.2)",
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
                            Recently
                          </Typography>
                        }
                      />
                    </Box>
                    <Typography variant="h2" mb={3}>
                      {he.decode(highlightPost?.title?.rendered)}
                    </Typography>
                    <Typography>
                      {he.decode(
                        truncateStr(highlightPost?.yoast_head_json?.og_description?.replace("[&hellip;]", ""), 0, 30),
                      )}
                    </Typography>
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
                        {moment(new Date(highlightPost?.yoast_head_json?.article_published_time ?? null)).format(
                          "h:mm a Do, MMM,  YYYY",
                        )}
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
              <Grid item xs={12} sm={6} md={4} key={item?.guid?.rendered ?? index} sx={{ height: "inherit" }}>
                <Card
                  imageUrl={item?.yoast_head_json?.og_image?.[0]?.url ?? ""}
                  title={item?.title?.rendered}
                  description={item?.yoast_head_json?.og_description}
                  link={`${newsEndpoint}/${item.slug}`}
                  createdDate={item?.yoast_head_json?.article_published_time}
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
