import { Avatar, Box, Container, Divider, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

const footerHeight = 550;
const FooterStyled = styled("footer")(({ theme }) => ({
  height: footerHeight,
  width: "100%",
  background: "rgba(50, 100, 155, 0.2)",
  backdropFilter: "blur(12px)",
  display: "flex",
  alignItems: "center",
}));

const UlComponent = styled("ul")(({ theme }) => ({
  listStyleType: "none",
  gap: theme.spacing(1),
  paddingLeft: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
}));

export default function Footer() {
  return (
    <FooterStyled>
      <Container>
        <Grid container>
          <Grid item xs={4}>
            <Typography variant="h3">Lucis city</Typography>
            <Typography variant="h6">
              Now you can build fast your awesome website with these ready-to-use blocks, elements and sections.
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h6">First column</Typography>
                <UlComponent>
                  <li>Link 1</li>
                  <li>Link 2</li>
                  <li>Link 3</li>
                  <li>Link 4</li>
                  <li>Link 5</li>
                </UlComponent>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">Second column</Typography>
                <UlComponent>
                  <li>Link 1</li>
                  <li>Link 2</li>
                  <li>Link 3</li>
                  <li>Link 4</li>
                  <li>Link 5</li>
                </UlComponent>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6">Latest News</Typography>
            <Box
              id="latest news"
              sx={{
                height: "190px",
                width: "100%",
                background: "#1E2029",
                borderRadius: "4px",
              }}
            ></Box>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 4, mb: 4, background: "#000" }} />
        <Box display={"flex"} justifyContent="space-between">
          <Typography>{new Date().getFullYear()} @ Lucis</Typography>
          <Box id="list-reference" display={"flex"} gap={1}>
            <Avatar>L</Avatar>
            <Avatar>U</Avatar>
            <Avatar>C</Avatar>
            <Avatar>I</Avatar>
            <Avatar>S</Avatar>
          </Box>
        </Box>
      </Container>
    </FooterStyled>
  );
}
